# If/Then ThreeUp Challenge

Since you're here, we'd like for you to build a version of the "Three Up" promo found in the comp below.

Be as creative as you want. To get started quickly, clone the repo, create your own branch, and use the existing tools defined later in the README. If you see inefficient code, or a better way to write an existing component feel free to refactor. You should make as many components as you need, and organize, or reorganize code as you see fit.

Don't worry about getting the fonts and spacing exactly right. Let the data in the model at `endpoint/promo-model.json` drive the display.

The component should render on the base page at `http://127.0.0.1:9000/index.html` when the server is launched.

![ThreeUp Promo](img/threeup.png)

## Usage

This repository provides a template to begin developing [React](https://facebook.github.io/react/) based applications using ES6 syntax, using [webpack](https://webpack.github.io/) as a module bundler. Node.js version 6 or newer is required. There is a suite of external node module dependencies - NPM can serve as the package manager.

* git clone git@gitlab.csedigital.com:front-end/react-starter.git
* `cd` into directory
* Run `npm install` to install the dependencies
* Run `npm run build` to build the project
* Run `npm run dev` to build the project, start watching files and run the local server accessible at `http://127.0.0.1:9000`
* Run `npm test` to run the tests once
* Run `npm run test:ci` to watch the `src` directory for changes and run the tests

## Existing Components and utilities

Feel free to modify any of the files listed below as necessary. You should also feel free to make any improvements or optimizations you see fit.

### Javascript
* `src/index.js` Instantiates parent component in index page
* `src/Component.jsx` This is the parent component that is responsible for rendering components on the index page.
* `src/components/js/modules/Image.jsx` This is a simple image component
* `src/components/js/util/fetchEndpoint.js` This is a simple helper function for making XHR requests for JSON.

### SASS
* `src/components/scss/util/_default.scss` Included by parent component
* `src/components/scss/modules/_Image.scss` Contains rules to style the Image component
* `src/components/scss/config/_color.scss` A file that could be used to hold variables, etc

### MISC
* `index.html` Base page
* `endpoint/promo-model.json` Sample model



