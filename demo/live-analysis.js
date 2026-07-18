import OpenAI from 'openai';

export const DEFAULT_LIVE_MODEL = 'gpt-5.6-sol';
export const LIVE_MODE = 'LIVE_OPENAI';

export const LIVE_ANALYSIS_SCHEMA = Object.freeze({
  type: 'object',
  additionalProperties: false,
  properties: {
    evidence_found: { type: 'array', items: { type: 'string' } },
    evidence_missing: { type: 'array', items: { type: 'string' } },
    detected_conflicts: { type: 'array', items: { type: 'string' } },
    uncertainty_level: { type: 'string', enum: ['low', 'medium', 'high', 'unknown'] },
    human_review_required: { type: 'boolean' },
    recommendation: { type: 'string' },
    rationale: { type: 'string' }
  },
  required: [
    'evidence_found',
    'evidence_missing',
    'detected_conflicts',
    'uncertainty_level',
    'human_review_required',
    'recommendation',
    'rationale'
  ]
});

export const APPROVED_CONTEXT = [
  'Elias OS showcase governance context:',
  '- Constitution and human review govern authorization.',
  '- Evidence must be distinguished from inference and uncertainty.',
  '- Conflicts must not be ignored.',
  '- The model is advisory evidence only.',
  '- The model may not authorize actions or modify files, rules, knowledge, registries, or governance records.',
  '- Protected or uncertain requests stop at READY_FOR_HUMAN_REVIEW.'
].join('\n');

const SENSITIVE_INPUT = /(?:[A-Za-z]:\\|(?:^|\s)\\\\|\/Users\/|\/home\/|\/mnt\/|(?:sk|pk)-[A-Za-z0-9_-]{8,}|-----BEGIN [A-Z ]+ KEY-----|\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)/i;

export class LiveAnalysisError extends Error {
  constructor(code, message) {
    super(message);
    this.name = 'LiveAnalysisError';
    this.code = code;
  }
}

function safeText(value, label) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new LiveAnalysisError('INVALID_INPUT', `${label} must be a non-empty string.`);
  }
  if (value.length > 8000) {
    throw new LiveAnalysisError('INVALID_INPUT', `${label} exceeds the live request size limit.`);
  }
  if (SENSITIVE_INPUT.test(value)) {
    throw new LiveAnalysisError('UNSAFE_INPUT', `${label} contains a path, credential-like value, or personal identifier.`);
  }
  return value.trim();
}

function redact(value) {
  return String(value)
    .replace(/Bearer\s+[A-Za-z0-9._-]+/gi, 'Bearer [REDACTED]')
    .replace(/(?:sk|pk)-[A-Za-z0-9_-]{8,}/gi, '[REDACTED_KEY]')
    .replace(/OPENAI_API_KEY\s*[=:]\s*[^\s,;]+/gi, 'OPENAI_API_KEY=[REDACTED]');
}

function classifyError(error) {
  const status = Number(error?.status);
  const message = String(error?.message ?? '');
  if (error instanceof SyntaxError) return ['INVALID_OUTPUT', 'Live model returned invalid structured output.'];
  if (error?.name === 'AbortError' || error?.code === 'ETIMEDOUT' || /timeout|timed out/i.test(message)) {
    return ['TIMEOUT', 'Live OpenAI request timed out.'];
  }
  if (status === 401 || status === 403) return ['AUTHENTICATION', 'Live OpenAI authentication failed.'];
  if (status === 429) return ['RATE_LIMIT', 'Live OpenAI rate limit reached.'];
  if (status === 404) return ['MODEL_UNAVAILABLE', 'Requested OpenAI model is unavailable.'];
  if (status >= 500) return ['UNAVAILABLE', 'Live OpenAI service is unavailable.'];
  return ['API_ERROR', 'Live OpenAI request failed.'];
}

export function validateLiveAnalysis(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new LiveAnalysisError('INVALID_OUTPUT', 'Live model output is not an object.');
  }
  const required = [...LIVE_ANALYSIS_SCHEMA.required].sort();
  const keys = Object.keys(value).sort();
  if (keys.length !== required.length || keys.some((key, index) => key !== required[index])) {
    throw new LiveAnalysisError('INVALID_OUTPUT', 'Live model output does not match the required fields.');
  }
  if (!Array.isArray(value.evidence_found) || !value.evidence_found.every((item) => typeof item === 'string')) {
    throw new LiveAnalysisError('INVALID_OUTPUT', 'evidence_found must be an array of strings.');
  }
  if (!Array.isArray(value.evidence_missing) || !value.evidence_missing.every((item) => typeof item === 'string')) {
    throw new LiveAnalysisError('INVALID_OUTPUT', 'evidence_missing must be an array of strings.');
  }
  if (!Array.isArray(value.detected_conflicts) || !value.detected_conflicts.every((item) => typeof item === 'string')) {
    throw new LiveAnalysisError('INVALID_OUTPUT', 'detected_conflicts must be an array of strings.');
  }
  if (!['low', 'medium', 'high', 'unknown'].includes(value.uncertainty_level)) {
    throw new LiveAnalysisError('INVALID_OUTPUT', 'uncertainty_level is invalid.');
  }
  if (value.human_review_required !== true) {
    throw new LiveAnalysisError('UNSAFE_OUTPUT', 'Live analysis must require human review.');
  }
  if (typeof value.recommendation !== 'string' || typeof value.rationale !== 'string') {
    throw new LiveAnalysisError('INVALID_OUTPUT', 'recommendation and rationale must be strings.');
  }
  return Object.freeze({
    evidence_found: [...value.evidence_found],
    evidence_missing: [...value.evidence_missing],
    detected_conflicts: [...value.detected_conflicts],
    uncertainty_level: value.uncertainty_level,
    human_review_required: true,
    recommendation: value.recommendation,
    rationale: value.rationale
  });
}

export function createAuditTrail(analysis, extra = {}) {
  const audit = {
    mode: LIVE_MODE,
    status: 'READY_FOR_HUMAN_REVIEW',
    human_review_required: true,
    result: analysis ? validateLiveAnalysis(analysis) : null,
    ...extra
  };
  return JSON.parse(JSON.stringify(audit, (_key, value) => typeof value === 'string' ? redact(value) : value));
}

function responseText(response) {
  if (typeof response?.output_text === 'string') return response.output_text;
  return response?.output?.[0]?.content?.[0]?.text ?? '';
}

export function buildLiveInput(userRequest) {
  return [
    'BEGIN ELIAS GOVERNANCE CONTEXT',
    APPROVED_CONTEXT,
    'END ELIAS GOVERNANCE CONTEXT',
    '',
    'BEGIN USER REQUEST',
    safeText(userRequest, 'User request'),
    'END USER REQUEST',
    '',
    'Return only the required structured analysis. Keep rationale concise. Do not reveal hidden chain-of-thought.'
  ].join('\n');
}

export async function analyzeLive({ userRequest, client, model = process.env.OPENAI_MODEL || DEFAULT_LIVE_MODEL, timeoutMs = 15000 } = {}) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || !String(apiKey).trim()) {
    throw new LiveAnalysisError('MISSING_API_KEY', 'OPENAI_API_KEY is not set. Run the deterministic command: node demo/elias-demo.js');
  }
  if (typeof model !== 'string' || !/^[A-Za-z0-9._-]+$/.test(model)) {
    throw new LiveAnalysisError('INVALID_MODEL', 'OPENAI_MODEL contains invalid characters.');
  }
  const input = buildLiveInput(userRequest);
  const openai = client ?? new OpenAI({ apiKey: String(apiKey), timeout: timeoutMs, maxRetries: 0 });
  try {
    const response = await openai.responses.create({
      model,
      input,
      text: {
        format: {
          type: 'json_schema',
          name: 'elias_live_analysis',
          strict: true,
          schema: LIVE_ANALYSIS_SCHEMA
        }
      }
    });
    const parsed = JSON.parse(responseText(response));
    return createAuditTrail(validateLiveAnalysis(parsed));
  } catch (error) {
    if (error instanceof LiveAnalysisError) throw error;
    const [code, message] = classifyError(error);
    throw new LiveAnalysisError(code, redact(message));
  }
}

export function formatLiveFailure(error) {
  return {
    mode: LIVE_MODE,
    status: 'LIVE_FAILED',
    error: {
      code: error?.code ?? 'LIVE_FAILURE',
      message: redact(error?.message ?? 'Live analysis failed.')
    },
    deterministic_command: 'node demo/elias-demo.js',
    human_review_required: true
  };
}
