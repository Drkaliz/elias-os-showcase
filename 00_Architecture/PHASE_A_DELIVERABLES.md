# Phase A Deliverables

## Phase A Scope

Phase A is architecture design only.

Created in Phase A:

```text
./00_Architecture/
```

Not created in Phase A:

```text
./01_Core/
./02_Behavior/
./03_Modules/
./04_Projects/
./05_Inbox/
./06_Knowledge/
./07_Processed/
./08_Tests/
./09_Experience/
./10_Analytics/
./11_Builder/
./12_Exports/
./13_Docs/
./14_Templates/
./15_Profiles/
./16_Schemas/
./17_Logs/
./18_Workspace/
./19_Scripts/
./99_Archive/
./_Internal/
```

No implementation code or scripts are part of Phase A.

## Recommended Final Folder Tree

```text
<Project Root>/
|-- 00_Architecture/
|-- 01_Core/
|-- 02_Behavior/
|-- 03_Modules/
|-- 04_Projects/
|-- 05_Inbox/
|-- 06_Knowledge/
|-- 07_Processed/
|-- 08_Tests/
|-- 09_Experience/
|-- 10_Analytics/
|-- 11_Builder/
|-- 12_Exports/
|-- 13_Docs/
|-- 14_Templates/
|-- 15_Profiles/
|-- 16_Schemas/
|-- 17_Logs/
|-- 18_Workspace/
|-- 19_Scripts/
|-- 99_Archive/
`-- _Internal/
```

ADR-0010 amends the final folder tree for Foundation. `14_Scripts/` is replaced by `14_Templates/`, and Scripts moves to `19_Scripts/`.

## Phase A Required Files

```text
./00_Architecture/SYSTEM_OVERVIEW.md
./00_Architecture/FOLDER_ARCHITECTURE.md
./00_Architecture/MODULE_RESPONSIBILITIES.md
./00_Architecture/RULE_LIFECYCLE.md
./00_Architecture/RULE_PRIORITY.md
./00_Architecture/HUMAN_REVIEW_GATE.md
./00_Architecture/EXPORT_STRATEGY.md
./00_Architecture/EXPERIENCE_ENGINE.md
./00_Architecture/REGRESSION_TESTING.md
./00_Architecture/VERSION_STRATEGY.md
./00_Architecture/RISKS_AND_MITIGATIONS.md
./00_Architecture/ARCHITECTURE_DECISIONS.md
./00_Architecture/PHASE_A_DELIVERABLES.md
```

## Phase A.1 Revision Milestone

Phase A.1 is an official architecture revision required before Phase B.

Phase A.1 changes:

- Add Evidence to rule priority between Verification and Project Rules.
- Add `./06_Knowledge/` for approved knowledge that is not a rule.
- Rename the Trainer concept to the Experience Engine.
- Expand learning from incidents only to incidents, success cases, lessons, patterns, and regression tests.
- Update lifecycle from rule-only processing to `Knowledge -> Principles -> Rules -> Tests -> Exports`.
- Add architecture decision records ADR-0001 through ADR-0008.

Phase A.1 restrictions:

- No implementation code.
- No Phase B folders.
- No automatic promotion of old rules.
- No AI modification of Core.
- No export treated as source of truth.

## Planned Required Files After Approval

Phase B should create only the minimum approved operational files.

Recommended initial files:

```text
./01_Core/CONSTITUTION.md
./01_Core/SAFETY.md
./01_Core/VERIFICATION.md
./01_Core/CORE_RULE_INDEX.md
./02_Behavior/ANTI_YES_MAN.md
./02_Behavior/REASONING_DISCIPLINE.md
./02_Behavior/EXECUTION_DISCIPLINE.md
./02_Behavior/RESPONSE_STYLE.md
./05_Inbox/README.md
./06_Knowledge/README.md
./07_Processed/README.md
./08_Tests/README.md
./09_Experience/INCIDENT_LOG.md
./09_Experience/SUCCESS_CASES.md
./09_Experience/EXPERIENCE_TEMPLATE.md
./11_Builder/EXPORT_MANIFEST.md
./12_Exports/README.md
./00_Architecture/CHANGELOG.md
./00_Architecture/ARCHITECTURE_DECISIONS.md
```

Do not create modules or project folders until there is an approved need.

## Build Phases

### Phase B: Foundation Setup

Goal:

- Create the approved folder skeleton and minimal source files.

Work:

- Create Core draft files.
- Create Behavior draft files.
- Create manual review templates.
- Create incident log template.
- Create changelog and architecture decision records.

Restrictions:

- No automatic rule ingestion.
- No export automation.
- No Core changes without human review.

### Phase C: Rule Ingestion Pilot

Goal:

- Safely process a small set of old rule files.

Work:

- Place raw old rules in Inbox.
- Extract candidate rules.
- Classify scope and priority.
- Detect duplicates and conflicts.
- Send candidates to human review.
- Approve a small number of rules.

Restrictions:

- Old rules remain untrusted.
- Rejected or unclear rules stay out of approved files.

### Phase D: Export Builder Design and Validation

Goal:

- Generate task-specific exports from approved sources.

Work:

- Define export profiles.
- Build export manifests.
- Validate included and excluded sources.
- Produce initial exports manually or with approved tooling.
- Check export size and conflicts.

Restrictions:

- Exports are generated artifacts only.
- Exports cannot modify source rules.

### Phase E: Experience Engine and Regression System

Goal:

- Convert incidents and success cases into durable lessons, patterns, knowledge proposals, and tests.

Work:

- Use experience templates.
- Link incidents and success cases to rule, knowledge, and pattern proposals.
- Create regression tests.
- Track pass/fail status.
- Review overfitting risk.

Restrictions:

- Experience Engine does not automatically promote rules.
- Incidents and success cases do not automatically become Core.

## Approval Checklist Before Phase B

Before Phase B starts, confirm:

- The relative path decision is accepted.
- The top-level folder architecture is accepted.
- Core protection rules are accepted.
- Rule priority order is accepted.
- The Evidence layer is accepted.
- The Knowledge layer is accepted.
- The Experience Engine scope is accepted.
- Phase B file list is accepted.
- No implementation scripts are required yet.

## Clear Next Step After Approval

After Phase A.1 approval, start Phase B by creating the approved folder skeleton and only the minimum operational files listed in this document.

Phase B must not ingest old rule files until the foundation files and human review gate exist.
