const htmlRoutes = require('./html-routes')
/* 
  cssRoutes exports a different array depending if
  on whether the user chose css / scss / sass
  and whether they wanted a folder structure 
 */
const cssRoutes = require('./css-routes')
const jsRoutes = require('./js-routes')
const miscRoutes = require('./misc-routes')

const { setupType } = require('../common')
const { SIMPLE_SETUP, MEDIUM_SETUP, ADVANCED_SETUP } = require('../constants')

// Get name of css or scss / sass file
const cssPathArr = cssRoutes[0].target.split(`/`)
const cssFilename = cssPathArr[cssPathArr.length - 1]

// Export different routes array depending on the setup chosen
switch (setupType) {
  case SIMPLE_SETUP:
    module.exports = [
      ...htmlRoutes.simpleSetupHTMLRoutes,
      ...cssRoutes,
      ...jsRoutes.simpleSetupJSRoutes
    ]
    break
  case MEDIUM_SETUP:
    module.exports = [
      ...htmlRoutes.mediumSetupHTMLRoutes(cssFilename),
      ...cssRoutes,
      ...jsRoutes.mediumSetupJSRoutes,
      ...miscRoutes
    ]
    break
  case ADVANCED_SETUP:
    module.exports = [
      ...htmlRoutes.advancedSetupHTMLRoutes(cssFilename),
      ...cssRoutes,
      ...jsRoutes.advancedSetupJSRoutes,
      ...miscRoutes
    ]
}
