# Base React Application

## About
This project is intended to provide a minimal groundwork for building React clients for integration with SHIP Microservices.

## Installation
* `$ npm install`

## Commands
* `$ npm run dev` - runs webpack-dev-server
* `$ npm run build` - builds assets and drops them into /dist folder (configured in webpack)
# note: running dev destroys the dist folder... this is not done on purpose.

## The Tech
* Runtime
    * React - app view framework
    * Redux - app data storage
    * Immutable - Facebook's immutable object lib
    * Bluebird - extended Promise library
* Build/Dev
    * Webpack
        * dev server -- view built code
        * loaders
            * eslint-loader
            * babel-loader
            * strict-loader
    * Babel
        * presets: [env, react]
    * CSS - NOT IMPLEMENTED
        * autoprefixer adds vendor prefixes, using data from Can I Use.
        * cssmodules
    * ESLint
    * Flow
        * .flowconfig is in place but currently shelved because of issues with Immutable.js types
            https://github.com/flowtype/flow-typed/issues/1068
        * to enable flow, add /* @flow */ to any file you wish to add type checking. Any type errors will show in node's build output, or in your IDE if you configure some plugins.
        * installed flow types are located in /flow-typed and are installed using 
            `$ npm install -g flow-typed`
            `$ flow-typed install`
            except immutable_v3.x.x.js which is linked on the issue above
    * Testing
        * Jest
        * Enzyme