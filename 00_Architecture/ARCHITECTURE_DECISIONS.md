# Architecture Decisions

## ADR-0001 Project Root Independence

Status: Accepted

Context:

Elias OS must work across Windows, Linux, macOS, GitHub, VS Code, and Codex without rewriting paths.

Decision:

Use the currently opened workspace as `<Project Root>`. Architecture and future tooling must use relative paths such as `./00_Architecture/` instead of machine-specific absolute paths.

Advantages:

- Portable across operating systems and tools.
- Easier to store in Git.
- Avoids local path leakage into exports.

Disadvantages:

- Operators must open the correct workspace.
- Future scripts must resolve project root carefully.

Consequences:

- All architecture documents use relative paths.
- Exports must not depend on absolute local paths.

## ADR-0002 Architecture Before Implementation

Status: Accepted

Context:

Elias OS needs governance before automation. Building scripts before architecture would make the system harder to review and easier to overcomplicate.

Decision:

Complete architecture documents before creating implementation code, scripts, or Phase B folders.

Advantages:

- Keeps scope controlled.
- Makes tradeoffs visible before implementation.
- Reduces risk of building unnecessary tooling.

Disadvantages:

- Slower initial progress.
- Some implementation details remain unresolved until later phases.

Consequences:

- Phase A and Phase A.1 are documentation-only.
- Phase B cannot begin until architecture approval.

## ADR-0003 Human Review Gate

Status: Accepted

Context:

Core rules affect every export and every AI behavior profile. Automatic Core changes create drift and can let AI invent authority.

Decision:

Core rules require human review before modification. AI may propose, classify, and prepare review material, but it must not directly approve or modify Core.

Advantages:

- Protects Core stability.
- Prevents automatic promotion of old rules.
- Makes Core changes traceable.

Disadvantages:

- Slower Core updates.
- Requires review discipline.

Consequences:

- Core change requests must include reason or experience reference, evidence, conflict check, and test reference where possible.
- Exports cannot rewrite Core.

## ADR-0004 Incident Driven Development

Status: Accepted with Phase A.1 expansion

Context:

Repeated AI failures should become visible evidence for correction. However, failures are not the only useful learning source.

Decision:

Use incidents as a primary source for regression tests and rule proposals, but place them inside the broader Experience Engine so success cases can also produce lessons and patterns.

Advantages:

- Prevents repeated failures.
- Keeps corrections tied to real events.
- Avoids turning frustration into unsupported rules.

Disadvantages:

- Incident records require maintenance.
- Overfitting is possible if incidents are too narrow.

Consequences:

- Incidents may produce tests, knowledge proposals, rule proposals, or no action.
- Incidents do not automatically become Core rules.

## ADR-0005 Every Rule Must Be Testable

Status: Accepted

Context:

Rules that cannot be tested or observed are difficult to enforce and easy to ignore.

Decision:

Every accepted rule should have a test reference or observable review criterion where possible.

Advantages:

- Makes rules measurable.
- Supports regression testing.
- Reduces vague instruction bloat.

Disadvantages:

- Some constitutional or safety rules may be only partially testable.
- Test design adds review work.

Consequences:

- Rule metadata includes a test reference where possible.
- Untestable rules require stronger justification before approval.

## ADR-0006 Evidence Layer

Status: Accepted in Phase A.1

Context:

Verification rules define checking and reporting behavior, but Elias OS also needs a priority layer that blocks assumptions before rules are applied.

Decision:

Add Evidence between Verification and Project Rules:

```text
Constitution > Safety > Verification > Evidence > Project Rules > Style
```

Evidence requires proof before applying a rule, making a claim, selecting a project context, or using an experience record as justification.

Advantages:

- Prevents assumptions from becoming behavior.
- Blocks unapproved old rules from acting as proof.
- Improves export accuracy.

Disadvantages:

- More candidates may require clarification.
- Some tasks may pause until evidence is available.

Consequences:

- Classification must include Evidence priority.
- Exports must include only evidence-supported selections.

## ADR-0007 Knowledge Before Rules

Status: Accepted in Phase A.1

Context:

Not every useful item should become a rule. Some material is better stored as approved knowledge, such as principles, references, decision patterns, best practices, and reasoning patterns.

Decision:

Add `./06_Knowledge/` and define this conceptual flow:

```text
Knowledge -> Principles -> Rules -> Tests -> Exports
```

Advantages:

- Reduces rule bloat.
- Preserves useful context without making it mandatory.
- Gives rules stronger evidence and rationale.

Disadvantages:

- Adds another classification destination.
- Reviewers must distinguish knowledge from rules.

Consequences:

- Old material can be approved as knowledge or rules.
- Knowledge cannot bypass Core review.
- The planned folder numbering shifts after `./05_Inbox/`.

## ADR-0008 Experience Engine

Status: Accepted in Phase A.1

Context:

The original Trainer concept focused on mistakes. Elias OS should also preserve successful outputs that reveal reusable patterns.

Decision:

Rename the Trainer concept to Experience Engine. The Experience Engine includes incidents, success cases, lessons, patterns, and regression tests.

Advantages:

- Learns from both failures and strong outputs.
- Supports pattern extraction without forcing every lesson into Core.
- Keeps regression tests connected to real experience.

Disadvantages:

- Broader scope requires careful review.
- Success cases can become noise if not tied to reusable patterns.

Consequences:

- `TRAINER_SYSTEM.md` is replaced by `EXPERIENCE_ENGINE.md`.
- Planned folder becomes `./09_Experience/`.
- Experience records do not automatically become rules.

## ADR-0009 Constitution Freeze

Status: Accepted

Context:

The Elias Constitution defines the permanent governing principles of Elias OS. After review, it must become stable enough to govern Foundation work without further drift.

Decision:

`ELIAS_CONSTITUTION.md` v1.0 becomes the highest governing authority of Elias OS.

Future constitutional changes require:

- ADR.
- Human approval.
- Architecture review.
- Version update.

Advantages:

- Establishes a stable authority before Foundation begins.
- Prevents casual constitutional edits.
- Keeps future changes traceable.

Disadvantages:

- Constitutional changes require more review effort.
- Some improvements may wait until a formal revision is approved.

Consequences:

- Foundation work must comply with the approved constitution.
- AI may recommend constitutional changes but cannot authorize them.
- Exports, rules, knowledge, and tests remain subordinate to the constitution.

## ADR-0010 Foundation Folder Structure Amendment

Status: Accepted

Context:

Milestone B requires templates, profiles, schemas, logs, workspace, and scripts as distinct responsibilities. The previous frozen top-level structure reserved `./14_Scripts/`, which conflicts with the approved Foundation structure.

Decision:

Update the frozen top-level Elias OS folder structure to include the Foundation folders required for Milestone B.

Approved top-level structure becomes:

```text
00_Architecture/
01_Core/
02_Behavior/
03_Modules/
04_Projects/
05_Inbox/
06_Knowledge/
07_Processed/
08_Tests/
09_Experience/
10_Analytics/
11_Builder/
12_Exports/
13_Docs/
14_Templates/
15_Profiles/
16_Schemas/
17_Logs/
18_Workspace/
19_Scripts/
99_Archive/
_Internal/
```

Reason:

Milestone B requires templates, profiles, schemas, logs, workspace, and scripts as distinct responsibilities. Scripts remains included but is moved to `./19_Scripts/` to avoid conflict with `./14_Templates/`.

Advantages:

- Separates Foundation responsibilities cleanly.
- Keeps scripts available without occupying the template slot.
- Aligns the frozen architecture with the approved Milestone B structure.

Disadvantages:

- Changes the previously frozen top-level numbering.
- Requires all later architecture references to use `./19_Scripts/` instead of `./14_Scripts/`.

Consequences:

- Milestone B may create the amended top-level folders after this amendment is accepted.
- No folders are created by this ADR.
- Future architecture references must use the amended structure.
