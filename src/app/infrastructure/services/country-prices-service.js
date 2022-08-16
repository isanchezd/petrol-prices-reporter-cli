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
    ...fuelPrices.map(getFuel),
    ...electricityPrices.map(getFuel),
    ...NGPrices.map(getFuel)
  ]
}

function getFuel (DOMData) {
  const [EUR, USD] = currencies

  const newFuel = new Fuel(DOMData.title, DOMData.data[0], [
    new Price(DOMData.data[1], new Currency(EUR, currencySymbols[EUR])),
    new Price(DOMData.data[2], new Currency(USD, currencySymbols[USD]))
  ])

  return newFuel
}

export default {
  getCountryPrices
}
