const stylingPrompt = require('./prompts/styling-prompt')
const common = require('./common')

async function createMediumSetup(toolbox) {
  const {
    template: { generate },
    filesystem,
    print: { spin, success, info },
    system
  } = toolbox

  const {
    nameOfProject,
    cliOptions: { npmI: shouldNpmInstall }
  } = common

  // Prompt for styling preference
  const stylesSetup = await stylingPrompt()
  common.stylesSetup = stylesSetup

  /*
    Require here because 'medium-setup-routes' requires the 'common' object to 
    be populated before the file is read
  */
  const setupRoutes = require('./template-file-routes')
  setupRoutes.forEach(async template => {
    await generate(template)
    // Create assets folder
    filesystem.dir(`./${nameOfProject}/src/assets`)
  })

  // Install NPM Packages
  const spinner = spin(
    `Creating project and installing dependencies. This may take a while.`
  )

  if (shouldNpmInstall) {
    await system.run(`cd ${nameOfProject} && npm install`)
  }

  spinner.stop()
}

module.exports = createMediumSetup
