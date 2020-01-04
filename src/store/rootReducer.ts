import { combineReducers } from 'redux';

import sanityProjects from './sanityProjects/reducers';
import sanityPosts from './sanityBlog/reducers';
import userHandler from './user/reducers';

const rootReducer = combineReducers({
  sanityProjects,
  sanityPosts,
  userHandler
});

export default rootReducer;
