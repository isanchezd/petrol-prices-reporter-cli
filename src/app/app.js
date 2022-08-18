import CountryCommand from './infrastructure/commands/country-command.js'
import CLI from './infrastructure/core/cli.js'

const APP_CONFIG = {
  name: 'Gepr',
  description: 'A CLI reporter tool over globalpetrolprices.com',
  version: '0.0.1'
}

function init () {
  const cli = new CLI(
    APP_CONFIG.name,
    APP_CONFIG.description,
    APP_CONFIG.version
  )
  cli.addCommand({...CountryCommand})
  cli.program.parse()
}

const App = {
  init
}

export default App
