# Project Spawner CLI

Quickly and easily generate static web projects with Project Spawner

## Quick Overview
Create A Project
```shell
npx project-spawner create <name-of-project>
```
or
```shell
npx project-spawner c <name-of-project>
```

Once you run the create command you are given three setup options: simple setup, medium setup, and advanced setup
```shell

? Choose Setup: (Use arrow keys)
  > Simple Setup    (Includes Vanilla HTML, CSS, and JavaScript)
    Medium Setup    (Includes HTML, CSS / SCSS / SASS, and JavaScript all bundled together with Parcel)
    Advanced Setup  (Choose Specificially What You Want)
```
## What each setup offers
**Simple Setup**
* Simple setup with vanilla HTML, CSS, and JavaScript
* Great for small projects

**Medium Setup**
* Contains vanilla HTML, CSS / SCSS / SASS and JavaScript
* You are given the option to choose which CSS preprossesor you prefer 
  * SCSS
  * SASS
  * More coming soon...
* You are given the option to setup a SCSS / SASS folder structure that is loosely based on the [SMACSS](https://smacss.com/) style guide
* Bundled together with [Parcel](https://parceljs.org/)
  * Parcel transforms JavaScript using [Babel's](https://babeljs.io/docs/en/babel-preset-env) `@babel/preset-env` by default, so using the latest JavaScript features is possible. [More Info Here](https://parceljs.org/javascript.html#default-babel-transforms).
  * If you would like to add more Babel presets take a look at [this](https://parceljs.org/javascript.html#babel).
* Great for medium sized projects that require more complex CSS and JavaScript.

**Advanced Setup** 
* Same options as medium setup
* Allows you to create a setup with a CSS framework
  * [Bootstrap](https://getbootstrap.com/)
  * [Bulma](https://bulma.io/)
  * [Spectre](https://picturepan2.github.io/spectre/)
  * More coming soon...
* Great if you know exactly what you want for your web project.


## Flags
`--no-npm-i` or `--no-npmI` - use this flag if you do not want the 'medium setup' to automatically `npm install` the dependencies


# License

MIT - see LICENSE

