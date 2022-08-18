import httpClient from '../core/http-client.js'
import 'dotenv/config'

async function getPricesByCountry (country) {
  const url = `${process.env.URL_SOURCE}${country || ''}/`
  const result = await httpClient.get(url)

  return result
}

const PriceRepository = {
  getPricesByCountry
}

export default PriceRepository
