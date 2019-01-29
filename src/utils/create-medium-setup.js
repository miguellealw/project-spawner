const mediumSetupRoutes = require('./template-file-routes/medium-setup-routes')
const stylingPrompt = require('./prompts/styling-prompt')

async function createMediumSetup(toolbox, nameOfProject) {
  const {
    template: { generate },
    filesystem,
    print: { spin, success, info },
    prompt,
    system
  } = toolbox

  // Prompt for styling preference
  const stylesSetup = await stylingPrompt()

  if (stylesSetup === 'SCSS') {
    const shouldMakeFolderStructure = await prompt.confirm(
      'Would You Like your SCSS to be Organized in a Folder Structure?: '
    )

    mediumSetupRoutes(nameOfProject, shouldMakeFolderStructure).forEach(
      async template => {
        await generate(template)
        // Create assets folder
        filesystem.dir(`./${nameOfProject}/assets`)
      }
    )
  }

  // Install NPM Packages
  const spinner = spin(
    `Creating project and installing dependencies. This may take a while.`
  )
  // const npmInit = await system.run(`cd ${nameOfProject} && npm install`)
  spinner.stop()

  return () => {
    info(`\n -------- Now Run --------`)
    success(`
      cd ${nameOfProject}

      npm run dev
    `)
  }
}

module.exports = createMediumSetup
