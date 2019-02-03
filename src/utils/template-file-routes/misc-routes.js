const { nameOfProject } = require('../common')

const miscRoutes = [
  /* ============= JSON ============= */
  {
    template: `medium-setup/package.json.ejs`,
    target: `./${nameOfProject}/package.json`,
    props: { nameOfProject }
  }
]

module.exports = miscRoutes
