export default class Price {
  #_amount
  #_currency

  constructor (amount, currency) {
    this.#_amount = amount
    this.#_currency = currency
  }

  get amount () {
    return this.#_amount
  }

  get currency () {
    return this.#_currency
  }

  toString () {
    return `${this.amount} ${this.currency.symbol}`
  }
}
