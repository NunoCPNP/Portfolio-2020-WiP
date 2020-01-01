/* eslint no-undef: 0 */
const sanityClient = require('@sanity/client')

export const GET_POSTS = 'GET_POSTS'

const client = sanityClient({
  projectId: '6wqa4898',
  dataset: 'production',
  token: '',
  useCdn: true
})

const query = `*[ _type == "post" ]{
                  "id" : _id,
                  title,
                  slug,
                  author,
                  categories,
                  body
                  }`

const params = {}

export function getPosts () {
  return async function (dispatch) {
    const response = await client.fetch(query, params)

    return dispatch({
      type: 'GET_POSTS',
      data: response
    })
  }
}
