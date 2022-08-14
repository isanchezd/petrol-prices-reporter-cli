import { Command } from 'commander';

export function createProgram({ name, description, version }) {
  return new Command().name(name).description(description).version(version);
}

export function addCommand(
  program,
  { name, description, argumentType, argumentDescription, action }
) {
  program
    .command(name)
    .description(description)
    .argument(argumentType, argumentDescription)
    .action(action);
}
