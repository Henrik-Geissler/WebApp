# WebApp

A CI/CD Setup of the [Ionic Starter Template](https://ionicframework.com/docs/v3/cli/starters.html) with CI Linting, CI UNIT Testing, CI E2E Testing, CD Prereleasing, CD Deploying and generic testing libaries. See the [App in Action](https://henrik-geissler.github.io/WebApp)!

[![GitHub package.json version](https://img.shields.io/github/package-json/v/Henrik-Geissler/WebApp)](https://github.com/Henrik-Geissler/WebApp/releases)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Henrik-Geissler/WebApp/CI)](https://github.com/Henrik-Geissler/WebApp/deployments)
[![David](https://img.shields.io/david/Henrik-Geissler/WebApp)](https://david-dm.org/Henrik-Geissler/WebApp)
[![David](https://img.shields.io/david/dev/Henrik-Geissler/WebApp)](https://david-dm.org/Henrik-Geissler/WebApp?type=dev)
[![Codecov](https://img.shields.io/codecov/c/github/Henrik-Geissler/WebApp)](https://codecov.io/gh/Henrik-Geissler/WebApp)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Henrik-Geissler/WebApp)](https://github.com/Henrik-Geissler/WebApp/releases)
[![GitHub repo size](https://img.shields.io/github/repo-size/Henrik-Geissler/WebApp)]()
[![GitHub](https://img.shields.io/github/license/Henrik-Geissler/WebApp)](https://github.com/Henrik-Geissler/WebApp/blob/master/LICENSE)
[![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/WebApp/react)](https://reactjs.org/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/WebApp/dev/ionic)](https://ionicframework.com/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/WebApp/dev/cucumber)](https://cucumber.io/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/WebApp/dev/puppeteer)](https://pptr.dev/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/WebApp/dev/pixelmatch)](https://github.com/mapbox/pixelmatch)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/WebApp/dev/prettier)](https://prettier.io/)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Henrik-Geissler/WebApp/dev/standard-version)](https://www.conventionalcommits.org/)

You can use this Repository as a starting point for your BDD Cross Platform Mobile App.

## Installation

#### `git clone https://github.com/Henrik-Geissler/WebApp.git`
#### `cd WebApp`
#### `yarn install`


## Usage

#### 1. `yarn lint`

runs linter: [ESLint](https://eslint.org/), [GherkinLint](https://github.com/vsiakka/gherkin-lint/) and [Prettier](https://pptr.dev/)
with well chosen rulesets


#### 2. `yarn test`

runs tests: UNIT Tests with [Jest](https://jestjs.io/) and E2E Tests with [Cucumber](https://cucumber.io/) & [Puppeteer](https://pptr.dev/)


#### 3. `yarn prerelease`

fills Changelog and Releases


#### 4. `yarn deploy`

Deploys the App to gh Pages


#### 5. `git push origin master`

runs all the above in github actions for your Pushes
