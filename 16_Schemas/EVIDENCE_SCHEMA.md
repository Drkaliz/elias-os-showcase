# Evidence Schema

## Purpose
Define the required structure for evidence records.

This schema is documentation only. It does not create evidence entries, automation, or registry entries.

## 1. Required Fields
- Evidence ID
- Source File
- Source Section
- Related Knowledge ID
- Evidence Type
- Reliability Level
- Review Status

## 2. Optional Fields
- Related Pattern ID
- Related Rule ID
- Related Test ID
- Date Collected
- Reviewer
- Supports
- Contradicts
- Limitations
- Notes

## 3. Validation Rules
- Evidence must point to a traceable source.
- Source file must use a project-relative path when inside Elias OS.
- Source section must be specific enough for review.
- Reliability level must be explicit.
- Review status must be explicit.
- Evidence must not create knowledge, patterns, or rules by itself.
- Contradicting evidence must not be ignored.

## 4. ID Format
Evidence IDs must use:

`EVID-0001`

Format:

`EVID-` followed by four digits.

## 5. Versioning
- Evidence records may be revised only with review.
- Revisions must preserve prior source references.
- No silent overwrites.
- Evidence must be re-reviewed if source, section, reliability, or related knowledge changes.

## 6. Cross References
Allowed cross references:

- Related Knowledge IDs.
- Related Pattern IDs.
- Related Rule IDs.
- Related Test IDs.
- Related source reports.

Cross references must not upgrade evidence into operational authority automatically.

## 7. Required Evidence
Each evidence record is itself an evidence reference and must include:

- Source file.
- Source section.
- Evidence type.
- Reliability level.

If any required evidence field is unknown, review status must not be `Approved`.

## 8. Status Values
Allowed status values:

- Candidate
- Registered
- Needs Review
- Approved
- Contradicted
- Rejected
- Superseded
- Archived
