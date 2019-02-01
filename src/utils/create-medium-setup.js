const stylingPrompt = require('./prompts/styling-prompt')
const common = require('./common')

async function createMediumSetup(toolbox) {
  const {
    template: { generate },
    filesystem,
    print: { spin, success, info },
    prompt,
    system
  } = toolbox

  const {
    nameOfProject,
    cliOptions: { npmI: shouldNpmInstall }
  } = common

  // Prompt for styling preference
  const stylesSetup = await stylingPrompt()
  common.stylesSetup = stylesSetup

  if (stylesSetup === 'SCSS') {
    const shouldMakeFolderStructure = await prompt.confirm(
      'Would You Like your SCSS to be Organized in a Folder Structure?: '
    )
    common.shouldMakeFolderStructure = shouldMakeFolderStructure
  }

  /*
    Require here because 'medium-setup-routes' requires the 'common' object to 
    be populated beforehand
  */
  const mediumSetupRoutes = require('./template-file-routes/medium-setup-routes')
  mediumSetupRoutes.forEach(async template => {
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

  // Return finishing prompt
  return () => {
    info(`\n To Start Your Project Run the Following: `)
    success(`
      cd ${nameOfProject}
      ${!shouldNpmInstall ? 'npm install' : ''}

      npm run dev
    `)
  }
}

module.exports = createMediumSetup
