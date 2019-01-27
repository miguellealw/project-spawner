const simpleSetupRoutes = require('./template-file-routes/simple-setup-routes')

function create_SimpleSetup(toolbox, nameOfProject) {
  const {
    template: { generate },
    filesystem
  } = toolbox

  simpleSetupRoutes(nameOfProject).forEach(async template => {
    await generate(template)
    filesystem.dir(`./${nameOfProject}/assets`)
  })
}

module.exports = create_SimpleSetup
