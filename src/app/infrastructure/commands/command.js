export default class Command {
  #_name
  #_description
  #_argumentType
  #_argumentDescription

  constructor (name, description, argumentType, argumentDescription) {
    this.#_name = name
    this.#_description = description
    this.#_argumentType = argumentType
    this.#_argumentDescription = argumentDescription
  }

  get name () {
    return this.#_name
  }

  get description () {
    return this.#_description
  }

  get argumentType () {
    return this.#_argumentType
  }

  get argumentDescription () {
    return this.#_argumentDescription
  }
}
