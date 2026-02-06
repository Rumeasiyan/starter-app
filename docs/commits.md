# Commit Guidelines

All commits in this repo must follow the format below to keep history consistent and readable.

## Required format

```
type(scope): subject

- bullet summary line 1
- bullet summary line 2
```

### Rules

- `type` is required and must be one of: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- `scope` is required and should be a short noun describing the area being changed (e.g. `api`, `ui`, `infra`, `deps`)
- `subject` is required and should be short, imperative, and lower case (e.g. `add retry logic`)
- The body must include at least one bullet point describing what changed
- There must be a blank line between the subject and the bullet list

## Examples

Good:

```
feat(auth): add refresh token rotation

- rotate refresh tokens on use
- store token family id for revocation
```

```
fix(ui): prevent header overlap on small screens

- adjust breakpoint for stacked layout
```

Bad:

```
updated stuff
```

```
feat: missing scope

- add new endpoint
```

```
feat(api): missing blank line
- add new endpoint
```

## Tips

- Use `git commit` (without `-m`) to open the template
- Keep bullets focused on behavior and intent, not implementation details
- This repo includes a hook at `githooks/commit-msg`; run `git config core.hooksPath githooks` after cloning
