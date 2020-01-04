import { sanityBlogActionTypes } from './types';

/* eslint no-undef: 0 */
const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '6wqa4898',
  dataset: 'production',
  token: '',
  useCdn: true
});

const query = `*[ _type == "post" ]{
                  "id" : _id,
                  title,
                  slug,
                  author,
                  categories,
                  body
                  }`;

const params = {};

export function getPosts() {
  return async function(dispatch: any) {
    const response = await client.fetch(query, params);

    return dispatch({
      type: sanityBlogActionTypes.GET_POSTS,
      data: response
    });
  };
}
