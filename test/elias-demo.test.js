import test from 'node:test';
import assert from 'node:assert/strict';
import { comparePriority, detectConflicts, runDemo } from '../demo/elias-demo.js';

test('Core modification requires human approval', () => {
  const result = runDemo({ action: 'modify-core' });
  assert.equal(result.status, 'BLOCKED_PENDING_HUMAN_REVIEW');
  assert.equal(result.verified, false);
});

test('priority conflict is detected', () => {
  const conflicts = detectConflicts([{ higher: 'Constitution', lower: 'Project Rules' }]);
  assert.equal(conflicts.length, 1);
  assert.equal(conflicts[0].type, 'Priority conflict');
});

test('priority order places Constitution above Style', () => {
  assert.equal(comparePriority('Constitution', 'Style'), 1);
  assert.equal(comparePriority('Style', 'Constitution'), -1);
});

test('safe review path generates an auditable trail', () => {
  const result = runDemo();
  assert.equal(result.status, 'READY_FOR_HUMAN_REVIEW');
  assert.ok(result.audit.length >= 8);
  assert.equal(result.audit.at(-1).stage, 'Audit Trail');
});

test('unapproved rule action is rejected', () => {
  const result = runDemo({ action: 'apply-unapproved-rule' });
  assert.equal(result.status, 'BLOCKED_UNAPPROVED_ACTION');
  assert.equal(result.verified, false);
});

test('missing evidence is rejected', () => {
  const result = runDemo({ evidenceIds: [] });
  assert.equal(result.status, 'BLOCKED_MISSING_EVIDENCE');
});
