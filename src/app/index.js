import pricesByCountryCommand from './infrastructure/commands/price-by-country.js'
import CLI from './infrastructure/core/cli.js'

const APP = {
  name: 'Gepr',
  description: 'A CLI reporter tool over globalpetrolprices.com',
  version: '0.0.1'
}

function init () {
  const cli = new CLI(APP.name, APP.description, APP.version)
  cli.addCommand(pricesByCountryCommand)

  cli.program.parse()
}

export default {
  init
}
