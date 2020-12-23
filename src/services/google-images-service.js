import axios from 'axios'

const apiKey = "AIzaSyACxe7LArB62_zVcyCXZrEt9xEdbx_LbfM"
const cx = "6fa4d5a5c965291d0"

async function getImages(searchTerm, startIndex = 1) {
  const url = `https://customsearch.googleapis.com/customsearch/v1?cx=${cx}&q=${searchTerm}&key=${apiKey}&start=${startIndex}&filter=1&imgColorType=trans&searchType=image`
  const result = await axios.get(url)

  if (result.status != 200) {
    throw `Google API failed with code ${result.status}.`
  }

  return transformResult(result.data)
}

function transformResult(result) {

  let images = []

  result.items.forEach(item => {
    images.push({
      title: item.title,
      imageUrl: item.link,
      thumbnailUrl: item.image.thumbnailLink,
      fileFormat: item.fileFormat,
    })
  });

  const returnObj = {
    images,
    nextStartIndex: result.queries.nextPage[0].startIndex
  }

  return returnObj;
}

export { getImages };