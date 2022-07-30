const axios = require('axios');

async function get(url) {
  const response = await axios(url).catch((err) => console.log(err));

  if (response.status !== 200) {
    console.log('Error occurred while fetching data');
    return;
  }

  return response;
}

const HttpHandler = {
  get,
};

module.exports = HttpHandler;
