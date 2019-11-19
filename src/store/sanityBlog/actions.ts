import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { EReduxActionTypes, IReduxBaseAction } from "../rootReducer";
import {--- } from "./reducers";

const API_URL = process.env.REACT_APP_SANITY_API_URL;
const API_TOKEN = process.env.REACT_APP_SANITY_TOKEN;
const API_QUERY = `*[ _type == "post" ]{
                  "id" : _id,
                  title,
                  slug,
                  author,
                  categories,
                  body
                  }`;

const TRSLT_QUERY = encodeURIComponent(API_QUERY);

export interface IReduxGetPostsAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_POSTS;
  data: ---[];
}

export function getPosts(): ThunkAction<
  Promise<IReduxGetPostsAction>,
  IReduxPostsState,
  undefined,
  IReduxGetPostsAction
> {
  return async (dispatch: ThunkDispatch<IReduxMoviesState, undefined, IReduxGetMoviesAction>) => {
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    );
    const movies = await res.json();

    return dispatch({
      type: EReduxActionTypes.GET_MOVIES,
      data: movies.results
    });
  };
}

export function getPosts() {
  return async function(dispatch) {
    const res = await fetch(`${API_URL}production?query=${TRSLT_QUERY}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    });
    const data = await res.json();
    return dispatch({
      type: "GET_POSTS",
      data: data.result
    });
  };
}
