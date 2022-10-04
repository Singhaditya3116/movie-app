import { combineReducers } from "redux";
import {ADD_FAVOURITE, ADD_MOVIES,DELETE_FAVOURITE,SET_SHOW_FAVOURITES} from "../actions"


const initialMovieState = {
  list:[],
  favourites:[],
  showFavourites:false
}
//movie Reducer
export function movies(state = initialMovieState,action) //Pure Function
{
  // console.log("Action :",action);
  /*
  if(action.type === ADD_MOVIES)
  {
    return { //we can't change state so always return new state.
      ...state,
      list:action.movies
    }
  }
  return state;
  */
  switch(action.type)
  {
    case ADD_MOVIES:
      return {
        ...state,
        list:action.movies
      }
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites:[...state.favourites,action.movie]
      }
    case DELETE_FAVOURITE:
      //const index = state.favourites.indexOf(action.movie);
      //state.favourites.splice(index,1);
      const filteredArray = state.favourites.filter((element)=>{
        return element.Title !== action.movie.Title;
      })
      
      return {
        ...state,
        favourites:filteredArray
      }

    case SET_SHOW_FAVOURITES:
      return{
        ...state,
        showFavourites:action.value
      }
    default:
      return state;
  }
}


const initialSearchState = {
  result:{}
};
//search Reducer
export function search(state=initialSearchState,action){
  return state;
}


/*const initialRootState={
  movies:initialMovieState,
  search:initialSearchState
}
//root Reducer
export default function rootReducer(state = initialRootState,action){
  return {
    movies: movies(state.movies,action),
    search:search(state.search,action)
  }

}
*/

export default combineReducers({
  movies:movies,
  search:search
})