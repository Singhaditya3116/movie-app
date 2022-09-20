import React from "react";

class MovieCard extends React.Component {
  render(){
    console.log(this.props)
    const {movie} = this.props;
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
            <button className="favourite-btn">Favourite btn</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
