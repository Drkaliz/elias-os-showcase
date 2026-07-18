# Registry Schema

## Purpose
Define the required structure for root registry files.

This schema is documentation only. It does not create registry entries, automation, knowledge, patterns, or rules.

## 1. Required Fields
Each registry must include:

- Title
- Purpose
- Registry Structure
- Entries
- Restriction

Each registry entry must include:

- Record ID
- Title
- Scope or Project
- Review Status

## 2. Optional Fields
- Source Reference
- Evidence Reference
- Related Knowledge
- Related Pattern
- Related Rule
- Related Test
- Next Action
- Version
- Reviewer

## 3. Validation Rules
- Registry files track records; they do not create records by themselves.
- Entries must reference existing record files when applicable.
- Placeholder-only registries must say they are placeholders.
- Empty registries must state `None` or use an empty table.
- Registry status must not conflict with `PROJECT_MANIFEST.md`.
- Registry entries must not bypass human approval.

## 4. ID Format
Allowed registry record ID formats:

- `RULE-0001`
- `KNW-0001`
- `PAT-0001`
- `INC-0001`
- `EXP-0001`
- `MODULE-0001`
- `PROJECT-0001`
- `PROFILE-0001`
- `TEST-0001`

Each ID prefix must match the registry type.

## 5. Versioning
- Registry structure changes require review.
- Entry updates must preserve prior traceability.
- No silent overwrites.
- Registry changes must not create or approve source records automatically.

## 6. Cross References
Allowed cross references:

- Knowledge IDs.
- Pattern IDs.
- Rule IDs.
- Evidence IDs.
- Test IDs.
- Incident IDs.
- Experience IDs.
- Project IDs.
- Module IDs.
- Profile IDs.

Cross references must be consistent with the related source record.

## 7. Required Evidence
Registry entries for approved knowledge, patterns, rules, or tests must reference evidence directly or indirectly through the source record.

Registry placeholders do not require evidence because they do not record approved content.

## 8. Status Values
Allowed status values:

- Placeholder
- Empty
- Candidate
- Approved
- Needs Review
- Needs Revision
- Rejected
- Superseded
- Archived
