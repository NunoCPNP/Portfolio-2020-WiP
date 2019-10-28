/* eslint no-undef: 0 */
const API_URL = process.env.REACT_APP_API_URL
const API_TOKEN = process.env.REACT_APP_SANITY_TOKEN
const API_QUERY = `*[ _type == "projects" ]{
                    "id" : _id,
                    title,
                    description,
                    githubUrl,
                    projectUrl,
                    "imageUrl" : cover.asset->url
                    }`

const TRSLT_QUERY = encodeURIComponent(API_QUERY)

export const GET_PROJECTS = 'GET_PROJECTS'

export function getProjects () {
  return async function (dispatch) {
    const res = await fetch(
      `${API_URL}v1/data/query/production?query=${TRSLT_QUERY}`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
      }
    )
    const data = await res.json()
    return dispatch({
      type: 'GET_PROJECTS',
      data: data.result
    })
  }
}
