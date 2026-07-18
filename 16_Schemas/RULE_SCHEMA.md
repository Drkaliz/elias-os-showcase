# Rule Schema

## Purpose
Define the required structure for approved operational rule records.

This schema is documentation only. It does not create rules, automation, or registry entries.

## 1. Required Fields
- Rule ID
- Rule Statement
- Purpose
- Source Pattern
- Source Knowledge
- Evidence Reference
- Scope
- Exceptions
- Test or Observable Review Criteria
- Human Approval Status
- Version

## 2. Optional Fields
- Related ADRs
- Related Tests
- Re-review Trigger
- Supersedes
- Superseded By
- Notes

## 3. Validation Rules
- The rule must be operational and mandatory within its stated scope.
- The rule must not conflict with Constitution, Safety, Verification, Evidence, or higher-priority authority.
- The rule must have evidence or a justified source.
- The rule must be testable or have observable review criteria.
- Scope must prevent over-generalization.
- Exceptions must be explicit.
- Human approval status must be explicit.
- The rule must not modify Core unless Core review is separately approved.

## 4. ID Format
Rule IDs must use:

`RULE-0001`

Format:

`RULE-` followed by four digits.

## 5. Versioning
- First approved version starts at `1.0`.
- Revisions must preserve prior approved wording.
- No silent overwrites.
- Re-review is required when source pattern, source knowledge, evidence, or scope changes.

## 6. Cross References
Required cross references:

- Source Pattern ID.
- Source Knowledge IDs.
- Evidence ID or evidence reference.

Allowed cross references:

- Related Test IDs.
- Related ADRs.
- Related incident or experience records.

## 7. Required Evidence
Each operational rule must reference evidence or approved knowledge with evidence links.

Rules without evidence must remain proposals and must not become approved operational rules.

## 8. Status Values
Allowed status values:

- Candidate
- Needs Clarification
- Approved
- Approved With Minor Improvements
- Needs Revision
- Rejected
- Superseded
- Archived
