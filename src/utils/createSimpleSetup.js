const {
  strings: { startCase }
} = require('gluegun')

const simpleSetupFiles = nameOfProject => [
  {
    template: 'simple-setup/index.html.ejs',
    target: `./${nameOfProject}/index.html`,
    props: { nameOfProject: startCase(nameOfProject) }
  },
  {
    template: 'simple-setup/pages/about.html.ejs',
    target: `./${nameOfProject}/pages/about.html`,
    props: { nameOfProject: startCase(nameOfProject) }
  },
  {
    template: 'simple-setup/scripts/index.js.ejs',
    target: `./${nameOfProject}/scripts/index.js`
  },
  {
    template: 'simple-setup/styles/styles.css.ejs',
    target: `./${nameOfProject}/styles/styles.css`
  }
]

function create_SimpleSetup(toolbox, nameOfProject) {
  const {
    template: { generate },
    filesystem
  } = toolbox

  simpleSetupFiles(nameOfProject).forEach(async template => {
    await generate(template)
    filesystem.dir(`./${nameOfProject}/assets`)
  })
}

module.exports = create_SimpleSetup
