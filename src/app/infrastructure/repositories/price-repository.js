const HttpClient = require('../core/http-client');
require('dotenv').config();

async function getPricesByCountry(country) {
  const url = `${process.env.URL_SOURCE}${country ? country : ''}/`;
  const result = await HttpClient.get(url);
  const data = await result.data;

  return data;
}

module.exports = { getPricesByCountry };
