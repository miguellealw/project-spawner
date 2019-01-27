const create_SimpleSetup = require('../utils/create-simple-setup')
const create_MediumSetup = require('../utils/create-medium-setup')

module.exports = {
  name: 'create',
  alias: 'c',
  description: 'Allows you to create a simple, medium, or advanced project setup',
  run: async toolbox => {
    const {
      print: { success, colors, spin, error },
      parameters,
      prompt
    } = toolbox

    const spinner = spin(`${colors.success('Loading Project Spawner...')}`)
    await toolbox.system.run('sleep 1')

    const SIMPLE_SETUP = `Simple Setup \t\t ${colors.success(
      '(Includes Vanilla HTML, CSS, and JavaScript)'
    )}`
    const MEDIUM_SETUP = `Medium Setup \t\t ${colors.success(
      '(Includes HTML, CSS / SCSS / SASS, and JavaScript all bundled together with Parcel)'
    )}`
    const CUSTOMIZE_SETUP = `Advanced Setup \t ${colors.success(
      '(Choose Specifically What You Want)'
    )}`

    const nameOfProject = parameters.first
    spinner.stop()

    /* Prompt */
    const askSetupType = {
      type: 'list',
      name: 'setup',
      message: 'Choose Setup:',
      choices: [SIMPLE_SETUP, MEDIUM_SETUP, CUSTOMIZE_SETUP]
    }

    const { setup } = await prompt.ask([askSetupType])

    switch (setup) {
      case SIMPLE_SETUP:
        create_SimpleSetup(toolbox, nameOfProject);
        break
      case MEDIUM_SETUP:
        await create_MediumSetup(toolbox, nameOfProject);
        break
      case CUSTOMIZE_SETUP:
        error('This is not yet implemented...😢')
        return;
        break
    }

    success(`\n\n✔ ✔ ✔ Your New Project Was Created Successfully! ✔ ✔ ✔\n\n`)
  }
}
