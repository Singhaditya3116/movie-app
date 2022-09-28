import React from "react";
import {addFavourite} from "../actions"

class MovieCard extends React.Component {

  handleFavouriteClick = () =>{
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
    // this.forceUpdate();
  }

  handleUnFavouriteClick = () =>{
    
  }

  render(){
    //console.log(this.props)
    const {movie ,isFavourite} = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movieImage" src={movie.Poster}></img>
        </div>
        <div className="right">
          <div className="details">
            <h3>{movie.Title}</h3>
            <div>{movie.Plot}</div>
          </div>
          <div className="ratings">
            <div>{movie.imdbRating}</div>
            {
              isFavourite 
              ?
              <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite btn</button>
              :
              <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite btn</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
