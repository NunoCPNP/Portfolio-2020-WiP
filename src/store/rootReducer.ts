import { combineReducers } from 'redux';

import projects from './projects/reducers';
import sanityPosts from './sanityBlog/reducers';
import userHandler from './user/reducers';

const rootReducer = combineReducers({
  projects,
  sanityPosts,
  userHandler
});

export default rootReducer;
