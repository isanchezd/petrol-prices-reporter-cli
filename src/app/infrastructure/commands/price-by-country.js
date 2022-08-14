import { searchPricesByCountry } from '../../business/search-price-by-country.js';

const action = (country) => {
  searchPricesByCountry(country).then((response) => {
    console.log(response);
  });
};

export const pricesByCountryCommand = {
  name: 'prices-by-country',
  description: 'Get price by the country',
  argumentType: '<string>',
  argumentDescription: 'Country',
  action,
};
