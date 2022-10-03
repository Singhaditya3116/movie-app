import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
// import { render } from "@testing-library/react";
import {data} from "../data";
import {addMovies, setShowFavourites} from "../actions"


class App extends React.Component {
  
  componentDidMount(){
    // alert("hello");
    const {store} = this.props;
    //make an API call
    //Dispatch the action.

    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();
    })
    
    store.dispatch(addMovies(data));
    
    console.log("DID MOUNT STATE :",this.props.store.getState());
  }

  isMovieFavourite = (movie) =>{
    const { favourites } = this.props.store.getState().movies;

    const index = favourites.indexOf(movie);

    if(index === -1) //movie not found
    {
      return false;
    }
    return true; // movie found
  }

  onChangeTab(value)
  {
    this.props.store.dispatch(setShowFavourites(value));
  }

  render(){
    const {store} = this.props;
    console.log("Store in APP Comp :",store.getState());
    const {movies} = store.getState();
    const { list,favourites,showFavourites } = movies;
    
    const displayMovies = showFavourites ? favourites : list;
    return (
    
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? " " : "active-tabs"}`} onClick ={() => this.onChangeTab(false)}> Movies</div>
            <div className={`tab ${showFavourites ? "active-tabs" : " "}`} onClick ={() => this.onChangeTab(true)}> Favourite</div>
          </div>
          <div className="movie-list">
            {displayMovies.map((movie,index)=>{
                return <MovieCard 
                movie={movie} 
                key={index} 
                dispatch={store.dispatch} 
                isFavourite = {this.isMovieFavourite(movie)}
                />
            })
            }
          </div>
          {displayMovies.length === 0 ? <h5 className="no-movies">No Movies to Display!</h5> : null}
        </div>
      </div>
    );
  }
}

export default App;
