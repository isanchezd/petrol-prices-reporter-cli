import httpClient from '../core/http-client.js'
import 'dotenv/config'

async function getPricesByCountry (country) {
  const url = `${process.env.URL_SOURCE}${country || ''}/`
  const result = await httpClient.get(url)
  const data = await result.data

  return data
}

export default {
  getPricesByCountry
}
