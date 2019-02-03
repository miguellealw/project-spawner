const common = require('./common')

const cssFrameworkPrompt = require('./prompts/css-framework-prompt')
const stylingPrompt = require('./prompts/styling-prompt')

async function createAdvancedSetup(toolbox) {
  const {
    template: { generate },
    filesystem,
    print: { spin },
    system
  } = toolbox

  const {
    nameOfProject,
    cliOptions: { npmI: shouldNpmInstall }
  } = common

  // Prompts for advanced setup
  const stylesSetup = await stylingPrompt()
  common.stylesSetup = stylesSetup
  const cssFramework = await cssFrameworkPrompt()
  common.cssFramework = cssFramework

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

  // switch (cssFramework) {
  //   case 'Bootstrap':
  //     console.log('you chose bootstrap')
  //     break
  //   case 'Bulma':
  //     console.log('you chose bulma')
  //     break
  //   case 'Foundation':
  //     console.log('you chose foundation')
  //     break
  //   default:
  //     break
  // }
}

module.exports = createAdvancedSetup
