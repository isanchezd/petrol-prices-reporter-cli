import SearchPriceByCountryUseCase from '../../business/search-price-by-country.js'

const action = (country) => {
  SearchPriceByCountryUseCase.searchPricesByCountry(country).then(
    (response) => {
      console.log(response)
    }
  )
}

const CountryCommand = (() => {
  const name = 'country'
  const description = 'Get price by the country'
  const argumentType = '<string>'
  const argumentDescription = 'Country'

  return {
    name,
    description,
    argumentType,
    argumentDescription,
    action,
  }
})()

export default CountryCommand