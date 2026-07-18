import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export const PRIORITY = Object.freeze({
  Constitution: 6,
  Safety: 5,
  Verification: 4,
  Evidence: 3,
  'Project Rules': 2,
  Style: 1
});

const KNOWLEDGE = Object.freeze({
  'KNW-0002': {
    title: 'IPTS Output Mode Taxonomy Reference',
    scope: 'IPTS output mode reference knowledge only',
    evidence: 'EVID-0002',
    status: 'Approved'
  },
  'KNW-0003': {
    title: 'IPTS Mode A URL_CODE Example Reference',
    scope: 'IPTS Mode A reference examples',
    evidence: 'EVID-0003',
    status: 'Approved'
  }
});

function event(audit, stage, status, detail) {
  audit.push({ stage, status, detail });
}

export function comparePriority(left, right) {
  if (!(left in PRIORITY) || !(right in PRIORITY)) throw new Error('Unknown priority');
  return Math.sign(PRIORITY[left] - PRIORITY[right]);
}

export function detectConflicts(instructions = []) {
  const conflicts = [];
  for (const item of instructions) {
    if (!item || !item.higher || !item.lower) continue;
    if (comparePriority(item.higher, item.lower) > 0) {
      conflicts.push({
        type: 'Priority conflict',
        higher: item.higher,
        lower: item.lower,
        resolution: 'Higher-priority authority wins; human review remains required.'
      });
    }
  }
  return conflicts;
}

export function lookupKnowledge(ids = []) {
  return ids.map((id) => KNOWLEDGE[id] ? { id, ...KNOWLEDGE[id] } : null);
}

export function runDemo(request = {}) {
  const audit = [];
  const input = {
    action: request.action ?? 'review-ipts-asset',
    scope: request.scope ?? 'IPTS',
    knowledgeIds: request.knowledgeIds ?? ['KNW-0002'],
    evidenceIds: request.evidenceIds ?? ['EVID-0002'],
    instructions: request.instructions ?? [],
    humanApproved: request.humanApproved ?? false
  };

  event(audit, 'Input', 'PASS', `Received action: ${input.action}`);

  const protectedAction = input.action === 'modify-core';
  if (protectedAction) {
    event(audit, 'Constitution and Governance Check', 'BLOCK', 'Core modification requires explicit human approval.');
    event(audit, 'Human Review Gate', 'REQUIRED', 'AI may recommend but cannot self-authorize Core changes.');
    return { status: 'BLOCKED_PENDING_HUMAN_REVIEW', verified: false, conflicts: [], knowledge: [], audit };
  }
  event(audit, 'Constitution and Governance Check', 'PASS', 'Action does not request protected Core modification.');

  const knowledge = lookupKnowledge(input.knowledgeIds);
  const missingKnowledge = knowledge.some((item) => item === null);
  if (missingKnowledge || input.evidenceIds.length === 0) {
    event(audit, 'Knowledge Lookup', 'BLOCK', 'Approved knowledge or evidence reference is missing.');
    return { status: 'BLOCKED_MISSING_EVIDENCE', verified: false, conflicts: [], knowledge, audit };
  }
  event(audit, 'Knowledge Lookup', 'PASS', `${knowledge.length} approved knowledge record(s) found.`);

  const conflicts = detectConflicts(input.instructions);
  if (conflicts.length > 0) {
    event(audit, 'Conflict Detection', 'BLOCK', `${conflicts.length} unresolved priority conflict(s) found.`);
    event(audit, 'Human Review Gate', 'REQUIRED', 'Conflict disposition must be reviewed by a human.');
    return { status: 'BLOCKED_UNRESOLVED_CONFLICT', verified: false, conflicts, knowledge, audit };
  }
  event(audit, 'Conflict Detection', 'PASS', 'No simulated priority conflicts found.');

  if (input.action === 'apply-unapproved-rule') {
    event(audit, 'Human Review Gate', 'BLOCK', 'Unapproved operational rules cannot be applied.');
    return { status: 'BLOCKED_UNAPPROVED_ACTION', verified: false, conflicts, knowledge, audit };
  }

  event(audit, 'Human Review Gate', 'REQUIRED', 'Showcase prepares a review result; it does not grant operational approval.');
  event(audit, 'Verification', 'PASS', 'Evidence references are present and scoped to approved mock knowledge.');
  event(audit, 'Self Audit', 'PASS', 'Scope, uncertainty, and authority boundaries are preserved.');
  event(audit, 'Audit Trail', 'RECORDED', 'Deterministic audit trail generated.');

  return {
    status: 'READY_FOR_HUMAN_REVIEW',
    verified: true,
    confidence: 'Medium: deterministic mock data and project-specific scope',
    conflicts,
    knowledge,
    audit
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = runDemo();
  console.log(JSON.stringify({
    mode: 'DETERMINISTIC_SHOWCASE',
    showcase: true,
    simulated: true,
    sourceRoot: './',
    result
  }, null, 2));
}
