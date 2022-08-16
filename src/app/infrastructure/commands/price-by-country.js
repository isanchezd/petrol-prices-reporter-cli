import SearchPriceByCountryUseCase from '../../business/search-price-by-country.js'
import Command from './command.js'

export default class PriceByCountryCommand extends Command {
  action (country) {
    SearchPriceByCountryUseCase.searchPricesByCountry(country).then(
      (response) => {
        console.log(response)
      }
    )
  }
}
