# Expensifier

A simple expense manager

Live @ https://maneeshd-expensifier.herokuapp.com

## Usage

1. Install **[yarn](https://yarnpkg.com/en/docs/install])** package manager in your system and add it to env path of your system.

2. Edit **[package.json](package.json)** to update app name, license etc as per requirement but ***don't*** edit dependencies and devDependencies (Use `yarn add/remove` to manipulate dependencies/devDependencies).

3. Now execute: **`yarn install`**. This will install all the dependency packages.

4. Feel free to edit (optional) **[.eslintrc.json](.eslintrc.json)** to suit your style.

5. Next, edit (optional) **[.babelrc](.babelrc)** and **[webpack.config.js](webpack.config.js)** if required.

6. The main entry point of the application is **[src/index.js](src/index.js)** & the index page template is in **[src/index.html](src/index.html)**. (Webpack will inject code and put the final `index.html` in **[dist/index.html](dist/index.html)**).

7. Components `(*.jsx)` will be located in **[src/components](src/components)** & CSS in **[src/css/custom.css](ssrc/css/custom.css)**.

8. Compiled and built javascript files: `vendor.js` & `main.js` will be put in **[dist/static/js](dist/static/js)** and css files: `vendor.css` & `main.css` will be put in **[dist/static/css](dist/static/css)**

9. To run/serve the application in development mode(the compiled js files will be in memory), execute: `yarn serve`.

10. To build the js bundle for production, execute: `yarn build`. This will compile, build and generate the `vendor.js`, `main.js`, `vendor.css` & `main.css` files for production, inject the css and js calls in index.html, copy image and favicon files to dist.

## Author

### 👨‍💻 Maneesh Divana | 📧 maneeshd77@gmail.com
