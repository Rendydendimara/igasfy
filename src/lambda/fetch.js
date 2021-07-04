import axios from "axios"
import config from "../../config"

exports.handler = function (event, context, callback) {
  const apiRoot = "https://api.unsplash.com"
  const accessKey = process.env.ACCESS_KEY || config.accessKey
  console.log('event.queryStringParameters', event.queryStringParameters)
  // const imageEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${10}&collections='3816141,1154337,1254279'`
  const imageEndpoint = event.queryStringParameters.topic ? event.queryStringParameters.topic === 'random' ? `${apiRoot}/photos/random?client_id=${accessKey}&count=10` : `${apiRoot}/topics/${event.queryStringParameters.topic}/photos?client_id=${accessKey}&page=${event.queryStringParameters.page}` : `${apiRoot}/topics/${event.queryStringParameters.topic}/photos?client_id=${accessKey}&page=${event.queryStringParameters.page}`

  console.log('imageEndpoint', imageEndpoint)
  axios.get(imageEndpoint).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data,
      }),
    })
  })
}