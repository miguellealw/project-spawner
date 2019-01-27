const create_SimpleSetup = require('../utils/createSimpleSetup')

module.exports = {
  name: 'project-spawner',
  alias: 'project-s',
  run: async toolbox => {
    const {
      print: { info, success, colors, spin },
      parameters,
      template: { generate },
      strings: { startCase },
      prompt
    } = toolbox

    const spinner = spin(`${colors.success('Loading Project Spawner...')}`)
    await toolbox.system.run('sleep 1')

    const SIMPLE_SETUP = `Simple Setup \t\t ${colors.success(
      '(Includes Vanilla HTML, CSS, and JavaScript)'
    )}`
    const MEDIUM_SETUP = `Medium Setup \t\t ${colors.success(
      '(Includes HTML, CSS / SCSS / SASS, and JavaScript (with Babel) all bundled together with Parcel)'
    )}`
    const CUSTOMIZE_SETUP = `Advanced Setup \t ${colors.success(
      '(Choose Specifically What You Want)'
    )}`

    const nameOfProject = parameters.first

    spinner.stop()
    const askSetupType = {
      type: 'list',
      name: 'setup',
      message: 'Choose Setup:',
      choices: [SIMPLE_SETUP, MEDIUM_SETUP, CUSTOMIZE_SETUP]
    }

    const { setup } = await prompt.ask([askSetupType])

    switch (setup) {
      case SIMPLE_SETUP:
        create_SimpleSetup(toolbox, nameOfProject)
        break
      case MEDIUM_SETUP:
        console.log('medium setup')
        break
      case CUSTOMIZE_SETUP:
        console.log('custoomize setup')
        break
    }

    success(` ✔ ✔ ✔ Your New Project Was Created Successfully! ✔ ✔ ✔ `)
  }
}
