const {
  print: { info, success }
} = require('gluegun/print')
const {
  nameOfProject,
  cliOptions: { npmI: shouldNpmInstall }
} = require('./common')

module.exports = {
  npmInstallComplete: () => {
    info(`\n To Start Your Project Run the Following: `)
    success(`
      cd ${nameOfProject}
      ${!shouldNpmInstall ? 'npm install' : ''}

      npm run dev
    `)
  }
}
