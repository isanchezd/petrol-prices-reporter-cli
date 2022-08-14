import { getPricesByCountry } from '../infrastructure/repositories/price-repository.js';
import { getCountryPrices } from '../infrastructure/providers/country-prices-provider.js';

export async function searchPricesByCountry(country) {
  let data = [];
  try {
    const response = await getPricesByCountry(country);
    data = getCountryPrices(response);
  } catch (error) {
    console.log(error);
  }

  return data;
}
