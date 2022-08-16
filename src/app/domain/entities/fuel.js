export default class Fuel {
  #name
  #date
  #prices

  constructor (name, date, prices) {
    this.#name = name
    this.#date = date
    this.#prices = [...prices]
  }

  get name () {
    return this.#name
  }

  get date () {
    return this.#date
  }

  getPriceByCurrency (currencyId) {
    return this.#prices.find((price) => price.currency.id === currencyId)
  }
}
