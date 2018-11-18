[![Build Status](https://travis-ci.org/brencon/npm-mod-start.svg?branch=master)](https://travis-ci.org/brencon/npm-mod-start)

[![NPM](https://nodei.co/npm/npm-mod-start.png)](https://nodei.co/npm/npm-mod-start/)

# npm-mod-start
An npm module starter kit

## Overview
TBD

## Installation

### npm
`npm install npm-mod-start -S`

## Tests
`npm test`

## Code Quality
Code quality will be checked using eslint with the `--fix` argument so repair easily-fixed rule-breaking code.

`npm lint`

## Code Coverage
TODO

## Continuous Integration
Continuous integration provided by [Travis CI](https://travis-ci.org).

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Community
Updates and discussions about this module can be found [@symBrendan on Twitter](https://twitter.com/symBrendan).

## Versioning
For transparency into a common release cycle to strive toward maintaining backward compatibility, word-forward is maintained under [the Semantic Versioning guidelines](http://semver.org/).

### Creating a New Version
The following commands will create a new version of the module, automatically create a new tag with the same value as the version, push the tags to the remote, and, finally, push the code to the remote.

#### Stage your files
`git add .`

#### Commit with message
`git commit -m "your commit message"`

#### Publish the module to npmjs.org
The `npm publish` command will create a patch in package.json, add a new tag, push the tag, and publish the changes to npmjs.

`npm publish`

## Creator

**Brendan Conrad**

- <https://twitter.com/symBrendan>

## License
This project is licensed under the terms of the MIT license.
