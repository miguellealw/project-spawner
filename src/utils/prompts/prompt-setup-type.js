const { prompt } = require('gluegun')

const { SIMPLE_SETUP, MEDIUM_SETUP, ADVANCED_SETUP } = require('../constants')

const common = require('../common')

async function promptSetupType() {
  const askSetupType = {
    type: 'list',
    name: 'setup',
    message: 'Choose Setup:',
    choices: [SIMPLE_SETUP, MEDIUM_SETUP, ADVANCED_SETUP]
  }

  const { setup } = await prompt.ask([askSetupType])
  common.setupType = setup

  return setup
}

module.exports = promptSetupType
