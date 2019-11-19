import { combineReducers } from "redux";

import sanityProjects from "./sanityProjects/reducers";
import sanityPosts from "./sanityBlog/reducers";

export enum EReduxActionTypes {
  GET_POSTS = "GET_POSTS",
  GET_PROJECTS = "GET_PROJECTS"
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

const rootReducer = combineReducers({ sanityProjects, sanityPosts });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
