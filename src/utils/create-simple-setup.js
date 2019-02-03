// const simpleSetupRoutes = require('./template-file-routes/simple-setup-routes')

function createSimpleSetup(toolbox) {
  const { nameOfProject } = require('./common')
  const setupRoutes = require('./template-file-routes')
  const {
    template: { generate },
    filesystem
  } = toolbox
  setupRoutes.forEach(async template => {
    await generate(template)
    filesystem.dir(`./${nameOfProject}/assets`)
  })
}

module.exports = createSimpleSetup
