const createSimpleSetup = require('../utils/create-simple-setup')
const createMediumSetup = require('../utils/create-medium-setup')
const setupTypePrompt = require('../utils/prompts/setup-type-prompt')
// TODO: Instead of doing this try doing process.env['VAR_NAME']
const common = require('../utils/common')
const {
  SIMPLE_SETUP,
  MEDIUM_SETUP,
  CUSTOMIZE_SETUP
} = require('../utils/constants')

module.exports = {
  name: 'create',
  alias: 'c',
  description:
    'Allows you to create a simple, medium, or advanced project setup',
  run: async toolbox => {
    const {
      print: { success, colors, spin, error },
      parameters
    } = toolbox

    const spinner = spin(`${colors.success('Loading Project Spawner...')}`)
    await toolbox.system.run('sleep 1')

    // Get project name
    const nameOfProject = parameters.first
    // TODO: Check if project name already exists in the current folder
    if (!nameOfProject) {
      spinner.stop()
      error('No project name was specified!')
      return
    }
    common.nameOfProject = nameOfProject
    common.cliOptions = { ...common.cliOptions, ...parameters.options }

    spinner.stop()

    // Prompt where user selects setup type
    const setup = await setupTypePrompt()

    switch (setup) {
      case SIMPLE_SETUP:
        await createSimpleSetup(toolbox, nameOfProject)
        break
      case MEDIUM_SETUP:
        var mediumSetupMessage = await createMediumSetup(toolbox, nameOfProject)
        break
      case CUSTOMIZE_SETUP:
        error('This is not yet implemented...😢')
        return
      // break
    }

    success(`\n\n✔ ✔ ✔ Your New Project Was Created Successfully! ✔ ✔ ✔\n\n`)
    if (setup === MEDIUM_SETUP) mediumSetupMessage()
  }
}
