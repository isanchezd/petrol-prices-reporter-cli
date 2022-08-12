async function getPricesByCountry(
  country,
  priceRepository,
  countryPricesProvider
) {
  let data = [];
  try {
    console.log(priceRepository);
    const response = await priceRepository.getPricesByCountry(country);
    data = countryPricesProvider.getCountryPrices(response);
  } catch (error) {
    console.log(error);
  }

  return data;
}

module.exports = { getPricesByCountry };
