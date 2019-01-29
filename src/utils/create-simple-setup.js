const simpleSetupRoutes = require('./template-file-routes/simple-setup-routes')

function createSimpleSetup(toolbox, nameOfProject) {
  const {
    template: { generate },
    filesystem
  } = toolbox

  simpleSetupRoutes(nameOfProject).forEach(async template => {
    await generate(template)
    filesystem.dir(`./${nameOfProject}/assets`)
  })
}

module.exports = createSimpleSetup
