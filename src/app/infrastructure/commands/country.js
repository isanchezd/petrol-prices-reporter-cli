const SearchPriceByCountry = require('../../business/search-price-by-country');
const CountryPricesProvider = require('../providers/country-prices-provider');
const PriceRepository = require('../repositories/price-repository');

const action = (country) => {
  SearchPriceByCountry.getPricesByCountry(
    country,
    PriceRepository,
    CountryPricesProvider
  ).then((response) => {
    console.log(response);
  });
};

const CountryCommand = {
  name: 'prices-by-country',
  description: 'Get price by the country',
  argumentType: '<string>',
  argumentDescription: 'Country',
  action,
};

module.exports = CountryCommand;
