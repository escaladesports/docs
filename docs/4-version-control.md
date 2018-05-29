# Version Control

## Git

[Git](https://git-scm.com/) is used for version control. We use a feature branch workflow to help multiple developers work on the same project without stepping on each other's toes. All development happens on short-lived feature branches rather than on the master branch.

Once a feature has been fully developed and tested, it gets merged into the master branch and deleted to keep the git history clean.

## GitHub

Repositories are hosted with [GitHub](https://github.com/). Most projects are open sourced. The only ones that are kept private are usually done so for security reasons.

## Semanting Versioning

Repositories should be versioned with the [semantic versioning specification](https://semver.org/). This can easily be done by using the npm CLI. Example:

```bash
# After patching:
npm version patch

# After adding backwards-compatible features:
npm version minor

# After adding API breaking changes:
npm version major
```