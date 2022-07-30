const countryCommand = require('./commands/country');
const ProgramHandler = require('./core/program-handler');
const addCommand = require('./factories/commands-factory');

function App() {
  const program = ProgramHandler.createProgram({
    name: 'Gepr',
    description: 'A CLI reporter tool over globalpetrolprices.com',
    version: '0.0.1',
  });
  addCommand(program, countryCommand);

  program.parse();
}

module.exports = App;
