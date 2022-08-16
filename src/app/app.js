import PriceByCountryCommand from './infrastructure/commands/price-by-country.js'
import CLI from './infrastructure/core/cli.js'

const APP_CONFIG = {
  name: 'Gepr',
  description: 'A CLI reporter tool over globalpetrolprices.com',
  version: '0.0.1'
}

const PRICE_BY_COUNTRY_COMMAND_CONFIG = {
  name: 'prices-by-country',
  description: 'Get price by the country',
  argumentType: '<string>',
  argumentDescription: 'Country'
}

function init () {
  const cli = new CLI(
    APP_CONFIG.name,
    APP_CONFIG.description,
    APP_CONFIG.version
  )
  cli.addCommand(
    new PriceByCountryCommand(
      PRICE_BY_COUNTRY_COMMAND_CONFIG.name,
      PRICE_BY_COUNTRY_COMMAND_CONFIG.description,
      PRICE_BY_COUNTRY_COMMAND_CONFIG.argumentType,
      PRICE_BY_COUNTRY_COMMAND_CONFIG.argumentDescription
    )
  )

  cli.program.parse()
}

const App = {
  init
}

export default App
