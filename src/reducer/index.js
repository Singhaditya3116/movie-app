import {ADD_FAVOURITE, ADD_MOVIES} from "../actions"


const initialMovieState = {
  list:[],
  favourites:[]
}

export default function movies(state = initialMovieState,action)
{
  // console.log("Action :",action);
  /*
  if(action.type === ADD_MOVIES)
  {
    return {
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
    default:
      return state;
  }
}


