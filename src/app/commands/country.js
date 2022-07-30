const SearchPriceByCountry = require('../business/search-price-by-country');

const action = (str, options) => {
  SearchPriceByCountry.getPricesByCountry(str).then((response) => {
    console.log(response);
  });
};

const countryCommand = {
  name: 'prices-by-country',
  description: 'Get price by the country',
  argumentType: '<string>',
  argumentDescription: 'Country',
  action,
};

module.exports = countryCommand;
