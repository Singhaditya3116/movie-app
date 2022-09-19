import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab"> Movie</div>
          <div className="tab"> Favourite</div>
        </div>
        <div className="movie-list">
          <MovieCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
