import DOMHandler from '../core/dom-handler.js'
import Fuel from '../../domain/entities/fuel.js'
import Price from '../../domain/entities/price.js'
import Currency from '../../domain/entities/currency.js'
import {
  currencies,
  currencySymbols
} from '../../domain/models/currency-types.js'

function getCountryPrices (DOM) {
  const domHandler = new DOMHandler(DOM)

  const fuelPrices = domHandler.getDataTable(0)
  const electricityPrices = domHandler.getDataTable(1)
  const NGPrices = domHandler.getDataTable(2)

  return [
    fuelPrices.map(getFuel),
    electricityPrices.map(getFuel),
    NGPrices.map(getFuel)
  ]
}

function getFuel (DOMData) {
  const [EUR, USD] = currencies

  const newFuel = new Fuel(DOMData[0], DOMData[1], [
    new Price(DOMData[3], new Currency(EUR, currencySymbols[EUR])),
    new Price(DOMData[4], new Currency(USD, currencySymbols[USD]))
  ])

  return newFuel
}

const CountryPricesService = {
  getCountryPrices
}

export default CountryPricesService
