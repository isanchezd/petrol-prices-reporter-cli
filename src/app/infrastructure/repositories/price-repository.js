import { get } from '../core/http-client.js';
import 'dotenv/config';

export async function getPricesByCountry(country) {
  const url = `${process.env.URL_SOURCE}${country ? country : ''}/`;
  const result = await get(url);
  const data = await result.data;

  return data;
}
