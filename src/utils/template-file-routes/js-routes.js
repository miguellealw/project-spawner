const { nameOfProject } = require('../common')

const simpleSetupJSRoutes = [
  {
    template: 'simple-setup/scripts/index.js.ejs',
    target: `./${nameOfProject}/scripts/index.js`
  }
]

const mediumSetupJSRoutes = [
  {
    template: `medium-setup/src/scripts/index.js.ejs`,
    target: `./${nameOfProject}/src/scripts/index.js`
  }
]

const advancedSetupJSRoutes = [...mediumSetupJSRoutes]

module.exports = {
  simpleSetupJSRoutes,
  mediumSetupJSRoutes,
  advancedSetupJSRoutes
}
