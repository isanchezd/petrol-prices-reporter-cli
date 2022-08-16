export default class Price {
  #amount
  #currency

  constructor (amount, currency) {
    this.#amount = amount
    this.#currency = currency
  }

  get amount () {
    return this.#amount
  }

  get currency () {
    return this.#currency
  }

  toString () {
    return `${this.amount} ${this.currency.symbol}`
  }
}
