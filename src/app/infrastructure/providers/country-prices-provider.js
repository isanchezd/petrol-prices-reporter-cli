const DOMHandler = require('../core/dom-handler');
const Fuel = require('../../domain/entities/fuel');
const Price = require('../../domain/entities/price');
const Currency = require('../../domain/entities/currency');
const {
  currencies,
  currencySymbols,
} = require('../../domain/models/currency-types');

function getCountryPrices(DOM) {
  const domHandler = new DOMHandler(DOM);

  const fuelPrices = domHandler.getDataTable(0);
  const electricityPrices = domHandler.getDataTable(1);
  const NGPrices = domHandler.getDataTable(2);

  return [
    ...fuelPrices.map(getFuel),
    ...electricityPrices.map(getFuel),
    ...NGPrices.map(getFuel),
  ];
}

function getFuel(DOMData) {
  const [EUR, USD] = currencies;

  const newFuel = new Fuel(DOMData.title, DOMData.data[0], [
    new Price(DOMData.data[1], new Currency(EUR, currencySymbols[EUR])),
    new Price(DOMData.data[2], new Currency(USD, currencySymbols[USD])),
  ]);

  return newFuel;
}

module.exports = { getCountryPrices };
