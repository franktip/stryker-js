# Instructions

Upon first checkout, install StrykerJS dependencies using `npm install`.

Every time you make a change to StrykerJS, rebuild it using `npm run build`.

To apply the modified StrykerJS to a code base, install it inside a checkout of the code base:

```sh
npx install-local /path/to/stryker-js/packages/{core,util,api,instrumenter,*-runner}
```

Create a JSON file with the desired mutants, store its location in the environment variable `MUTANTS_FILE`, then run StrykerJS as usual:

```sh
npx stryker run
```

[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fstryker-mutator%2Fstryker-js%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker-js/master)
[![Build Status](https://github.com/stryker-mutator/stryker-js/workflows/CI/badge.svg)](https://github.com/stryker-mutator/stryker-js/actions?query=workflow%3ACI+branch%3Amaster)
[![NPM](https://img.shields.io/npm/dm/@stryker-mutator/core.svg)](https://www.npmjs.com/package/@stryker-mutator/core)
[![Node version](https://img.shields.io/node/v/@stryker-mutator/core.svg)](https://img.shields.io/node/v/@stryker-mutator/core.svg)
[![Slack Chat](https://img.shields.io/badge/slack-chat-brightgreen.svg?logo=slack)](https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM)

![Stryker](stryker-80x80.png)

# StrykerJS

*Professor X: For someone who hates mutants... you certainly keep some strange company.*
*William Stryker: Oh, they serve their purpose... as long as they can be controlled.*

Welcome to StrykerJS's monorepo. This is where all official stryker packages are maintained.
If you're new to monorepos: don't be scared. You'll find the packages in the `packages` folder.

If you're interested in why we chose a monorepo, please read [babeljs's design document about monorepos](https://github.com/babel/babel/blob/master/doc/design/monorepo.md). We use it for the same reasons as they do.

## Introduction

For an introduction to mutation testing and Stryker's features, see [stryker-mutator.io](https://stryker-mutator.io/).

## Getting started

Please follow the [quickstart on the website](https://stryker-mutator.io/docs/stryker-js/getting-started/).

For small js projects, you can try the following command:

```
npm install --save-dev @stryker-mutator/core
# Only for small projects:
npx stryker run
```

It will run stryker with default values:

* Uses `npm test` as your test command
* Searches for files to mutate in the `lib` and `src` directories

## Usage

```sh
$ npx stryker <command> [options] [configFile]
```

See [usage on stryker-mutator.io](https://stryker-mutator.io/docs/stryker-js/usage)

## Supported mutators

See our website for the [list of currently supported mutators](https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators).

## Configuration

See [configuration on stryker-mutator.io](https://stryker-mutator.io/docs/stryker-js/configuration).
