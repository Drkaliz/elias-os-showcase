# Rule Lifecycle

## Lifecycle Summary

Elias OS is not only rule-driven. The system separates knowledge from rules so useful material does not become mandatory instruction without reason.

Conceptual flow:

```text
Knowledge
|
v
Principles
|
v
Rules
|
v
Tests
|
v
Exports
```

Old rules move through this lifecycle:

```text
Inbox
|
v
Extraction
|
v
Classification
|
v
Conflict Detection
|
v
Human Review
|
v
Approved Knowledge / Approved Rules
|
v
Export
```

No rule may skip the lifecycle when entering Core. Useful material that does not need to be mandatory should become approved knowledge, not a rule.

## Stage 1: Inbox

Location:

```text
./05_Inbox/
```

Purpose:

- Store raw old rules, old prompts, notes, corrections, and imported files.
- Preserve original input for traceability.

Trust level:

- Untrusted.
- Not approved.
- Not used directly in exports.

Rules:

- Old rules are raw input only.
- Raw files must not be edited to make them look cleaner.
- If a file contains emotional, unclear, or temporary instructions, that is evidence for classification, not a reason to accept them.

## Stage 2: Extraction

Location:

```text
./07_Processed/extracted_rules/
```

Purpose:

- Convert raw input into candidate knowledge items or rule statements.
- Separate actual rules from context, complaints, examples, and one-time instructions.

Extraction output should include:

- Candidate knowledge or rule text.
- Source file.
- Source location if available.
- Original wording or short source quote when needed.
- Initial interpretation.
- Extractor notes.

Extraction restrictions:

- Do not rewrite intent to make a weak rule look strong.
- Do not merge unrelated rules.
- Do not promote candidates to approved files.

## Stage 3: Classification

Location:

```text
./07_Processed/classifications/
```

Purpose:

- Decide what kind of candidate the extracted rule is.

Classification fields:

- Scope: Knowledge, Core, Behavior, Module, Project, Style, Archive, Reject.
- Priority: Constitution, Safety, Verification, Evidence, Project Rules, Style.
- Status: Candidate, Needs Clarification, Duplicate, Conflict, Rejected, Approved.
- Reason required: Yes or No.
- Experience reference: optional for candidates, required if an incident or success case is used as justification.
- Testability: Testable, Partially Testable, Not Testable.
- Clarity: Clear, Ambiguous, Emotional, Temporary, Overbroad.

Classification rule:

If a candidate is unclear, emotional, temporary, or overbroad, it must not enter Core.

## Stage 4: Conflict Detection

Location:

```text
./07_Processed/conflicts/
```

Purpose:

- Find conflicts before rules become active.

Conflict types:

- Direct contradiction: two rules require incompatible behavior.
- Priority conflict: lower-priority rule tries to override higher-priority rule.
- Duplicate rule: same rule appears in different words.
- Scope conflict: project rule is trying to become Core without universal need.
- Style conflict: tone preference conflicts with verification or safety.
- Evidence conflict: a rule is being applied without enough proof.
- Knowledge conflict: reference material is being treated as mandatory rule text.
- Test conflict: rule cannot be verified but claims strict behavior.
- Export conflict: rules selected for one export create incompatible instructions.

Conflict resolution order:

1. Apply priority from `RULE_PRIORITY.md`.
2. Prefer the narrower scope when the broader rule is not proven universal.
3. Keep the clearer and more testable version.
4. Preserve the reason or experience reference.
5. Send unresolved issues to human review.

No AI may silently resolve a Core conflict by changing Core.

## Stage 5: Human Review

Location:

```text
./07_Processed/review_queue/
```

Purpose:

- Let a human approve, reject, narrow, rewrite, or demote a candidate rule.

Review packet should include:

- Candidate rule.
- Source.
- Proposed destination.
- Proposed priority.
- Proposed output type: Approved Knowledge or Approved Rule.
- Reason or experience reference.
- Evidence.
- Conflict report.
- Testability assessment.
- Expected behavior.
- Advantages and disadvantages if the decision changes architecture or Core behavior.

Possible outcomes:

- Approve.
- Reject.
- Request rewrite.
- Merge with existing rule.
- Demote to lower-priority file.
- Move to project-specific rule.
- Approve as knowledge.
- Archive as historical context.

## Stage 6: Approved Knowledge / Approved Rules

Locations:

```text
./06_Knowledge/
./01_Core/
./02_Behavior/
./03_Modules/
./04_Projects/
```

Purpose:

- Store approved knowledge and active approved rules.

Approved knowledge may include:

- Approved principles.
- Decision patterns.
- Reference documents.
- Best practices.
- Reasoning patterns.

Approved knowledge is not automatically mandatory. It supports reasoning, rule design, tests, and exports.

Every approved rule must have:

- Rule ID.
- Rule text.
- Scope.
- Priority.
- Evidence.
- Reason or experience reference.
- Approval date.
- Test reference where possible.

Required rule metadata:

```text
Rule ID:
Priority:
Scope:
Status:
Reason or Experience:
Evidence:
Test Reference:
Approved By:
Approved Date:
```

Rules without reason or experience reference are not accepted.

Approved knowledge must have:

```text
Knowledge ID:
Type:
Source:
Reason:
Evidence:
Approved By:
Approved Date:
```

Knowledge without source and reason is not accepted.

## Stage 7: Export

Location:

```text
./12_Exports/
```

Purpose:

- Generate task-specific prompt packages from approved source files.

Export input order:

```text
Core + Behavior + Approved Knowledge + Selected Project or Module + Selected Profile
```

Export restrictions:

- Do not use Inbox directly.
- Do not use unresolved candidates.
- Do not include rejected rules.
- Do not treat knowledge as mandatory rule text unless approved as a rule.
- Do not include duplicate rules when one canonical rule exists.
- Do not include project rules outside the selected project.
- Do not treat the export as source of truth.

## Lifecycle Quality Gates

A candidate rule fails the lifecycle if it is:

- Unclear.
- Temporary.
- Emotional.
- Duplicated without improvement.
- Conflicting without resolution.
- Not connected to a reason or experience reference.
- Too broad for its evidence.
- More complex than the problem it solves.

Failed candidates should be rejected, archived, or returned for clarification.
