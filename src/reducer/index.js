import {ADD_FAVOURITE, ADD_MOVIES,DELETE_FAVOURITE,SET_SHOW_FAVOURITES} from "../actions"


const initialMovieState = {
  list:[],
  favourites:[],
  showFavourites:false
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


