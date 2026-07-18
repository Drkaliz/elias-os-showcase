# Knowledge Intake Policy

## Purpose

Define how external knowledge may enter Elias OS for review.

This policy does not authorize automation, Inbox processing, rule ingestion, or implementation.

## Incoming Knowledge Sources

An incoming knowledge source is any external or historical material proposed for review.

Allowed source types:

- Old rule files.
- Prompt collections.
- Project documentation.
- Lessons learned.
- Architecture notes.
- Decision records.
- Best practices.
- Reference material.
- Conversation extracts.

Incoming sources are untrusted until reviewed.

## Intake Pipeline

```text
Receive
|
v
Integrity Check
|
v
Classification
|
v
Duplicate Detection
|
v
Conflict Detection
|
v
Knowledge Candidate
|
v
Human Review
|
v
Approved Knowledge
|
v
Pattern Candidate
|
v
Rule Candidate
```

The pipeline is sequential. No item may skip human review before becoming approved knowledge, a pattern candidate, or a rule candidate.

## Rejection Policy

A source or candidate must be rejected when it is:

- Corrupted.
- Temporary.
- Emotional.
- Contradictory without resolution.
- Unsupported by evidence.
- Unsafe.
- Outdated.
- From an unknown source.
- Outside Elias OS scope.
- More complex than the problem it addresses.

Rejected material may be archived only if it has audit value.

## Promotion Policy

Knowledge may be promoted only after human review.

Allowed outcomes:

- Pattern: when repeated use shows a reusable decision or reasoning structure.
- Rule: when operational behavior is mandatory, justified, scoped, and testable.
- Reference: when the material is useful context but not mandatory behavior.
- Archived: when the material has historical value but should not influence active work.

Promotion is never automatic.

Knowledge without evidence must not become an operational rule.

## Human Review Requirements

Human approval is mandatory before:

- A source becomes approved knowledge.
- Knowledge becomes a pattern candidate.
- Knowledge becomes a rule candidate.
- Any item affects Core.
- Any conflict is resolved by changing scope or priority.
- Any rejected item is archived as historical reference.

AI may prepare summaries, classifications, and risk notes, but must not approve intake outcomes.

## Traceability

Every accepted item must record:

- Source.
- Date.
- Reason.
- Reviewer.
- Related ADR.
- Related Knowledge.
- Related Pattern.

If any required traceability field is unknown, the item remains in review.

## Evidence Policy

Evidence must be recorded before knowledge influences operational behavior.

Evidence should identify:

- Source reliability.
- Scope.
- Date or version.
- Supporting material.
- Contradicting material, if known.

Knowledge without evidence may remain a candidate or reference, but it must not become an operational rule.

## Versioning Policy

Knowledge revisions must preserve history.

Rules:

- No silent overwrites.
- Record what changed.
- Record why it changed.
- Preserve prior approved wording.
- Link revisions to reviewer and date.
- Re-review outdated or contradicted knowledge.

## Risk Assessment

Risks of importing external knowledge:

- Importing outdated assumptions.
- Promoting project-specific guidance too broadly.
- Treating old rules as truth.
- Duplicating existing knowledge.
- Creating conflicts with Core or approved rules.
- Preserving emotional or temporary instructions.
- Losing source traceability.
- Expanding Elias OS beyond proportional complexity.

## Exit Criteria

Milestone C.5 is complete when:

- This policy exists in `./13_Docs/`.
- The intake pipeline is defined.
- Rejection and promotion policies are defined.
- Human approval points are explicit.
- Traceability, evidence, and versioning requirements are defined.
- No source material has been processed.
- No code, scripts, rules, knowledge entries, or automation were created.

