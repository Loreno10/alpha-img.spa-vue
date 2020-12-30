import axios from 'axios';

const apiKey = process.env.VUE_APP_GOOGLE_API_KEY
const cx = process.env.VUE_APP_GOOGLE_API_CX
const baseApiUrl = process.env.VUE_APP_GOOGLE_API_BASE_URL

async function getImages(searchTerm, searchIndex = 1) {
  const urls = getApiUrls(searchIndex, searchTerm)

  const results = (await Promise.all([getData(urls[0]), getData(urls[1])])).flat()
  return removeNonPngImages(results).sort((a, b) => (a.width < b.width) ? 1 : -1)

  // For testing purposes
  
  // const fakeUrl = "http://placekitten.com/300/200"
  // return [{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},
  //   {thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},
  //   {thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},
  //   {thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl},{thumbnailUrl: fakeUrl}]
}

function getApiUrls(searchIndex, searchTerm) {
  const commonUrl = `${baseApiUrl}?cx=${cx}&q=${searchTerm}&key=${apiKey}&filter=1&imgColorType=trans&searchType=image`

  const index1 = (searchIndex - 1) * 20 + 1
  const index2 = (searchIndex - 1) * 20 + 11

  const url1 = `${commonUrl}&start=${index1}`
  const url2 = `${commonUrl}&start=${index2}`

  return [url1, url2]
}

function removeNonPngImages(images) {
  return images.filter(n => n.imageUrl.endsWith(".png") || n.imageUrl.endsWith(".PNG"))
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