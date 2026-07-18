# Module Responsibilities

## Responsibility Model

Each folder has one responsibility. If a file does not clearly belong in one folder, the rule or artifact probably needs more review before it is accepted.

Source files define approved knowledge and behavior. Reports and exports explain or package them. They must not override source files.

## ./00_Architecture/

Purpose:

- Define the system architecture.
- Record architectural decisions and tradeoffs.
- Set boundaries before implementation begins.

Major files:

- `SYSTEM_OVERVIEW.md`: defines what Elias OS is and what problem it solves.
- `FOLDER_ARCHITECTURE.md`: defines the planned folder tree.
- `MODULE_RESPONSIBILITIES.md`: defines folder and major file ownership.
- `RULE_LIFECYCLE.md`: defines how rules move from raw input to approved exports.
- `RULE_PRIORITY.md`: defines conflict priority.
- `HUMAN_REVIEW_GATE.md`: defines protection against automatic Core changes.
- `EXPORT_STRATEGY.md`: defines task-specific export assembly.
- `EXPERIENCE_ENGINE.md`: defines learning from incidents, success cases, lessons, patterns, and regression tests.
- `REGRESSION_TESTING.md`: defines mistake-to-test conversion.
- `VERSION_STRATEGY.md`: defines release phases and governance records.
- `RISKS_AND_MITIGATIONS.md`: defines expected risks and controls.
- `ARCHITECTURE_DECISIONS.md`: records accepted architecture decisions and tradeoffs.
- `PHASE_A_DELIVERABLES.md`: defines Phase A completion and next phases.

## ./01_Core/

Purpose:

- Hold universal rules that apply to every AI operating under Elias OS.
- Protect rules that should rarely change.
- Keep the instruction foundation minimal.

Major files:

- `CONSTITUTION.md`: highest-level operating principles and non-negotiable rules.
- `SAFETY.md`: safety boundaries and refusal standards.
- `VERIFICATION.md`: evidence, testing, and uncertainty rules.
- `CORE_RULE_INDEX.md`: index of Core rules, IDs, reasons, and incident references.

Rules that belong here:

- Universal.
- Durable.
- Clear.
- Testable where possible.
- Supported by a reason or incident reference.

Rules that do not belong here:

- Project-specific preferences.
- Temporary instructions.
- Emotional corrections.
- Rules copied from old files without review.
- Style preferences unless they are universal operating constraints.

## ./02_Behavior/

Purpose:

- Define reusable model behavior below Core priority.
- Improve reasoning discipline and communication quality.
- Prevent agreeability from overriding correctness.

Major files:

- `ANTI_YES_MAN.md`: rules for challenging false assumptions, weak plans, and risky instructions.
- `REASONING_DISCIPLINE.md`: rules for cause-first analysis, scope control, and evidence handling.
- `EXECUTION_DISCIPLINE.md`: rules for making changes only after understanding the task and constraints.
- `RESPONSE_STYLE.md`: communication rules such as directness, brevity, and technical clarity.

Behavior rules should be reusable across projects. If a behavior rule is needed only for one project, it belongs in `./04_Projects/`.

## ./03_Modules/

Purpose:

- Hold reusable domain or workflow modules.
- Avoid duplicating the same project-neutral rules in multiple places.
- Keep specialized behavior outside Core.

Major files:

- `README.md`: module catalog and selection rules.
- `<module_name>/MODULE.md`: module purpose, scope, and when to use it.
- `<module_name>/RULES.md`: approved module rules.
- `<module_name>/TESTS.md`: expected behavior and regression checks for the module.

Module acceptance rule:

A module should exist only when it solves a repeated problem. If it is used once, keep it in the project until reuse is proven.

## ./04_Projects/

Purpose:

- Hold project-specific operating rules and context.
- Keep project details out of Core and Behavior.
- Define project export profiles.

Major files:

- `README.md`: project catalog and naming rules.
- `<project_name>/PROJECT_RULES.md`: approved rules for one project only.
- `<project_name>/CONTEXT.md`: stable project facts required for exports.
- `<project_name>/EXPORT_PROFILES.md`: profiles available for the project.
- `<project_name>/TESTS.md`: project-specific expected behavior checks.

Project rules must include a reason, source, or incident reference. If a project rule later proves universal, it can be proposed for Core through the human review gate.

## ./05_Inbox/

Purpose:

- Store untrusted raw input.
- Preserve old rule files before extraction.
- Prevent raw material from being treated as approved instruction.

Major files:

- `README.md`: ingestion rules and warning that Inbox is untrusted.
- `raw/`: raw old files, notes, copied prompts, and legacy rule dumps.

Inbox restrictions:

- No file in Inbox is approved.
- No export may use Inbox directly.
- AI may extract candidates from Inbox but must not promote them automatically.

## ./06_Knowledge/

Purpose:

- Store approved knowledge that is useful but is not a rule.
- Preserve approved principles, reference documents, decision patterns, best practices, and reasoning patterns.
- Prevent every useful item from becoming a mandatory instruction.

Major files:

- `README.md`: knowledge acceptance and usage rules.
- `principles/`: approved principles that may inform rules or exports.
- `decision_patterns/`: reusable decision patterns.
- `references/`: approved reference documents.
- `best_practices/`: accepted practices that are advisory unless promoted to rules.
- `reasoning_patterns/`: approved reasoning patterns for repeated judgment problems.

Knowledge restrictions:

- Knowledge is not automatically a rule.
- Knowledge may support rules, tests, and exports.
- Knowledge must not bypass human review when it affects Core.
- Knowledge should be cited as evidence when used to justify a rule.

## ./07_Processed/

Purpose:

- Store intermediate processing outputs.
- Keep extraction, classification, conflict reports, and review queues separate from approved files.

Major files:

- `extracted_rules/`: candidate rule statements extracted from raw input.
- `classifications/`: category, scope, priority, and quality assessments.
- `conflicts/`: duplicate and conflict reports.
- `review_queue/`: items waiting for human approval.

Processed files are evidence for review, not policy.

## ./08_Tests/

Purpose:

- Store permanent checks for known failures and rule behavior.
- Make accepted rules testable where possible.
- Prevent repeated mistakes.

Major files:

- `README.md`: test organization and naming rules.
- `regression/`: incident-derived tests.
- `rule_tests/`: tests proving individual rule behavior.
- `export_tests/`: tests proving exports include and exclude the right content.

Tests can be manual, prompt-based, or automated in later phases. Phase A defines the structure only.

## ./09_Experience/

Purpose:

- Record AI failures and successful outputs.
- Convert experience into lessons, reusable patterns, rule proposals, knowledge proposals, and regression tests.
- Prevent repeated failures and preserve repeatable success patterns.

Major files:

- `INCIDENT_LOG.md`: index of all incidents.
- `SUCCESS_CASES.md`: index of successful outputs worth preserving.
- `EXPERIENCE_TEMPLATE.md`: required fields for incident and success records.
- `lessons/`: approved lessons from failures and successes.
- `patterns/`: approved patterns derived from repeated experience.
- `regression_links/`: links between experience records and tests.

Experience records do not automatically become rules. They supply evidence for review.

## ./10_Analytics/

Purpose:

- Track system health.
- Identify bloat, duplicate rules, unresolved conflicts, and export size problems.
- Inform human review without becoming a rule source.

Major files:

- `RULE_HEALTH.md`: counts and quality signals for rules.
- `EXPORT_SIZE_REPORT.md`: export length and inclusion analysis.
- `CONFLICT_SUMMARY.md`: unresolved conflicts and duplicate clusters.

Analytics should be factual and lightweight.

## ./11_Builder/

Purpose:

- Define how approved source files are assembled into exports.
- Keep export selection logic separate from source rules.

Major files:

- `README.md`: builder purpose and safety constraints.
- `EXPORT_MANIFEST.md`: approved source order and inclusion rules.
- `profiles/`: future profile definitions.

No implementation scripts are created in Phase A.

## ./12_Exports/

Purpose:

- Store generated task-specific prompt exports.
- Provide ready-to-use instruction packages for models and tasks.

Major files:

- `README.md`: export usage rules.
- `<project_or_task>/<profile_name>.md`: generated prompt export.

Exports must include metadata showing source files and generation date. Exports must not be edited as source.

## ./13_Docs/

Purpose:

- Explain how humans operate Elias OS.
- Provide practical review and export procedures.

Major files:

- `OPERATING_MANUAL.md`: daily use process.
- `REVIEW_GUIDE.md`: how to approve, reject, or revise rules.
- `EXPORT_GUIDE.md`: how to request and verify exports.

Docs may explain rules but must not define new rule authority.

## ./14_Scripts/

Purpose:

- Store future implementation scripts after approval.
- Support extraction, validation, analytics, testing, and export assembly.

Major files:

- `README.md`: script rules and execution safety.
- `tools/`: future scripts grouped by purpose.

Scripts must never bypass the human review gate.

## ./99_Archive/

Purpose:

- Retain retired or superseded material.
- Preserve historical context without keeping old material active.

Major files:

- `retired_rules/`: rules removed from active use.
- `old_exports/`: obsolete generated exports.
- `superseded_architecture/`: replaced architecture documents.

Archive files are never active instruction sources.

## ./_Internal/

Purpose:

- Hold future internal indexes, lock files, and validation metadata.
- Support tooling without exposing internal implementation details as rules.

Major files:

- `locks/`: future lock or protection metadata.
- `indexes/`: generated indexes.
- `validation/`: generated validation state.

Internal files must not be edited manually unless a later phase explicitly defines the process.
