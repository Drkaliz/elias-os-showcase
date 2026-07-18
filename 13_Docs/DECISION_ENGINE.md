# Decision Engine

## Purpose

Determine the final allowed action or response after intent, context, knowledge, experience, critical thinking, verification, and self audit have completed.

The Decision Engine must never override Constitution, Verification, or Self Audit; ignore uncertainty; or produce a decision without sufficient evidence.

## Inputs

- User request and constraints.
- Intent and context summaries.
- Knowledge and experience references.
- Critical Thinking Engine findings.
- Verification Engine results.
- Self Audit Engine result.
- Evidence, uncertainty, and confidence notes.

## Outputs

- Authorized decision.
- Deferred decision.
- Escalation request.
- Refusal.
- Response authorization notes.

## Decision Prerequisites

A decision may proceed only when:

- Constitution compliance is confirmed.
- Verification is complete or uncertainty is clearly bounded.
- Self Audit passes.
- Scope is controlled.
- Evidence is sufficient for the decision category.
- Conflicts are resolved or escalated.

## Decision Process

1. Confirm prerequisites.
2. Identify available decision categories.
3. Match confidence level to allowed action.
4. Apply escalation and human review rules.
5. Authorize, defer, escalate, or refuse.
6. Pass decision notes to Response Composer.

## Confidence Thresholds

- High: action or answer may be authorized if Self Audit passes.
- Medium: answer may proceed with uncertainty limits.
- Low: defer or escalate unless the response is explicitly limited.
- Blocked: no decision; escalate, request clarification, or refuse.

Confidence must not override verification or audit results.

## Decision Categories

- Proceed: response or action is authorized.
- Proceed with caveat: response is allowed with uncertainty disclosed.
- Defer: decision is delayed pending missing context or evidence.
- Escalate: human review or verification is required.
- Refuse: request conflicts with Constitution, safety, authority, or constraints.

## Escalation Rules

Escalate when:

- Evidence is insufficient.
- Conflict remains unresolved.
- Scope is unclear.
- Human approval is required.
- Core, Constitution, ADRs, rules, knowledge, or exports may be affected.
- Verification or Self Audit blocks readiness.

## Human Review Requirements

Human review is required before:

- Core modification.
- Constitutional change.
- Architecture change.
- Promotion into Core.
- Resolving governance conflicts.
- Proceeding when policy requires approval.

## Deferred Decision Policy

Defer when the right decision depends on missing context, unverified evidence, unresolved conflict, or human approval.

A deferred decision must state what is missing or blocked.

## Refusal Policy

Refuse when the requested action violates Constitution, safety, authority, scope, or approved governance.

Refusal must be direct and cite the controlling blocker.

## Response Authorization

A response is authorized only when the selected decision category is compatible with evidence, confidence, Verification, and Self Audit.

Authorization does not make the response source of truth.

## Failure Conditions

The Decision Engine fails when it:

- Overrides Constitution.
- Overrides Verification.
- Overrides Self Audit.
- Ignores uncertainty.
- Produces a decision without sufficient evidence.
- Allows unresolved conflict to pass as resolved.
- Authorizes action outside scope.

## Success Conditions

The Decision Engine succeeds when it:

- Makes the latest possible decision in the pipeline.
- Preserves evidence and uncertainty boundaries.
- Respects Verification and Self Audit.
- Selects the correct decision category.
- Escalates or defers when required.
- Authorizes only responses that satisfy governance and evidence requirements.

