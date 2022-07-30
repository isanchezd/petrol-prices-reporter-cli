const Fuel = require('../domain/entities/fuel');
const Price = require('../domain/entities/price');
const Currency = require('../domain/entities/currency');

function FuelFactory(fuelData) {
  const newFuel = new Fuel(fuelData.title, fuelData.data[0], [
    new Price(fuelData.data[1], new Currency('EUR', '€')),
    new Price(fuelData.data[2], new Currency('USD', '$')),
  ]);

  return newFuel;
}

module.exports = FuelFactory;
