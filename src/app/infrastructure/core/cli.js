const { Command } = require('commander');

function createProgram({ name, description, version }) {
  return new Command().name(name).description(description).version(version);
}

function addCommand(
  program,
  { name, description, argumentType, argumentDescription, action }
) {
  program
    .command(name)
    .description(description)
    .argument(argumentType, argumentDescription)
    .action(action);
}

module.exports = { createProgram, addCommand };
