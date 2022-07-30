const { Command } = require('commander');

function createProgram({ name, description, version }) {
  return new Command().name(name).description(description).version(version);
}

const ProgramHandler = {
  createProgram,
};

module.exports = ProgramHandler;
