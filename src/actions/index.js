
//Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";

//Action creators
export function addMovies(movies){
  return {  /*action object*/
    type:ADD_MOVIES,
    movies:movies
  }
}

export function addFavourite(movie){
  return {
    type:ADD_FAVOURITE,
    movie:movie
  }
}

export function deleteFavourite(movie){
  return {
    type:DELETE_FAVOURITE,
    movie:movie
  }
}