# Elias OS System Overview

## Purpose

Elias OS is a modular AI instruction operating system. Its purpose is to make AI behavior more disciplined, less agreeable by default, easier to audit, and easier to adapt to specific projects without copying large prompt files by hand.

The system is not an autonomous agent and not a code generator by itself. It is a governed instruction library and export process.

## Problems Elias OS Solves

Elias OS addresses these recurring problems:

- Yes-man behavior: the model agrees, flatters, or follows weak instructions instead of challenging risk, contradiction, or false assumptions.
- Weak reasoning discipline: the model acts before understanding cause, scope, evidence, and verification.
- Rule sprawl: old instructions accumulate as duplicated, emotional, unclear, temporary, or conflicting rules.
- Unsafe rule ingestion: legacy rule files are treated as truth instead of raw input requiring review.
- Prompt bloat: every task receives every rule, even when only a subset is needed.
- Forgotten mistakes: old failures are discussed once, then disappear instead of becoming permanent tests.
- Core drift: universal rules get changed too easily by AI systems trying to optimize for the current task.

## Core Principle

No component in Elias OS may become more complex than the problem it solves.

This principle applies to:

- Folder structure.
- Rule format.
- Review gates.
- Export assembly.
- Incident logging.
- Regression testing.

If a component needs heavy explanation, automation, or exception handling before it can be trusted, the design should be simplified before implementation.

## System Model

Elias OS is built from layered instruction sources:

1. Core: universal rules that apply to every model, project, and task.
2. Behavior: reasoning, verification, anti-yes-man, and response discipline.
3. Knowledge: approved principles, references, decision patterns, best practices, and reasoning patterns that are useful but not automatically rules.
4. Modules: reusable domain or task-specific instruction sets.
5. Projects: project-specific rules and constraints.
6. Profiles: export targets for a model, role, or operating context.
7. Exports: generated prompt packages assembled from approved sources.

The source files are the authority. Exports are disposable generated artifacts.

## Project Root Rule

Elias OS uses the currently opened workspace as `<Project Root>`.

Architecture documents, future implementation, and exports must use relative paths such as:

```text
<Project Root>/
./00_Architecture/
./01_Core/
```

Machine-specific absolute paths must not be required by the architecture.

Advantages:

- Works across Windows, Linux, macOS, GitHub, VS Code, and Codex.
- Keeps documentation portable.
- Avoids hard-coded local assumptions.

Disadvantages:

- Operators must know which workspace is currently open.
- Scripts in later phases must resolve `<Project Root>` carefully.

## Trust Model

Old rules are raw input only. They are not trusted truth.

A rule becomes accepted only after it has:

- A clear reason or incident reference.
- A defined scope.
- A priority classification.
- A conflict check.
- A human review result.
- A testable expected behavior where possible.

Temporary, emotional, unclear, duplicate, or conflicting rules must not enter Core.

## Human Authority

The Product Owner and Vision Architect owns approval of intent.

The Chief System Architect defines architecture and system-level tradeoffs.

The Lead Software Engineer implements only approved phases and must not start later phases early.

AI systems may propose changes, classify rules, and prepare review material. They must not automatically modify Core rules.

## Success Criteria

Elias OS is successful when:

- Core stays small, universal, and stable.
- Project rules do not pollute Core.
- Old mistakes become durable regression tests.
- Prompt exports include only the approved knowledge and rules needed for the task.
- Every accepted rule can be explained.
- Conflict resolution follows priority instead of preference.
- The system remains simple enough to maintain manually if automation fails.
