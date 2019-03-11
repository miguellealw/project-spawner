const common = require('./common')

const promptCssFramework = require('./prompts/prompt-css-framework')
const promptStyling = require('./prompts/prompt-styling')

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
  const stylesSetup = await promptStyling()
  common.stylesSetup = stylesSetup
  const cssFramework = await promptCssFramework()
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
