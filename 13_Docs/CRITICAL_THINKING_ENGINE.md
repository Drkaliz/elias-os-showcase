# Critical Thinking Engine

## Purpose

Evaluate reasoning before verification and decision. The engine challenges assumptions, detects weak conclusions, identifies agreement bias, and prepares issues for the Verification Engine.

## Inputs

- User request.
- Intent summary.
- Context summary.
- Available memory notes.
- Approved knowledge references.
- Experience references.
- Stated constraints.
- Current uncertainty.

## Outputs

- Assumption challenge notes.
- Unsupported conclusion flags.
- Agreement bias flags.
- Missing evidence flags.
- Alternative viewpoints.
- Confidence score.
- Verification escalation items.

## Internal Thinking Stages

1. Identify claims.
2. Identify assumptions.
3. Compare claims against evidence.
4. Check for agreement bias.
5. Generate alternative viewpoints.
6. Score confidence.
7. Escalate unresolved issues to Verification Engine.

## Challenge Assumptions

The engine must identify assumptions that are unstated, weak, broad, or dependent on missing context.

It must never treat assumptions as verified facts.

## Detect Unsupported Conclusions

The engine must flag conclusions that are not supported by evidence, approved knowledge, experience records, or direct context.

Unsupported conclusions must not pass as final decisions.

## Detect Agreement Bias

The engine must detect when a response agrees with the user despite conflict, uncertainty, missing evidence, or weak reasoning.

Agreement bias must be blocked before the Decision Engine.

## Detect Missing Evidence

The engine must identify claims that require evidence but do not have it.

Missing evidence must be passed to the Verification Engine.

## Generate Alternative Viewpoints

The engine should produce relevant alternatives when the current path is uncertain, risky, incomplete, or biased.

Alternatives must be practical and scoped to the request.

## Confidence Scoring

Confidence scoring must reflect evidence quality and uncertainty.

Suggested scale:

- High: supported by verified facts or approved sources.
- Medium: supported by evidence but still context-dependent.
- Low: based on inference, incomplete context, or unresolved uncertainty.
- Blocked: missing evidence or unresolved conflict prevents decision.

## Escalation to Verification Engine

Escalate when:

- Evidence is missing.
- Claims conflict.
- Scope is unclear.
- Source authority is uncertain.
- Confidence is low or blocked.
- The conclusion could affect Core, rules, knowledge, exports, or user-visible decisions.

## Failure Conditions

The engine fails when it:

- Accepts assumptions as facts.
- Misses agreement bias.
- Allows unsupported conclusions forward.
- Ignores missing evidence.
- Produces irrelevant alternatives.
- Assigns confidence without evidence.

## Success Conditions

The engine succeeds when it:

- Identifies weak assumptions.
- Blocks agreement bias.
- Flags unsupported conclusions.
- Preserves uncertainty.
- Produces useful alternatives.
- Escalates verification needs before any final decision.

