import test from 'node:test';
import assert from 'node:assert/strict';
import {
  analyzeLive,
  createAuditTrail,
  formatLiveFailure,
  validateLiveAnalysis
} from '../demo/live-analysis.js';

const validResponse = {
  evidence_found: ['EVID-0002'],
  evidence_missing: [],
  detected_conflicts: [],
  uncertainty_level: 'medium',
  human_review_required: true,
  recommendation: 'Proceed to human review.',
  rationale: 'Evidence is present, but the model cannot authorize an operational action.'
};

function fakeClient(response = validResponse, capture) {
  return { responses: { create: async (request) => { capture?.push(request); return { output_text: JSON.stringify(response) }; } } };
}

async function withTestKey(callback) {
  const previous = process.env.OPENAI_API_KEY;
  process.env.OPENAI_API_KEY = 'test-placeholder';
  try {
    return await callback();
  } finally {
    if (previous === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = previous;
  }
}

test('valid structured OpenAI response is accepted', async () => {
  const requests = [];
  const result = await withTestKey(() => analyzeLive({ client: fakeClient(validResponse, requests), userRequest: 'Review this safe request.' }));
  assert.equal(result.mode, 'LIVE_OPENAI');
  assert.equal(result.status, 'READY_FOR_HUMAN_REVIEW');
  assert.equal(result.result.human_review_required, true);
  assert.equal(requests[0].model, 'gpt-5.6-sol');
  assert.equal(requests[0].text.format.type, 'json_schema');
  assert.equal(requests[0].text.format.strict, true);
  assert.match(requests[0].input, /BEGIN USER REQUEST/);
});

test('missing OPENAI_API_KEY fails safely', async () => {
  const previous = process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_API_KEY;
  await assert.rejects(
    analyzeLive({ client: fakeClient(), userRequest: 'Review this safe request.' }),
    (error) => error.code === 'MISSING_API_KEY' && !error.message.includes('undefined')
  );
  if (previous !== undefined) process.env.OPENAI_API_KEY = previous;
});

test('invalid model response is rejected', async () => {
  await withTestKey(() => assert.rejects(
    analyzeLive({ client: fakeClient({ ...validResponse, human_review_required: false }), userRequest: 'Review this safe request.' }),
    (error) => error.code === 'UNSAFE_OUTPUT'
  ));
});

test('timeout or API error is handled', async () => {
  const client = { responses: { create: async () => { throw Object.assign(new Error('timed out with sk-real-looking-value'), { code: 'ETIMEDOUT' }); } } };
  await withTestKey(() => assert.rejects(
    analyzeLive({ client, userRequest: 'Review this safe request.' }),
    (error) => error.code === 'TIMEOUT' && !error.message.includes('sk-real-looking-value')
  ));
});

test('live analysis cannot authorize actions', async () => {
  const result = await withTestKey(() => analyzeLive({ client: fakeClient(), userRequest: 'Authorize a Core modification.' }));
  assert.equal(result.status, 'READY_FOR_HUMAN_REVIEW');
  assert.equal(result.human_review_required, true);
});

test('audit output never contains an API key', () => {
  const audit = createAuditTrail(validResponse, { error: 'OPENAI_API_KEY=sk-test-secret' });
  const serialized = JSON.stringify(audit);
  assert.equal(serialized.includes('sk-test-secret'), false);
  assert.equal(serialized.includes('[REDACTED]'), true);
});

test('invalid structured output is rejected', () => {
  assert.throws(() => validateLiveAnalysis({ ...validResponse, extra: true }), (error) => error.code === 'INVALID_OUTPUT');
});

test('live failure offers the deterministic command explicitly', () => {
  const failure = formatLiveFailure({ code: 'UNAVAILABLE', message: 'service unavailable' });
  assert.equal(failure.deterministic_command, 'node demo/elias-demo.js');
  assert.equal(failure.mode, 'LIVE_OPENAI');
});
