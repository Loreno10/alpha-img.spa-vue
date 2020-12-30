import axios from 'axios';

const apiKey = process.env.VUE_APP_GOOGLE_API_KEY
const cx = process.env.VUE_APP_GOOGLE_API_CX
const baseApiUrl = process.env.VUE_APP_GOOGLE_API_BASE_URL

async function getImages(searchTerm, searchIndex = 1) {
  const commonUrl = `${baseApiUrl}?cx=${cx}&q=${searchTerm}&key=${apiKey}&filter=1&imgColorType=trans&searchType=image`
  const apiIndexes = getGoogleApiIndexes(searchIndex)
  const url1 = `${commonUrl}&start=${apiIndexes[0]}`
  const url2 = `${commonUrl}&start=${apiIndexes[1]}`

  const results = await Promise.all([getData(url1), getData(url2)])
  return results.flat().sort((a, b) => (a.width < b.width) ? 1 : -1)

  // For testing purposes
  
  // const fakeUrl = "http://placekitten.com/300/200"
  // return [{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},
  //   {thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},
  //   {thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},
  //   {thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl}]
}

function getGoogleApiIndexes(searchIndex) {
  return [(searchIndex - 1) * 20 + 1, (searchIndex - 1) * 20 + 11]
}

async function getData(url) {
  const result = await axios.get(url)

  if (result.status != 200) {
    throw `Google API failed with code ${result.status}.`
  }

  return transformResult(result.data)
}

function transformResult(result) {

  let images = []

  console.log(result)

  result.items.forEach(item => {
    images.push({
      title: item.title,
      imageUrl: item.link,
      thumbnailUrl: item.image.thumbnailLink,
      fileFormat: item.fileFormat,
      height: item.image.height,
      width: item.image.width
    })
  })

  console.log(images)

  return images
}

export { getImages };