const { prompt } = require('gluegun')

async function stylingPrompt() {
  const askStylesSetup = {
    type: 'list',
    name: 'stylesSetup',
    message: 'What Kind of Styling Would You Like?:',
    choices: ['CSS', 'SCSS']
  }

  const { stylesSetup } = await prompt.ask([askStylesSetup])
  return stylesSetup
}

module.exports = stylingPrompt
