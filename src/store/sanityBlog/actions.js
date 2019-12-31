/* eslint no-undef: 0 */
const API_URL = process.env.REACT_APP_SANITY_API_URL
const API_TOKEN = process.env.REACT_APP_SANITY_TOKEN
const API_QUERY = `*[ _type == "post" ]{
                  "id" : _id,
                  title,
                  slug,
                  author,
                  categories,
                  body
                  }`

const TRSLT_QUERY = encodeURIComponent(API_QUERY)

export const GET_POSTS = 'GET_POSTS'

export function getPosts () {
  return async function (dispatch) {
    const res = await fetch(`${API_URL}production?query=${TRSLT_QUERY}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    })
    const data = await res.json()
    return dispatch({
      type: 'GET_POSTS',
      data: data.result
    })
  }
}
