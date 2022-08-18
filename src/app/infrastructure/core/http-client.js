import fetch from 'node-fetch'

async function get (url) {
  let data

  try {
    const response = await fetch(url)
    const body = await response.text()

    data = body
  } catch(err) {
      console.error('Error occurred while fetching data')
  }

  return data
}

const HttpClient = {
  get
}

export default HttpClient
