# Project Spawner CLI (still a WIP ⚒)

Quickly and easily generate static web projects with Project Spawner

## Quick Overview
Create A Project
```shell
project-spawner create <name-of-project>
```
or
```shell
project-spawner c <name-of-project>
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
* Bundled together with [Parcel](https://parceljs.org/)
  * Parcel transforms JavaScript using [Babel's](https://babeljs.io/docs/en/babel-preset-env) `@babel/preset-env` by default, so using the latest JavaScript features is possible. [More Info Here](https://parceljs.org/javascript.html#default-babel-transforms).
  * If you would like to add more Babel presets take a look at [this](https://parceljs.org/javascript.html#babel).
* Great for medium sized projects that require more complex CSS and JavaScript

**Advanced Setup** (Not implemented yet 😢)


## Flags
`--no-npm-i` or `--no-npmI` - use this flag if you do not want the 'medium setup' to automatically `npm install` the dependencies


# License

MIT - see LICENSE

