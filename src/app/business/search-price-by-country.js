import priceRepository from '../infrastructure/repositories/price-repository.js'
import countryPricesService from '../infrastructure/services/country-prices-service.js'

async function searchPricesByCountry (country) {
  let data = []
  try {
    const response = await priceRepository.getPricesByCountry(country)
    data = countryPricesService.getCountryPrices(response)
  } catch (error) {
    console.log(error)
  }

  return data
}

const SearchPriceByCountryUseCase = {
  searchPricesByCountry
}

export default SearchPriceByCountryUseCase
