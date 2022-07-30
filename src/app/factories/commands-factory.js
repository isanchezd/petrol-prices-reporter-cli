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

module.exports = addCommand;
