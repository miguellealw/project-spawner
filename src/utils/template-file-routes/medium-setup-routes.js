const {
  strings: { startCase }
} = require('gluegun')

// TODO: find a way to make nameOfProject accessible throughout project
const scssFiles = (nameOfProject, shouldMakeFolderStructure) =>
  !shouldMakeFolderStructure
    ? [
        /* ============= CSS ============= */
        {
          template: 'medium-setup/styles/main2.scss.ejs',
          target: `./${nameOfProject}/styles/main.scss`
        }
      ]
    : [
        /* ============= SCSS ============= */
        {
          template: 'medium-setup/styles/main.scss.ejs',
          target: `./${nameOfProject}/styles/main.scss`
        },
        /* SCSS - Helpers */
        {
          template: 'medium-setup/styles/0-helpers/_0-helpers.scss.ejs',
          target: `./${nameOfProject}/styles/0-helpers/_0-helpers.scss`
        },
        {
          template: 'medium-setup/styles/0-helpers/_functions.scss.ejs',
          target: `./${nameOfProject}/styles/0-helpers/_functions.scss`
        },
        {
          template: 'medium-setup/styles/0-helpers/_mixins.scss.ejs',
          target: `./${nameOfProject}/styles/0-helpers/_mixins.scss`
        },
        {
          template: 'medium-setup/styles/0-helpers/_variables.scss.ejs',
          target: `./${nameOfProject}/styles/0-helpers/_variables.scss`
        },
        /* SCSS - Plugins */
        {
          template: 'medium-setup/styles/1-plugins/_1-plugins.scss.ejs',
          target: `./${nameOfProject}/styles/1-plugins/_1-plugins.scss`
        },
        /* SCSS - Base */
        {
          template: 'medium-setup/styles/2-base/_2-base.scss.ejs',
          target: `./${nameOfProject}/styles/2-base/_2-base.scss`
        },
        {
          template: 'medium-setup/styles/2-base/_global.scss.ejs',
          target: `./${nameOfProject}/styles/2-base/_global.scss`
        },
        {
          template: 'medium-setup/styles/2-base/_reset.scss.ejs',
          target: `./${nameOfProject}/styles/2-base/_reset.scss`
        },
        {
          template: 'medium-setup/styles/2-base/_state.scss.ejs',
          target: `./${nameOfProject}/styles/2-base/_state.scss`
        },
        {
          template: 'medium-setup/styles/2-base/_typography.scss.ejs',
          target: `./${nameOfProject}/styles/2-base/_typography.scss`
        },
        /* SCSS - Layout */
        {
          template: 'medium-setup/styles/3-layout/_3-layout.scss.ejs',
          target: `./${nameOfProject}/styles/3-layout/_3-layout.scss`
        },
        /* SCSS - Modules */
        {
          template: 'medium-setup/styles/4-modules/_4-modules.scss.ejs',
          target: `./${nameOfProject}/styles/4-modules/_4-modules.scss`
        },
        /* SCSS - Templates */
        {
          template: 'medium-setup/styles/5-templates/_5-templates.scss.ejs',
          target: `./${nameOfProject}/styles/5-templates/_5-templates.scss`
        }
      ]

module.exports = (nameOfProject, shouldMakeFolderStructure) => [
  /* ============= HTML ============= */
  {
    template: 'medium-setup/index.html.ejs',
    target: `./${nameOfProject}/index.html`,
    props: { nameOfProject: startCase(nameOfProject) }
  },
  {
    template: 'medium-setup/pages/about.html.ejs',
    target: `./${nameOfProject}/pages/about.html`,
    props: { nameOfProject: startCase(nameOfProject) }
  },
  /* ============= SCSS ============= */
  ...scssFiles(nameOfProject, shouldMakeFolderStructure),
  /* ============= JavaScript ============= */
  {
    template: 'medium-setup/scripts/index.js.ejs',
    target: `./${nameOfProject}/scripts/index.js`
  },
  /* ============= JSON ============= */
  {
    template: 'medium-setup/package.json.ejs',
    target: `./${nameOfProject}/package.json`,
    props: { nameOfProject }
  }
]
