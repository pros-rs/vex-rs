# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
Before releasing:

- change versions in Cargo.toml
- change Unreleased to the version number
- create new Unreleased section
- update links at the end of the document
- add "New Contributors" section if there were any first-time contributors

### New Contributors

- @new-contributor made their first contribution in #11!
-->

## [Unreleased]

### Added

- The startup banner and code signature may now be configured using parameters passed to `vexide::main`. (#102)

### Fixed

### Changed

### Removed

- The `no-banner` feature has been removed from `vexide-startup` and must now be toggled through the `vexide:main` attribute. (#102)

### New Contributors

## [0.2.1]

### Added

### Fixed

- Fixed debug builds causing data aborts. (#67)

### Changed

### Removed

### New Contributors

## [0.2.0]

### Added

- Added `TICKS_PER_ROTATION` constant to `AdiEncoder` for use with `Position`.

### Fixed

- Removed unintentional re-exports from `vexide-core` program module. (**Breaking Change**)
- Fixed vision panicking after getting garbage data from vex-sdk.
- Corrected incorrect axis getters in the `Controller` API.

### Changed

### Removed

### New Contributors

[unreleased]: https://github.com/vexide/vexide/compare/v0.2.1...HEAD
[0.2.0]: https://github.com/vexide/vexide/compare/v0.1.0...v0.2.0
[0.2.1]: https://github.com/vexide/vexide/compare/v0.2.0...v0.2.1
