const { prompt } = require('gluegun')
const common = require('../common')

async function stylingPrompt() {
  const askStylesSetup = {
    type: 'list',
    name: 'stylesSetup',
    message: 'What Kind of Styling Would You Like?:',
    choices: ['CSS', 'SCSS', 'SASS']
  }

  const { stylesSetup } = await prompt.ask([askStylesSetup])

  // Prompt for folder structure
  if (stylesSetup === 'SCSS' || stylesSetup === 'SASS') {
    const shouldMakeFolderStructure = await prompt.confirm(
      `Would You Like your ${stylesSetup} to be Organized in a Folder Structure?: `
    )
    common.shouldMakeFolderStructure = shouldMakeFolderStructure
  }
  return stylesSetup
}

module.exports = stylingPrompt
