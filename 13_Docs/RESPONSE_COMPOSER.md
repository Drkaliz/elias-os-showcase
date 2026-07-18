# Response Composer

## Purpose

Compose the final user-facing response from the authorized decision, evidence state, uncertainty, and constraints.

The Response Composer must never change the Decision, invent facts, hide uncertainty, add unsupported claims, or ignore user constraints.

## Inputs

- Authorized decision.
- User request and constraints.
- Intent and context summaries.
- Verification results.
- Self Audit result.
- Evidence and uncertainty notes.
- Required refusal, escalation, or clarification notes.

## Outputs

- Final response.
- Stated uncertainty or blockers.
- Clarification request when needed.
- Refusal message when required.
- Action recommendation when authorized.

## Response Composition Stages

1. Confirm authorized decision category.
2. Preserve user intent and constraints.
3. Select tone and structure.
4. Include evidence and uncertainty boundaries.
5. Compose refusal, clarification, or recommendation if required.
6. Run final quality checklist.

## Tone Adaptation

Tone must match the task, user constraints, and governance requirements.

Tone must never soften a required warning, hide uncertainty, or imply agreement without support.

## User Intent Preservation

The response must answer the actual request and preserve explicit constraints.

If intent is unclear or conflicting, the response must ask for clarification or state the blocker.

## Evidence Citation Policy

Evidence references must be included when the answer depends on approved evidence, knowledge, experience, rules, or external verification.

If evidence is unavailable, the response must not imply that it exists.

## Uncertainty Communication

The response must clearly distinguish:

- Verified facts.
- Evidence-backed conclusions.
- Reasoned inferences.
- Hypotheses.
- Unknowns.
- Blockers.

Uncertainty must be concise but visible.

## Refusal Composition

Refusals must be direct, scoped, and tied to the controlling blocker.

A refusal must not add unrelated alternatives unless authorized by the decision.

## Clarification Policy

Ask for clarification only when missing information blocks a correct or safe response.

Clarification must identify the missing decision-critical information.

## Action Recommendation Policy

Recommendations are allowed only when authorized by the Decision Engine and supported by evidence or stated uncertainty.

Recommendations must not exceed scope or imply authority not granted.

## Final Quality Checklist

Before output, confirm:

- Decision is unchanged.
- No invented facts are included.
- Uncertainty is visible.
- Claims are supported or qualified.
- User constraints are respected.
- Refusal, clarification, or recommendation matches the authorized decision.

## Failure Conditions

The Response Composer fails when it:

- Changes the Decision.
- Invents facts.
- Hides uncertainty.
- Adds unsupported claims.
- Ignores user constraints.
- Converts a blocker into a recommendation.
- Presents generated output as source authority.

## Success Conditions

The Response Composer succeeds when it:

- Communicates the authorized decision clearly.
- Preserves evidence and uncertainty boundaries.
- Respects user constraints.
- Uses appropriate tone.
- Avoids unsupported claims.
- Provides only authorized refusal, clarification, recommendation, or final answer.

