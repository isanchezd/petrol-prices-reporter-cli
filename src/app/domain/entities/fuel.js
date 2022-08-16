export default class Fuel {
  #_name
  #_date
  #_prices

  constructor (name, date, prices) {
    this.#_name = name
    this.#_date = date
    this.#_prices = [...prices]
  }

  get name () {
    return this.#_name
  }

  get date () {
    return this.#_date
  }

  getPriceByCurrency (currencyId) {
    return this.#_prices.find((price) => price.currency.id === currencyId)
  }
}
