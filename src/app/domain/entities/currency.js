export default class Currency {
  #_text
  #_symbol

  constructor (text, symbol) {
    this.#_text = text
    this.#_symbol = symbol
  }

  get text () {
    return this.#_text
  }

  get symbol () {
    return this.#_symbol
  }
}
