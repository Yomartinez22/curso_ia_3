---
name: implement-implementation-task
description: Detect, analyze, and implement the next MVP task from docs/implementation-tasks.md and the repository's GitHub issues. Use when Codex is asked to work through the implementation plan, pick the current/next task, execute one task, create code changes for an implementation issue, or continue the Curso_IA MVP workflow without changing issue labels, issue state, or project status.
---

# Implement Implementation Task

## Overview

Implement exactly one task from the MVP implementation plan. Determine which task is current, read its details from `docs/implementation-tasks.md` and the matching GitHub issue, implement it on a feature branch from `dev`, and open a PR against `dev` when code changes are ready.

Never change task state: do not update labels, close/reopen issues, change project fields, mark an issue as done, or move cards. Reporting progress in the final answer is allowed.

## Workflow

### 1. Detect the Task

Use this priority order:

1. If the user names an issue number or task title, use that task.
2. Otherwise, list open GitHub issues in the repository and select the lowest-numbered issue with label `toDo`.
3. If GitHub is unavailable, parse `docs/implementation-tasks.md` and select the first task that is not clearly implemented in the local codebase.

Do not select a task only because it has label `doing`; labels are task state and this skill must not modify them. If no unambiguous task can be detected, ask one concise question before editing code.

### 2. Read and Analyze

Before editing code, read:

- `AGENTS.md`.
- `docs/implementation-tasks.md`.
- The selected GitHub issue body, when available.
- Canonical docs named by `AGENTS.md` that apply to the selected task.
- Existing source files and tests relevant to the implementation.

Summarize the task internally as:

- Required behavior.
- Files or modules likely to change.
- Validation criteria from the issue and `implementation-tasks.md`.
- Risks, dependencies, and whether a new dependency would be required.

If a new dependency would be useful, stop and ask for confirmation before adding it.

### 3. Implement

Follow the repository rules:

- Keep the scope limited to the selected task.
- Reuse existing patterns and documented architecture.
- Add brief comments for any new class or method, as required by the repo instructions.
- Avoid unrelated refactors, cosmetic churn, and optional future features.
- Do not change task labels, issue state, project fields, milestones, or assignees.

Use Git flow:

1. Start from an up-to-date `dev`.
2. Create a feature branch named `issue-<number>-<short-slug>` when an issue exists, otherwise `task-<number>-<short-slug>`.
3. Commit focused changes with a message that references the issue without closing it, for example `Implement task domain model (refs #1)`.
4. Push the branch.
5. Open a PR against `dev`. Use `Refs #<number>` in the PR body, not `Closes`, `Fixes`, or `Resolves`.

### 4. Validate

Run the smallest useful verification for the task, then broader checks when the change touches shared behavior. Prefer existing package scripts and documented commands. If verification cannot run, report why.

Before finishing, confirm:

- The implementation satisfies the issue criteria.
- The PR targets `dev`.
- No issue label, issue state, or project status was changed.
- The local worktree is clean or any remaining changes are explicitly explained.

## Output

In the final response, include:

- The task or issue selected.
- The branch and PR URL, if created.
- The key files changed.
- The validation command results.
- A note that task state was not changed.
