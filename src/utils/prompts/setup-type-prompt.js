const { prompt } = require('gluegun')

const { SIMPLE_SETUP, MEDIUM_SETUP, CUSTOMIZE_SETUP } = require('../constants')

async function setupTypePrompt() {
  const askSetupType = {
    type: 'list',
    name: 'setup',
    message: 'Choose Setup:',
    choices: [SIMPLE_SETUP, MEDIUM_SETUP, CUSTOMIZE_SETUP]
  }

  const { setup } = await prompt.ask([askSetupType])

  return setup
}

module.exports = setupTypePrompt
