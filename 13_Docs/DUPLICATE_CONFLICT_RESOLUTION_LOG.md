# Duplicate and Conflict Resolution Log

## Purpose

Define and record the duplicate and conflict review control required before production promotion.

This log is documentation only. It does not approve, merge, reject, promote, or create knowledge, patterns, rules, registry entries, or Core changes automatically.

## Required Record Fields

Every duplicate or conflict record must include:

- Log ID.
- Source file and source section.
- Candidate or group IDs.
- Record type: Duplicate or Conflict.
- Description.
- Evidence or source reference.
- Impact assessment.
- Proposed resolution.
- Decision status.
- Human reviewer.
- Review date.
- Related records.
- Final disposition.

## Allowed Decision Statuses

- Pending Human Review.
- Merged by Human Approval.
- Kept Separate by Human Approval.
- Rejected by Human Approval.
- Escalated.
- Deferred.

No status other than Pending Human Review may be assigned without a named human reviewer and review date.

## Resolution Rules

1. Do not merge items solely because their wording is similar.
2. Do not treat a source authority claim as a conflict resolution.
3. Preserve all source references when items are merged or kept separate.
4. Unresolved conflicts remain blocked from promotion.
5. Duplicate groups must be reviewed before creating separate reusable assets.
6. Corrupted or unsupported material remains rejected or escalated until its source can be verified.
7. No record in this log authorizes Core, Behavior, Architecture, rule, pattern, or knowledge changes by itself.

## Threshold Evaluation Exercise

Exercise source: `./07_Processed/IPTS_BATCH_001_INTAKE_REPORT.md`.

- Primary extracted candidates: 62.
- Duplicate groups recorded: 6.
- Conflict groups recorded: 5.
- Applicable duplicate threshold: 12.4 candidates, calculated as the lower of 15 and 20% of 62.
- Applicable conflict threshold: 9.3 candidates, calculated as the lower of 10 and 15% of 62.
- Result: thresholds were not reached for this exercise.
- Required action: continue only as human-review analysis; no automatic resolution or promotion.

## Duplicate Records

| Log ID | Source | Candidate Group | Duplicate Description | Proposed Resolution | Decision Status | Human Reviewer | Approval Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DUP-001 | Sections 1, 2, 4 | D-001 | Multiple statements warn against treating all outputs as URL_CODE. | Merge only after human confirmation of one mode-selection principle. | Merged by Human Approval | Product Owner Human Approval | 2026-07-15 |
| DUP-002 | Sections 2, 9 | D-002 | Deep Search must be explicit appears in multiple sections. | Merge into one explicit Deep Search gate after human review. | Merged by Human Approval | Product Owner Human Approval | 2026-07-15 |
| DUP-003 | Sections 3, 9 | D-003 | MODE B must not include `start=` appears in multiple sections. | Keep one scoped operational statement if approved. | Merged by Human Approval | Product Owner Human Approval | 2026-07-15 |
| DUP-004 | Sections 3, 8 | D-004 | Country routing restriction for MODE B Google Keyword overlaps across sections. | Merge into mode-boundary knowledge only after evidence review. | Deferred | Product Owner Human Approval | 2026-07-15 |
| DUP-005 | Sections 5, 9 | D-005 | Visit Rule is not Deep Search appears in multiple sections. | Merge into one boundary record after human review. | Merged by Human Approval | Product Owner Human Approval | 2026-07-15 |
| DUP-006 | Sections 3, 4 | D-006 | Source type `2` behavior is repeated across MODE B and MODE C. | Merge only after confirming the two scopes are compatible. | Deferred | Product Owner Human Approval | 2026-07-15 |

## Conflict Records

| Log ID | Source | Candidate Group | Conflict Description | Required Resolution | Decision Status | Human Reviewer | Approval Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CON-001 | Header | C-001 | `PRIORITY: HIGHEST` conflicts with Elias priority governance. | Reject the authority claim; retain source metadata only after human review. | Rejected by Human Approval | Product Owner Human Approval | 2026-07-15 |
| CON-002 | Sections 0-9 | C-002 | `LOCKED` labels conflict with Elias human review and approval flow. | Reject automatic approval meaning; escalate any intended operational use. | Rejected by Human Approval | Product Owner Human Approval | 2026-07-15 |
| CON-003 | Section 0 | C-003 | This file wins conflicts with the rule that old rules are raw input only. | Reject as a priority claim; preserve the source reference. | Rejected by Human Approval | Product Owner Human Approval | 2026-07-15 |
| CON-004 | Sections 3, 5, 6 | C-004 | Inspected UI claims may become stale. | Require dated evidence, source reference, and review cycle before promotion. | Deferred | Product Owner Human Approval | 2026-07-15 |
| CON-005 | Sections 1-9 | C-005 | Direct output instructions may be promoted beyond their project scope. | Keep outside Core; require module-scope review and testability before any promotion. | Escalated | Product Owner Human Approval | 2026-07-15 |

## Human Review Requirement

The exercise has a human approval record for every entry. Deferred and escalated records remain blocked from promotion until their stated follow-up review is complete.
