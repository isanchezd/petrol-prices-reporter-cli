const HttpHandler = require('../core/http-handler');
require('dotenv').config();

async function getPricesByCountry(country) {
  const url = `${process.env.URL_SOURCE}${country ? country : ''}/`;
  const result = await HttpHandler.get(url);
  const data = await result.data;

  return data;
}

const PriceRepository = {
  getPricesByCountry,
};

module.exports = PriceRepository;
