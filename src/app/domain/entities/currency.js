class Currency {
  #text;
  #symbol;

  constructor(text, symbol) {
    this.#text = text;
    this.#symbol = symbol;
  }

  get text() {
    return this.#text;
  }

  get symbol() {
    return this.#symbol;
  }
}

module.exports = Currency;
