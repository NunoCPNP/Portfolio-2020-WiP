import { sanityBlogActionTypes } from './types';

const initialState = {
  posts: []
};

export default function(state = initialState, action: any) {
  const { type, data } = action;
  switch (type) {
    case sanityBlogActionTypes.GET_POSTS:
      return {
        ...state,
        posts: data
      };
    default:
      return state;
  }
}
