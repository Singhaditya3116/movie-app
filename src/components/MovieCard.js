import React from "react";

class MovieCard extends React.Component {
  render(){
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movieImage" src="https://bd.gaadicdn.com/processedimages/bajaj/bajaj-avenger-street-150/640X309/v_avenger-street-1501519631136.jpg"></img>
        </div>
        <div className="right">
          <div className="details">
            <h3>Title</h3>
            <div>Description</div>
          </div>
          <div className="ratings">
            <div>Rating</div>
            <div>Favourite btn</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
