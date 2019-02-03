const { nameOfProject, cssFramework } = require('../common')
// const { SIMPLE_SETUP, MEDIUM_SETUP, ADVANCED_SETUP } = require('../constants')
const {
  strings: { startCase, lowerCase }
} = require('gluegun')

const simpleSetupHTMLRoutes = [
  {
    template: 'simple-setup/index.html.ejs',
    target: `./${nameOfProject}/index.html`,
    props: { nameOfProject: startCase(nameOfProject) }
  },
  {
    template: 'simple-setup/pages/about.html.ejs',
    target: `./${nameOfProject}/pages/about.html`,
    props: { nameOfProject: startCase(nameOfProject) }
  }
]

const mediumSetupHTMLRoutes = cssFilename => [
  {
    template: `medium-setup/src/index.html.ejs`,
    target: `./${nameOfProject}/src/index.html`,
    props: {
      nameOfProject: startCase(nameOfProject),
      cssFilename
    }
  },
  {
    template: `medium-setup/src/pages/about.html.ejs`,
    target: `./${nameOfProject}/src/pages/about.html`,
    props: {
      nameOfProject: startCase(nameOfProject),
      cssFilename
    }
  }
]

// function chooseCorrectIndexHTML() {
//   switch(cssFramework) {
//     case 'Bootstrap':
//       return 'advanced-setup/src/index-bootstrap.html.ejs'
//   }
// }
const htmlFilename = cssFramework ? '-' + lowerCase(cssFramework) : ''
const advancedSetupHTMLRoutes = cssFilename => [
  {
    template: `advanced-setup/src/index${htmlFilename}.html.ejs`,
    target: `./${nameOfProject}/src/index.html`,
    props: {
      nameOfProject: startCase(nameOfProject),
      cssFilename
    }
  },
  {
    template: `medium-setup/src/pages/about.html.ejs`,
    target: `./${nameOfProject}/src/pages/about.html`,
    props: {
      nameOfProject: startCase(nameOfProject),
      cssFilename
    }
  }
]

// TODO: See if exporting the correct routes in this file
// is a better alterantive than doing it in the index.js file

// switch (setupType) {
//   case SIMPLE_SETUP:
//     module.exports = simpleSetupHTMLRoutes
//     break
//   case MEDIUM_SETUP:
//     module.exports = mediumSetupHTMLRoutes
//     break
//   case ADVANCED_SETUP:
//     module.exports = advancedSetupHTMLRoutes
// }
module.exports = {
  simpleSetupHTMLRoutes,
  mediumSetupHTMLRoutes,
  advancedSetupHTMLRoutes
}
