import axios from 'axios';

const baseApiUrl = process.env.VUE_APP_API_BASE_URL

async function getImages(searchTerm, searchIndex = 1) {
  const url = `${baseApiUrl}?&searchTerm=${searchTerm}&index=${searchIndex}`
  return await getData(url);
}

async function getData(url) {
  const result = await axios.get(url)

  if (result.status != 200) {
    throw `Images API failed with code ${result.status}.`
  }

  return result.data.data
}

export { getImages };