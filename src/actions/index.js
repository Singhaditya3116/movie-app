
//Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

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

export function setShowFavourites(value){
  return{
    type:SET_SHOW_FAVOURITES,
    value:value
  }
}

export function addMovieSearchResult(movie){
  return {
    type:ADD_SEARCH_RESULT,
    movie:movie
  }
}

export function addMovieToList(movie){
  return {
    type:ADD_MOVIE_TO_LIST,
    movie:movie
  }
}

export function handleMovieSearch(movie){
  const url =`https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

  return function(dispatch)
  {
    fetch(url)
      .then(response => response.json())
      .then(movie => {
        console.log("movie :",movie);
        //dispatch an action
        // dispatch({type:"ADD_SEARCH_RESULT",movie});
        dispatch(addMovieSearchResult(movie));
      })
  }
}