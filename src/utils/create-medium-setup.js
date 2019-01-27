const mediumSetupRoutes = require('./template-file-routes/medium-setup-routes')

async function create_MediumSetup(toolbox, nameOfProject) {
  const {
    template: { generate },
    filesystem,
    print: { spin },
    prompt
  } = toolbox

  const askStylesSetup = {
    type: 'list',
    name: 'stylesSetup',
    message: 'What Kind of Styling Would You Like?:',
    choices: ['CSS', 'SCSS']
  }

  const { stylesSetup } = await prompt.ask([askStylesSetup])

  if (stylesSetup === 'SCSS') {
    const shouldMakeFolderStructure = await prompt.confirm('Would You Like your SCSS to be Organized in a Folder Structure?: ')

    mediumSetupRoutes(nameOfProject, shouldMakeFolderStructure).forEach(async template => {
      await generate(template)
      filesystem.dir(`./${nameOfProject}/assets`)
    })
  }

  // Install NPM Packages
  const spinner = spin(
    `Creating project and installing dependencies. This may take a while.`
  )
  // const npmInit = await system.run(`cd ${nameOfProject} && npm install`)
  spinner.stop()
}

module.exports = create_MediumSetup
