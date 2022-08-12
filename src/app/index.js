const countryCommand = require('./infrastructure/commands/country');
const CLI = require('./infrastructure/core/cli');

function bootstrap() {
  const program = CLI.createProgram({
    name: 'Gepr',
    description: 'A CLI reporter tool over globalpetrolprices.com',
    version: '0.0.1',
  });
  CLI.addCommand(program, countryCommand);

  program.parse();
}

module.exports = { bootstrap };
