# Verification Engine

## Purpose

Validate claims, evidence, knowledge, experience, rules, and conflicts before any final decision or response.

The Verification Engine must never invent evidence, ignore conflicts, upgrade assumptions into facts, or skip verification because confidence is high.

## Inputs

- User request.
- Intent and context summaries.
- Critical Thinking Engine flags.
- Evidence references.
- Knowledge references.
- Experience references.
- Rule references.
- Current uncertainty and confidence notes.

## Outputs

- Verified facts.
- Evidence-backed conclusions.
- Unverified claims.
- Conflict flags.
- Uncertainty notes.
- Confidence assessment.
- Escalation recommendation.

## Verification Stages

1. Identify claims requiring verification.
2. Match claims to evidence or approved sources.
3. Validate source scope and reliability.
4. Check knowledge, experience, and rule references.
5. Detect conflicts.
6. Preserve uncertainty.
7. Calculate confidence.
8. Escalate unresolved issues.

## Evidence Validation

Evidence is valid only when source, scope, date, and reliability are known enough for the current decision.

Missing or weak evidence must be labeled and escalated when it affects the answer.

## Knowledge Validation

Knowledge is valid only when it is approved, relevant to scope, and supported by evidence.

Candidate or unapproved knowledge must not be treated as authority.

## Experience Validation

Experience records are valid only when reviewed and relevant.

Incidents, successes, lessons, and patterns must not become rules or conclusions automatically.

## Rule Validation

Rules are valid only when approved, scoped correctly, and not superseded.

Operational rules must have justification and testability or observable review criteria.

## Conflict Detection

The engine must detect:

- Evidence conflicts.
- Knowledge conflicts.
- Experience conflicts.
- Rule conflicts.
- Scope conflicts.
- Priority conflicts.

Unresolved conflicts must block or qualify the final decision.

## Uncertainty Handling

Uncertainty must be preserved and labeled as:

- Unknown.
- Unverified.
- Inferred.
- Hypothesis.
- Conflicting.
- Blocked.

Uncertainty must not be rewritten as fact.

## Confidence Calculation

Confidence must reflect verification quality.

Suggested scale:

- High: verified facts or approved sources support the conclusion.
- Medium: evidence supports the conclusion but scope remains limited.
- Low: conclusion depends on inference or incomplete evidence.
- Blocked: missing evidence or unresolved conflict prevents decision.

High confidence does not remove the duty to verify.

## Escalation Policy

Escalate when:

- Evidence is missing or unreliable.
- Sources conflict.
- Scope is unclear.
- A rule conflict exists.
- Core, Constitution, ADRs, or approved governance may be affected.
- Confidence is low or blocked.

Escalation must identify the missing information or unresolved conflict.

## Failure Conditions

The engine fails when it:

- Invents evidence.
- Ignores conflicts.
- Upgrades assumptions into facts.
- Skips verification because confidence is high.
- Treats unapproved knowledge as authority.
- Treats experience as an automatic rule.
- Hides uncertainty from the final response path.

## Success Conditions

The engine succeeds when it:

- Separates verified facts from uncertainty.
- Validates evidence, knowledge, experience, and rules.
- Detects conflicts.
- Preserves uncertainty.
- Produces a defensible confidence assessment.
- Escalates unresolved verification issues before decision.

