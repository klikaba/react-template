# React Template

This template provides starting point for React frontend, following Klika quality guidelines, with implemented authentication following OAuth2 standard.

## Setup

### Dependencies

- All dependencies are specified in packages.json file with their versions
- NodeJS
- For bundling of files [Webpack](https://webpack.js.org/concepts/) is used

```
$ npm install
```
this script will:

- install package dependencies

```
$ npm run dev
```
this script will:

- will bundle files for local development and run server na localhost:3001

```
$ npm run build
```
this script will:

- will bundle files for production

```
$ npm run lint
```
this script will:

- will check linting of project's files

### Configuration
For configuration [dotenv](https://www.npmjs.com/package/dotenv) is used.

`.env` configuration file has to include all basic configuration required for this project to work. For local specific configuration use .env.local


## Getting started

Use Klika quality guidelines for general development references.

### JS/ReactJS styleguides

This project is following Airbnb's style guides for [js](https://github.com/airbnb/javascript) and especialy for [react](https://github.com/airbnb/javascript/tree/master/react)

### New feature

Use [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) development workflow with controller tests and documentation included.

### Pull request quality gates

- no conflicts with target branch
- pass Jest tests
- code review approval
## Tools

### Authentication using OAuth2 standard
Authentication is implemented using [Doorkeeper]() and [JWT token standard]() implementing both password and code grant flows. More datails about [OAuth2 Standard](https://oauth.net/2/).

### Quality gates

This project will run static code analyser on every commit and full test suite on git push.

### Linting
This template us using [ESLint](https://eslint.org/) for linting. All lint rules offenses are automatically tracked and prevented on every commit. This feature is handled by [Overcommit](https://github.com/brigade/overcommit) git hook manager.

See [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

Integrate your IDE with ESLint for easier work.
For example with VSCode install those extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier JavaScript Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Also install this package
```
$ npm install prettier-eslint --save-dev
```
And configure [VSCode Workspace settings](https://code.visualstudio.com/docs/getstarted/settings) like this
```
// Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.

"editor.formatOnSave": true,

// Enable/disable default JavaScript formatter (For Prettier)

"javascript.format.enable": false,

// Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.

"prettier.eslintIntegration": true
```

You can also use other editors and configure them in similar manner.

### Testing
We are using [Jest](https://jestjs.io/docs/en/getting-started) testing framework.

## Maintainers

- [Ivan Kovac](#)
- [Adnan Porovic](https://github.com/aporovic)
