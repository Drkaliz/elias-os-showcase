# Knowledge Schema

## Purpose
Define the required structure for approved knowledge records.

This schema is documentation only. It does not create knowledge, rules, automation, or registry entries.

## 1. Required Fields
- Knowledge ID
- Title
- Purpose
- Knowledge Statement
- Source Reference
- Evidence Reference
- Scope
- Limitations
- Human Approval Status
- Version
- Related Patterns
- Related Rules

## 2. Optional Fields
- Related ADRs
- Review Date
- Expiry or Review Date
- Supersedes
- Superseded By
- Notes

## 3. Validation Rules
- The record must describe knowledge, not mandatory behavior.
- The source reference must identify the source file or report.
- The evidence reference must identify an evidence ID or source section.
- Scope must be narrow enough to prevent project bleed.
- Limitations must state what the knowledge does not authorize.
- Human approval status must be explicit.
- Related rules may be empty only when no approved rule exists.

## 4. ID Format
Knowledge IDs must use:

`KNW-0001`

Format:

`KNW-` followed by four digits.

## 5. Versioning
- First approved version starts at `1.0`.
- Revisions must preserve prior approved wording.
- No silent overwrites.
- Version changes require review reason and approval.

## 6. Cross References
Allowed cross references:

- Evidence IDs.
- Related Knowledge IDs.
- Related Pattern IDs.
- Related Rule IDs.
- Related ADRs.
- Source intake reports.

Cross references must not imply approval unless the target record is approved.

## 7. Required Evidence
Each knowledge record must reference:

- An evidence ID, or
- A reviewed source file and section pending evidence ID registration.

Knowledge without evidence may remain a candidate but must not become approved operational authority.

## 8. Status Values
Allowed status values:

- Candidate
- Needs Clarification
- Approved
- Rejected
- Superseded
- Archived
