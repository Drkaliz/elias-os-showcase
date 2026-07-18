# Export Strategy

## Purpose

Exports are task-specific prompt packages generated from approved Elias OS source files.

Exports solve prompt bloat by assembling only the knowledge, principles, and rules needed for a given task, model, project, and profile.

## Export Formula

The export formula is:

```text
Core + Behavior + Approved Knowledge + Selected Project or Module + Selected Profile
```

Expanded:

```text
./01_Core/
+ ./02_Behavior/
+ selected approved knowledge from ./06_Knowledge/
+ selected content from ./03_Modules/ or ./04_Projects/
+ selected profile definition from ./11_Builder/profiles/
= ./12_Exports/<project_or_task>/<profile_name>.md
```

No export may include raw Inbox material or unresolved review candidates.

## Source Authority

Source authority order:

1. `./01_Core/`
2. `./02_Behavior/`
3. `./06_Knowledge/`
4. `./03_Modules/`
5. `./04_Projects/`
6. `./11_Builder/profiles/`

Generated exports in `./12_Exports/` are not source authority.

## Export Inputs

Required inputs:

- Core rules.
- Behavior rules.
- Selected approved knowledge.
- One selected project or task module.
- One selected profile.
- Export request metadata.

Optional inputs:

- Additional approved modules if the task requires them.
- Project-specific tests used as export validation.

Rejected inputs:

- Raw Inbox files.
- Unreviewed candidates.
- Archived rules.
- Analytics reports as rules.
- Generated exports as source.
- Unapproved knowledge.

## Export Metadata

Every export should include:

```text
Export ID:
Generated Date:
Selected Project or Task:
Selected Profile:
Included Core Files:
Included Behavior Files:
Included Knowledge Files:
Included Modules:
Included Project Files:
Excluded Known Conflicts:
Source Version:
```

This metadata makes exports auditable without making them authoritative.

## Export Assembly Order

Recommended order:

1. Export metadata.
2. Constitutional rules.
3. Safety rules.
4. Verification rules.
5. Evidence rules.
6. Selected approved knowledge and principles.
7. Behavior rules.
8. Selected module rules.
9. Selected project rules.
10. Selected style/profile rules.
11. Task-specific operating notes.

This order mirrors rule priority and makes conflict resolution easier.

## Export Size Control

Exports should stay small enough to be useful.

Controls:

- Include only selected knowledge, project, or module content.
- Deduplicate repeated rules.
- Prefer rule IDs over repeated long explanations when safe.
- Keep examples out of exports unless they change behavior.
- Move long rationale to source files, not exports.
- Reject broad modules that include unrelated rules.

If an export becomes too large, the first response is to narrow selection, not to weaken Core.

## Profile Design

A profile defines how approved rules are packaged for a target use case.

Examples of profile dimensions:

- Model or AI surface.
- Role.
- Task type.
- Response strictness.
- Tool availability.

Profiles must not override Core. A profile may add style or task constraints only within lower priority.

## Conflict Handling

Before export generation, the selected rule set must pass a conflict check.

If conflict exists:

- Constitution overrides Safety, Verification, Evidence, Project Rules, and Style.
- Safety overrides Verification, Evidence, Project Rules, and Style.
- Verification overrides Evidence, Project Rules, and Style.
- Evidence overrides Project Rules and Style.
- Project Rules override Style only inside the selected project.
- Unresolved conflicts block export.

An export with unresolved conflicts should not be generated except as a marked review artifact.

## Export Validation

Minimum validation:

- Confirm all included files are approved source files.
- Confirm no Inbox or review queue files are included.
- Confirm protected Core was not changed during export.
- Confirm selected knowledge is approved and relevant.
- Confirm metadata lists included sources.
- Confirm selected project and profile match the request.
- Confirm no rejected or archived rule is included.

Future validation may be automated in later phases.

## Tradeoff

Task-specific exports reduce bloat but require clear selection rules.

Advantages:

- Smaller prompt packages.
- Less conflict from irrelevant rules.
- Easier project-specific operation.

Disadvantages:

- A wrong profile selection can omit needed behavior.
- Export generation needs validation.
- More profiles can create maintenance overhead.

The mitigation is to keep profile count small and require explicit export metadata.
