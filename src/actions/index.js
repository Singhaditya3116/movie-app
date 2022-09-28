// {
//   type:"ADD_MOVIES",
// }

//Action types
export const ADD_MOVIES = "ADD_MOVIES";  

//Action creators
export function addMovies(movie){
  return {
    type:ADD_MOVIES,
    movie:movie
  }
}