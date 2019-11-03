import { combineReducers } from "redux";

import sanityProjects from "./sanityProjects/reducers";
import sanityPosts from "./sanityBlog/reducers";

const rootReducer = combineReducers({ sanityProjects, sanityPosts });

export default rootReducer;
