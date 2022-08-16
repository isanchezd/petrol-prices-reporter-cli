import { Command } from 'commander'

export default class CLI {
  #program

  constructor (name, description, version) {
    this.#program = new Command()
      .name(name)
      .description(description)
      .version(version)
  }

  get program () {
    return this.#program
  }

  addCommand ({ name, description, argumentType, argumentDescription, action }) {
    this.#program
      .command(name)
      .description(description)
      .argument(argumentType, argumentDescription)
      .action(action)
  }
}
