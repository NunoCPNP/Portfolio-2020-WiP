import { GET_POSTS } from './actions';

const initialState = {
  posts: []
}

export default function (state = initialState, action) {
  const { type, data } = action
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: data
      }
    default:
      return state
  }
}
