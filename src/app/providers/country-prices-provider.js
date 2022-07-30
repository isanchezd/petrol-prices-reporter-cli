const PageHandler = require('../core/page-handler');
const FuelFactory = require('../factories/fuel-factory');

function getCountryPrices(DOM) {
  const pageHandler = new PageHandler(DOM);

  const fuelPrices = pageHandler.getDataTable(0);
  const electricityPrices = pageHandler.getDataTable(1);
  const NGPrices = pageHandler.getDataTable(2);

  return [
    ...fuelPrices.map((item) => FuelFactory(item)),
    ...electricityPrices.map((item) => FuelFactory(item)),
    ...NGPrices.map((item) => FuelFactory(item)),
  ];
}

const CountryPricesProvider = {
  getCountryPrices,
};

module.exports = CountryPricesProvider;
