import searchPricesByCountryBusiness from '../../business/search-price-by-country.js'

const name = 'prices-by-country'

const description = 'Get price by the country'

const argumentType = '<string>'

const argumentDescription = 'Country'

const action = (country) => {
  searchPricesByCountryBusiness
    .searchPricesByCountry(country)
    .then((response) => {
      console.log(response)
    })
}

export default {
  name,
  description,
  argumentType,
  argumentDescription,
  action
}
