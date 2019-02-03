const {
  strings: { startCase }
} = require('gluegun')

const {
  nameOfProject,
  stylesSetup,
  shouldMakeFolderStructure
} = require('../common')

const stylesFileExtension = stylesSetup === 'SCSS' ? 'scss' : 'sass'

const stylesFolder = stylesSetup === 'SCSS' ? 'styles' : 'styles-sass'

// These are for both the SCSS and SASS Files. Depending on what the user chose
const scssFiles = !shouldMakeFolderStructure
  ? [
      /* ============= SCSS - No Folder Structure ============= */
      {
        template: `medium-setup/src/${stylesFolder}/main2.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/main.${stylesFileExtension}`
      }
    ]
  : [
      /* ============= SCSS - Folder Structure ============= */
      {
        template: `medium-setup/src/${stylesFolder}/main.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/main.${stylesFileExtension}`
      },
      /* SCSS - Helpers */
      {
        template: `medium-setup/src/${stylesFolder}/0-helpers/_0-helpers.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/0-helpers/_0-helpers.${stylesFileExtension}`
      },
      {
        template: `medium-setup/src/${stylesFolder}/0-helpers/_functions.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/0-helpers/_functions.${stylesFileExtension}`
      },
      {
        template: `medium-setup/src/${stylesFolder}/0-helpers/_mixins.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/0-helpers/_mixins.${stylesFileExtension}`
      },
      {
        template: `medium-setup/src/${stylesFolder}/0-helpers/_variables.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/0-helpers/_variables.${stylesFileExtension}`
      },
      /* SCSS - Plugins */
      {
        template: `medium-setup/src/${stylesFolder}/1-plugins/_1-plugins.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/1-plugins/_1-plugins.${stylesFileExtension}`
      },
      /* SCSS - Base */
      {
        template: `medium-setup/src/${stylesFolder}/2-base/_2-base.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/2-base/_2-base.${stylesFileExtension}`
      },
      {
        template: `medium-setup/src/${stylesFolder}/2-base/_global.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/2-base/_global.${stylesFileExtension}`
      },
      {
        template: `medium-setup/src/${stylesFolder}/2-base/_reset.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/2-base/_reset.${stylesFileExtension}`
      },
      {
        template: `medium-setup/src/${stylesFolder}/2-base/_state.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/2-base/_state.${stylesFileExtension}`
      },
      {
        template: `medium-setup/src/${stylesFolder}/2-base/_typography.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/2-base/_typography.${stylesFileExtension}`
      },
      /* SCSS - Layout */
      {
        template: `medium-setup/src/${stylesFolder}/3-layout/_3-layout.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/3-layout/_3-layout.${stylesFileExtension}`
      },
      /* SCSS - Modules */
      {
        template: `medium-setup/src/${stylesFolder}/4-modules/_4-modules.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/4-modules/_4-modules.${stylesFileExtension}`
      },
      /* SCSS - Templates */
      {
        template: `medium-setup/src/${stylesFolder}/5-templates/_5-templates.${stylesFileExtension}.ejs`,
        target: `./${nameOfProject}/src/styles/5-templates/_5-templates.${stylesFileExtension}`
      }
    ]

const cssFiles = [
  {
    template: `simple-setup/styles/styles.css.ejs`,
    target: `./${nameOfProject}/src/styles/styles.css`
  }
]

const css =
  stylesSetup === `SCSS` || stylesSetup === 'SASS' ? scssFiles : cssFiles

// Get name of css or scss / sass file
const cssPathArr = css[0].target.split(`/`)
const cssFilename = cssPathArr[cssPathArr.length - 1]

module.exports = [
  /* ============= HTML ============= */
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
  },
  /* ============= CSS / SCSS / SASS ============= */
  ...css,
  /* ============= JavaScript ============= */
  {
    template: `medium-setup/src/scripts/index.js.ejs`,
    target: `./${nameOfProject}/src/scripts/index.js`
  },
  /* ============= JSON ============= */
  {
    template: `medium-setup/package.json.ejs`,
    target: `./${nameOfProject}/package.json`,
    props: { nameOfProject }
  }
]
