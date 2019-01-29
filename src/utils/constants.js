const {
  print: { colors }
} = require('gluegun')

module.exports = {
  SIMPLE_SETUP: `Simple Setup \t\t ${colors.success(
    '(Includes Vanilla HTML, CSS, and JavaScript)'
  )}`,
  MEDIUM_SETUP: `Medium Setup \t\t ${colors.success(
    '(Includes HTML, CSS / SCSS / SASS, and JavaScript all bundled together with Parcel)'
  )}`,
  CUSTOMIZE_SETUP: `Advanced Setup \t ${colors.success(
    '(Choose Specifically What You Want)'
  )}`
}
