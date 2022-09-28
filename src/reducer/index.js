import {ADD_MOVIES} from "../actions"


const initialMovieState = {
  list:[],
  favourite:[]
}

export default function movies(state =initialMovieState,action)
{
  // console.log("Action :",action);
  if(action.type === ADD_MOVIES)
  {
    return {
      ...state,
      list:action.movie
    }
  }
  return state;
}

