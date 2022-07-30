const CountryPricesProvider = require('../providers/country-prices-provider');
const PriceRepository = require('../repositories/price-repository');

async function getPricesByCountry(country) {
  let data = [];
  try {
    const response = await PriceRepository.getPricesByCountry(country);
    data = CountryPricesProvider.getCountryPrices(response);
  } catch (error) {
    console.log(error);
  }

  return data;
}

const SearchPriceByCountry = {
  getPricesByCountry,
};

module.exports = SearchPriceByCountry;
