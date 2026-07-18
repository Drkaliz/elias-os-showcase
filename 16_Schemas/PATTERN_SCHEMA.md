# Pattern Schema

## Purpose
Define the required structure for approved pattern records.

This schema is documentation only. It does not create patterns, rules, automation, or registry entries.

## 1. Required Fields
- Pattern ID
- Title
- Purpose
- Pattern Statement
- Source Knowledge IDs
- Scope
- Limitations
- Human Approval Status
- Version

## 2. Optional Fields
- Related Evidence IDs
- Related Rule IDs
- Related Tests
- Review Date
- Supersedes
- Superseded By
- Notes

## 3. Validation Rules
- A pattern must describe repeatable structure or behavior.
- A pattern must not create mandatory operational behavior by itself.
- A pattern must be based on approved knowledge.
- Source knowledge must be listed explicitly.
- Scope must prevent use outside the reviewed context.
- Limitations must state what the pattern does not authorize.
- Human approval status must be explicit.

## 4. ID Format
Pattern IDs must use:

`PAT-0001`

Format:

`PAT-` followed by four digits.

## 5. Versioning
- First approved version starts at `1.0`.
- Revisions must preserve prior approved wording.
- No silent overwrites.
- Re-review is required when source knowledge changes.

## 6. Cross References
Allowed cross references:

- Source Knowledge IDs.
- Evidence IDs.
- Related Rule IDs.
- Related Test IDs.
- Related ADRs.

Cross references must preserve the knowledge-before-rules chain.

## 7. Required Evidence
Each pattern must trace to approved knowledge with evidence references.

Direct evidence may be included when the pattern depends on source material not fully captured by one knowledge entry.

## 8. Status Values
Allowed status values:

- Candidate
- Needs Clarification
- Approved
- Rejected
- Superseded
- Archived
