const {
  strings: { startCase }
} = require('gluegun')

const {
  nameOfProject,
  stylesSetup,
  shouldMakeFolderStructure
} = require('../common')


const scssFiles = !shouldMakeFolderStructure
  ? [
      /* ============= SCSS - No Folder Structure ============= */
      {
        template: 'medium-setup/src/styles/main2.scss.ejs',
        target: `./${nameOfProject}/src/styles/main.scss`
      }
    ]
  : [
      /* ============= SCSS - Folder Structure ============= */
      {
        template: 'medium-setup/src/styles/main.scss.ejs',
        target: `./${nameOfProject}/src/styles/main.scss`
      },
      /* SCSS - Helpers */
      {
        template: 'medium-setup/src/styles/0-helpers/_0-helpers.scss.ejs',
        target: `./${nameOfProject}/src/styles/0-helpers/_0-helpers.scss`
      },
      {
        template: 'medium-setup/src/styles/0-helpers/_functions.scss.ejs',
        target: `./${nameOfProject}/src/styles/0-helpers/_functions.scss`
      },
      {
        template: 'medium-setup/src/styles/0-helpers/_mixins.scss.ejs',
        target: `./${nameOfProject}/src/styles/0-helpers/_mixins.scss`
      },
      {
        template: 'medium-setup/src/styles/0-helpers/_variables.scss.ejs',
        target: `./${nameOfProject}/src/styles/0-helpers/_variables.scss`
      },
      /* SCSS - Plugins */
      {
        template: 'medium-setup/src/styles/1-plugins/_1-plugins.scss.ejs',
        target: `./${nameOfProject}/src/styles/1-plugins/_1-plugins.scss`
      },
      /* SCSS - Base */
      {
        template: 'medium-setup/src/styles/2-base/_2-base.scss.ejs',
        target: `./${nameOfProject}/src/styles/2-base/_2-base.scss`
      },
      {
        template: 'medium-setup/src/styles/2-base/_global.scss.ejs',
        target: `./${nameOfProject}/src/styles/2-base/_global.scss`
      },
      {
        template: 'medium-setup/src/styles/2-base/_reset.scss.ejs',
        target: `./${nameOfProject}/src/styles/2-base/_reset.scss`
      },
      {
        template: 'medium-setup/src/styles/2-base/_state.scss.ejs',
        target: `./${nameOfProject}/src/styles/2-base/_state.scss`
      },
      {
        template: 'medium-setup/src/styles/2-base/_typography.scss.ejs',
        target: `./${nameOfProject}/src/styles/2-base/_typography.scss`
      },
      /* SCSS - Layout */
      {
        template: 'medium-setup/src/styles/3-layout/_3-layout.scss.ejs',
        target: `./${nameOfProject}/src/styles/3-layout/_3-layout.scss`
      },
      /* SCSS - Modules */
      {
        template: 'medium-setup/src/styles/4-modules/_4-modules.scss.ejs',
        target: `./${nameOfProject}/src/styles/4-modules/_4-modules.scss`
      },
      /* SCSS - Templates */
      {
        template: 'medium-setup/src/styles/5-templates/_5-templates.scss.ejs',
        target: `./${nameOfProject}/src/styles/5-templates/_5-templates.scss`
      }
    ]

const cssFiles = [
  {
    template: 'simple-setup/styles/styles.css.ejs',
    target: `./${nameOfProject}/src/styles/styles.css`
  }
]

const css = stylesSetup === 'SCSS' ? scssFiles : cssFiles

// Get name of css file
const cssPathArr = css[0].target.split('/')
const cssFilename = cssPathArr[cssPathArr.length - 1];

module.exports = [
  /* ============= HTML ============= */
  {
    template: 'medium-setup/src/index.html.ejs',
    target: `./${nameOfProject}/src/index.html`,
    props: {
      nameOfProject: startCase(nameOfProject),
      cssFilename
    }
  },
  {
    template: 'medium-setup/src/pages/about.html.ejs',
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
    template: 'medium-setup/src/scripts/index.js.ejs',
    target: `./${nameOfProject}/src/scripts/index.js`
  },
  /* ============= JSON ============= */
  {
    template: 'medium-setup/package.json.ejs',
    target: `./${nameOfProject}/package.json`,
    props: { nameOfProject }
  }
]
