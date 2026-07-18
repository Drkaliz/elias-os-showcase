# Workspace Source Boundaries

## Purpose
Define which workspace locations may be treated as Elias OS sources and which locations are external, unapproved, temporary, or excluded from production processing.

This document is policy only. It does not authorize code, automation, registry updates, rule creation, knowledge creation, or architecture changes.

## 1. Approved Source Locations
Approved Elias OS source locations are:

- `./00_Architecture/`
- `./01_Core/`
- `./02_Behavior/`
- `./03_Modules/`
- `./04_Projects/`
- `./05_Inbox/`
- `./06_Knowledge/`
- `./07_Processed/`
- `./08_Tests/`
- `./09_Experience/`
- `./10_Analytics/`
- `./11_Builder/`
- `./12_Exports/`
- `./13_Docs/`
- `./14_Templates/`
- `./15_Profiles/`
- `./16_Schemas/`
- `./17_Logs/`
- `./18_Workspace/`
- `./19_Scripts/`
- `./99_Archive/`
- `./_Internal/`

Only these locations may be considered Elias-managed locations.

Production intake sources may be read only from `./05_Inbox/` unless a human explicitly approves another Elias-managed location for a specific review.

## 2. Unapproved Source Locations
Any top-level path outside the approved Elias OS source locations is unapproved by default.

Unapproved locations include:

- External project folders.
- Client folders.
- Backup folders.
- Temporary extraction folders.
- Tooling folders not created by Elias OS.
- Old ZIP review packs.
- Generated exports not selected for review.
- Downloads copied directly into the workspace without Inbox review.

Unapproved locations must not be processed, classified, promoted, or used as evidence unless a human explicitly moves or copies the material into `./05_Inbox/` and approves it for intake.

## 3. Temporary Files Policy
Temporary files are not source authority.

Temporary files include:

- Editor caches.
- Tool output folders.
- Extraction scratch folders.
- Partial downloads.
- Generated intermediate files.
- Files with unclear creation purpose.

Temporary files must not be processed for production intake. If temporary material appears useful, it must first be converted into a reviewed source candidate and placed in `./05_Inbox/` by human approval.

## 4. External File Policy
External files are untrusted input until reviewed.

External files may include:

- Files from Downloads.
- Files from external drives.
- Files from other repositories.
- Files from client systems.
- Files from web exports.
- Files from chat or document exports.

External files must not be processed in place. They must be copied into `./05_Inbox/` only after human approval and source identity confirmation.

## 5. Download Folder Policy
The Downloads folder is outside Elias OS source boundaries.

Files in Downloads may be used only as transfer sources when the user explicitly identifies them and approves copying into `./05_Inbox/`.

After copying, Elias must process only the Inbox copy, not the original Downloads file.

Downloads files must not be treated as approved knowledge, rules, patterns, evidence, or project authority.

## 6. Inbox Ownership Rules
`./05_Inbox/` is the only default intake entry point.

Inbox files are:

- Raw input.
- Untrusted until reviewed.
- Not approved knowledge.
- Not approved rules.
- Not approved evidence unless separately reviewed.

Inbox files must preserve:

- Original source name where practical.
- Source origin.
- Date received or source date if known.
- Any integrity warning.
- Human approval to process.

No Inbox file may modify Core, Behavior, Architecture, registries, knowledge, patterns, rules, tests, or exports by itself.

## 7. Processed Folder Rules
`./07_Processed/` stores analysis outputs and intake reports.

Processed files are:

- Review artifacts.
- Not source authority by default.
- Not approved knowledge.
- Not approved rules.
- Not promotion records unless explicitly reviewed.

Processed reports may be used as traceability references, but they cannot approve or promote their own contents.

## 8. Archive Rules
`./99_Archive/` stores retired, rejected, superseded, or historical material when preservation has audit value.

Archived material:

- Must not be active authority.
- Must not be processed as production input unless restored by human approval.
- Must retain reason for archive when available.
- Must not be used to bypass current review policy.

Material should be archived only when it is useful for traceability, rollback, historical comparison, or audit.

## 9. Cross-Project Restrictions
Project-specific material must remain inside its approved project scope.

Restrictions:

- A source from one project must not become another project's rule, knowledge, pattern, or evidence without human review.
- Client, business, personal, and unrelated workspace files must not be included in Elias production intake by directory scan.
- Production intake must not infer relevance from proximity in the workspace.
- Generated exports must not become source of truth for another project.

Cross-project reuse requires explicit human approval and traceability.

## 10. Source Validation Before Processing
Before processing any source, validate:

1. File is inside `./05_Inbox/` or explicitly approved for review.
2. File path uses project-relative location.
3. Source identity is known.
4. Source type is allowed.
5. Source does not contain secrets or sensitive client data.
6. Source size and section count fit production intake controls.
7. Encoding is readable enough for review.
8. Human approval to process exists.
9. Source is not a generated export unless explicitly selected for review.
10. Source does not claim authority over Elias Constitution, Core, or Architecture.

If validation fails, stop processing and report the failure.

## 11. Boundary Violation Handling
If a boundary violation is detected:

1. Stop processing.
2. Identify the violated boundary.
3. Identify the affected file or folder.
4. State whether the source was outside approved locations, unapproved, temporary, sensitive, or cross-project.
5. Do not classify, promote, summarize, or extract candidates from the violating source.
6. Require human approval before any retry.

Boundary violations must not be fixed by automatic moving, copying, deletion, or rewriting.

## 12. Human Approval Requirements
Human approval is mandatory before:

- Processing any file outside `./05_Inbox/`.
- Copying external files into `./05_Inbox/`.
- Reprocessing archived material.
- Treating a processed report as evidence.
- Using cross-project material.
- Restoring rejected or archived material.
- Processing generated exports as review input.
- Resolving any source boundary conflict.

AI may identify source boundary issues and recommend next steps, but must not authorize boundary exceptions.

## Boundary Decision Rule
A source may enter production intake only when:

- It is inside an approved source location.
- It is preferably inside `./05_Inbox/`.
- It has human approval for processing.
- It passes validation.
- It complies with production intake controls.

If any condition is missing, processing must stop.
