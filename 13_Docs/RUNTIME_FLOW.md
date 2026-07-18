# Runtime Flow

## Purpose

Define the runtime execution flow of Elias OS from user input to final response.

This document is architecture only. It does not authorize code, automation, or implementation.

## Runtime Lifecycle

```text
Input
-> Intent
-> Context
-> Memory Access
-> Knowledge
-> Experience
-> Critical Thinking
-> Verification
-> Self Audit
-> Decision
-> Response Composer
-> Output
```

## Engine Execution Order

1. Input intake.
2. Intent Engine.
3. Context Engine.
4. Memory Access Layer.
5. Knowledge Engine.
6. Experience Engine.
7. Critical Thinking Engine.
8. Verification Engine.
9. Self Audit Engine.
10. Decision Engine.
11. Response Composer.
12. Output.

## Engine Handoffs

### Input to Intent

Input: user request and visible context.

Output: requested outcome, constraints, and prohibited actions.

### Intent to Context

Input: intent summary.

Output: scope, milestone, authority boundaries, and relevant files.

### Context to Memory Access

Input: scope and authority boundaries.

Output: relevant approved prior context or explicit unknowns.

### Memory Access to Knowledge

Input: retrieved context and unknowns.

Output: approved knowledge, principles, references, and evidence candidates.

### Knowledge to Experience

Input: approved knowledge and evidence state.

Output: reviewed incidents, success cases, lessons, patterns, or no matching experience.

### Experience to Critical Thinking

Input: knowledge, experience, context, and uncertainty.

Output: challenged assumptions, bias flags, missing evidence flags, and alternative viewpoints.

### Critical Thinking to Verification

Input: claims, assumptions, conflicts, and missing evidence flags.

Output: verified facts, unverified claims, confidence, and unresolved conflicts.

### Verification to Self Audit

Input: verification results and uncertainty.

Output: compliance pass, block, or required correction.

### Self Audit to Decision

Input: audit result and blockers.

Output: authorized decision category, deferral, escalation, or refusal.

### Decision to Response Composer

Input: authorized decision and constraints.

Output: final response draft.

### Response Composer to Output

Input: final response draft.

Output: user-facing response.

## Abort Conditions

Abort runtime flow when:

- Constitution is violated.
- Scope exceeds approval.
- Human review is required but missing.
- Evidence is missing for an operational decision.
- Verification or Self Audit blocks response readiness.
- Conflict cannot be resolved or disclosed safely.

## Human Review Checkpoints

Human review is mandatory before:

- Core modification.
- Architecture change.
- Constitutional change.
- Promotion into Core.
- External knowledge approval.
- Governance conflict resolution.
- Any action explicitly requiring approval.

## Retry Policy

Retry is allowed only for recoverable issues:

- Missing clarification.
- Incomplete context.
- Correctable scope mismatch.
- Verification source mismatch.
- Response composition issue.

Retry must not bypass failed governance, missing approval, or unresolved conflict.

## Failure Recovery

When failure occurs:

- Preserve the failure reason.
- Identify the failed layer.
- Return blocker or clarification request.
- Avoid partial decisions.
- Record future experience only after review.

## Logging Points

Future logs should capture:

- Request ID.
- Layer reached.
- Blockers.
- Human review requirement.
- Verification status.
- Decision category.
- Response status.

Logs must not become source authority.

## Traceability

Each request should preserve references to:

- User request.
- Applied constraints.
- Knowledge sources.
- Experience records.
- Evidence references.
- Verification result.
- Decision category.
- Response outcome.

Traceability must not create approved records automatically.

## End-of-Request Cleanup

At completion:

- Discard temporary assumptions.
- Preserve only approved trace records.
- Keep generated output separate from source authority.
- Do not promote runtime material into rules, knowledge, or patterns.
- Mark unresolved blockers for review if required.

