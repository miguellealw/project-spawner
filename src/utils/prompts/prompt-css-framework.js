const { prompt } = require('gluegun')

async function promptCssFramework() {
  const shouldUseCSSFramework = await prompt.confirm(
    `Would you like to use a CSS framework?:`
  )

  const askStylesSetup = {
    type: 'list',
    name: 'cssFramework',
    message: 'What CSS framework would you like to use?:',
    choices: ['Bootstrap', 'Bulma', 'Spectre']
  }

  if(shouldUseCSSFramework) {
    const { cssFramework } = await prompt.ask([askStylesSetup])
    return cssFramework
  }

  return null;
}

module.exports = promptCssFramework
