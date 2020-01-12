/* eslint no-undef: 0 */
const sanityClient = require("@sanity/client");

export const GET_PROJECTS = "GET_PROJECTS";

const client = sanityClient({
  projectId: "6wqa4898",
  dataset: "production",
  token: "",
  useCdn: true
});

const query = `*[ _type == "projects" ]{
                    "id" : _id,
                    title,
                    description,
                    githubUrl,
                    projectUrl,
                    "imageUrl" : cover.asset->url
                    }`;

const params = {};

export function getProjects() {
  return async function(dispatch: any) {
    const response = await client.fetch(query, params);

    return dispatch({
      type: "GET_PROJECTS",
      data: response
    });
  };
}
