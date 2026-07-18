# Folder Architecture

## Scope

This document designs the target folder architecture for Elias OS.

Phase A creates only:

```text
./00_Architecture/
```

All other folders are planned for later phases and must not be created during Phase A.

## Target Folder Tree

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

Phase A.1 inserts `./06_Knowledge/` before processed rule material. Because the target folders have not been created yet, this is an architecture revision, not a migration.

ADR-0010 amends the Foundation folder structure by adding templates, profiles, schemas, logs, and workspace as distinct responsibilities. Scripts remains included and moves to `./19_Scripts/`.

## Folder Design

### ./00_Architecture/

Architecture planning and governance documents.

Planned contents:

```text
./00_Architecture/
|-- SYSTEM_OVERVIEW.md
|-- FOLDER_ARCHITECTURE.md
|-- MODULE_RESPONSIBILITIES.md
|-- RULE_LIFECYCLE.md
|-- RULE_PRIORITY.md
|-- HUMAN_REVIEW_GATE.md
|-- EXPORT_STRATEGY.md
|-- EXPERIENCE_ENGINE.md
|-- REGRESSION_TESTING.md
|-- VERSION_STRATEGY.md
|-- RISKS_AND_MITIGATIONS.md
|-- ARCHITECTURE_DECISIONS.md
`-- PHASE_A_DELIVERABLES.md
```

Future governance files may also live here after approval:

```text
./00_Architecture/CHANGELOG.md
```

### ./01_Core/

Universal, minimal, high-priority rules.

Planned contents:

```text
./01_Core/
|-- CONSTITUTION.md
|-- SAFETY.md
|-- VERIFICATION.md
`-- CORE_RULE_INDEX.md
```

Core must remain small. It must contain only rules that apply across every project and model context.

### ./02_Behavior/

Reusable behavior rules that shape reasoning and communication without being project-specific.

Planned contents:

```text
./02_Behavior/
|-- ANTI_YES_MAN.md
|-- REASONING_DISCIPLINE.md
|-- EXECUTION_DISCIPLINE.md
`-- RESPONSE_STYLE.md
```

### ./03_Modules/

Reusable instruction modules for task categories, domains, or tool workflows.

Planned contents:

```text
./03_Modules/
|-- README.md
`-- <module_name>/
    |-- MODULE.md
    |-- RULES.md
    `-- TESTS.md
```

Modules must stay focused. A module should exist only when rules are reused across more than one project or export type.

### ./04_Projects/

Project-specific instructions.

Planned contents:

```text
./04_Projects/
|-- README.md
`-- <project_name>/
    |-- PROJECT_RULES.md
    |-- CONTEXT.md
    |-- EXPORT_PROFILES.md
    `-- TESTS.md
```

Project rules must not be promoted to Core unless they are universal.

### ./05_Inbox/

Raw input area for old rules and unreviewed material.

Planned contents:

```text
./05_Inbox/
|-- README.md
`-- raw/
```

Nothing in Inbox is trusted. Files here are evidence, not policy.

### ./06_Knowledge/

Approved knowledge that is useful but is not a rule.

Planned contents:

```text
./06_Knowledge/
|-- README.md
|-- principles/
|-- decision_patterns/
|-- references/
|-- best_practices/
`-- reasoning_patterns/
```

Examples:

- Approved principles.
- Decision patterns.
- Reference documents.
- Best practices.
- Reasoning patterns.

Not every useful item becomes a rule. Knowledge may inform principles, rules, tests, and exports, but it must not bypass the rule lifecycle or the human review gate.

### ./07_Processed/

Reviewed extraction outputs and classification records.

Planned contents:

```text
./07_Processed/
|-- extracted_rules/
|-- classifications/
|-- conflicts/
`-- review_queue/
```

Processed material is still not approved unless a human review result says so.

### ./08_Tests/

Regression and rule behavior tests.

Planned contents:

```text
./08_Tests/
|-- README.md
|-- regression/
|-- rule_tests/
`-- export_tests/
```

Tests should prove that rules produce observable behavior.

### ./09_Experience/

Experience Engine records for learning from failures and successful outputs.

Planned contents:

```text
./09_Experience/
|-- INCIDENT_LOG.md
|-- SUCCESS_CASES.md
|-- EXPERIENCE_TEMPLATE.md
|-- lessons/
|-- patterns/
`-- regression_links/
```

Experience records are evidence for learning. They do not automatically become rules.

### ./10_Analytics/

Human-readable summaries of rule volume, conflicts, duplicates, and export size.

Planned contents:

```text
./10_Analytics/
|-- RULE_HEALTH.md
|-- EXPORT_SIZE_REPORT.md
`-- CONFLICT_SUMMARY.md
```

Analytics should remain simple reports, not a second source of truth.

### ./11_Builder/

Future export assembly definitions.

Planned contents:

```text
./11_Builder/
|-- README.md
|-- EXPORT_MANIFEST.md
`-- profiles/
```

No implementation scripts belong here until a later approved phase.

### ./12_Exports/

Generated task-specific prompt exports.

Planned contents:

```text
./12_Exports/
|-- README.md
`-- <project_or_task>/
    `-- <profile_name>.md
```

Exports are generated artifacts. They must not become the source of truth.

### ./13_Docs/

Operator-facing documentation.

Planned contents:

```text
./13_Docs/
|-- OPERATING_MANUAL.md
|-- REVIEW_GUIDE.md
`-- EXPORT_GUIDE.md
```

Docs explain how to operate Elias OS without requiring implementation knowledge.

### ./14_Templates/

Reusable document templates.

Planned contents:

```text
./14_Templates/
`-- README.md
```

Templates define structure for future records. They must not contain approved rules, knowledge entries, projects, modules, incidents, or implementation logic.

### ./15_Profiles/

Profile definitions for future export selection.

Planned contents:

```text
./15_Profiles/
`-- README.md
```

Profiles describe intended export contexts. They must not generate exports or override Core.

### ./16_Schemas/

Schema specifications for future validation.

Planned contents:

```text
./16_Schemas/
`-- README.md
```

Schemas define expected record shape. They must not contain executable validation logic in Milestone B.

### ./17_Logs/

Human-readable logs for future operational records.

Planned contents:

```text
./17_Logs/
`-- README.md
```

Logs record activity after approved processes exist. They must not become source of truth.

### ./18_Workspace/

Temporary workspace for future reviewed operations.

Planned contents:

```text
./18_Workspace/
`-- README.md
```

Workspace material is temporary and must not be treated as approved source.

### ./19_Scripts/

Future implementation scripts.

Planned contents:

```text
./19_Scripts/
|-- README.md
`-- tools/
```

Scripts are reserved for future approved automation. They must not be created before an approved implementation milestone.

### ./99_Archive/

Historical material that must be retained but is no longer active.

Planned contents:

```text
./99_Archive/
|-- retired_rules/
|-- old_exports/
`-- superseded_architecture/
```

Archive material is reference only.

### ./_Internal/

Internal metadata used by future automation.

Planned contents:

```text
./_Internal/
|-- locks/
|-- indexes/
`-- validation/
```

Internal files must not define user-facing rules.

## Design Tradeoffs

Keeping folders numbered improves scan order and makes the lifecycle visible.

Advantages:

- Easy to navigate.
- Stable ordering across file explorers.
- Clear separation between source, processing, tests, builder, and exports.

Disadvantages:

- Folder numbers are less natural than names alone.
- Renumbering later would be disruptive, so the top-level structure should stay stable.

Phase A.1 accepts the renumbering tradeoff because `./06_Knowledge/` prevents useful reference material from being forced into rule files.
