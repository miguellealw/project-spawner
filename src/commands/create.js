const createSimpleSetup = require('../utils/create-simple-setup')
const createMediumSetup = require('../utils/create-medium-setup')
const createAdvancedSetup = require('../utils/create-advanced-setup')

const setupTypePrompt = require('../utils/prompts/setup-type-prompt')

// TODO: Instead of doing this try doing process.env['VAR_NAME']
const common = require('../utils/common')

const {
  SIMPLE_SETUP,
  MEDIUM_SETUP,
  ADVANCED_SETUP
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
        await createSimpleSetup(toolbox)
        break
      case MEDIUM_SETUP:
        await createMediumSetup(toolbox)
        break
      case ADVANCED_SETUP:
        await createAdvancedSetup(toolbox)
        break
    }

    success(`\n\n✔ ✔ ✔ Your New Project Was Created Successfully! ✔ ✔ ✔\n\n`)
    const messages = require('../utils/messages')
    if (setup === MEDIUM_SETUP || setup === ADVANCED_SETUP) messages.npmInstallComplete()
  }
}
