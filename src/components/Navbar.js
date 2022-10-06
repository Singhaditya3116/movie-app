import React from "react";
import {handleMovieSearch} from "../actions/index";
import {addMovieToList} from "../actions/index";

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state={
      searchText:""
    };
  }

  handleChange = (event) =>{
    this.setState({
      searchText:event.target.value
    });
  }

  handleSearch = () =>{
    const {searchText} = this.state;

    //we need to keep our UI and Logic part seperate thats why calling action to get data from API.
    this.props.dispatch(handleMovieSearch(searchText));
  }

  handleAddMovie = (movie) =>{
    const {dispatch} =this.props;
    dispatch(addMovieToList(movie))
  }

  render(){
    const {result : movie,showSearchResults} = this.props.search;
    
    return (
      <div className="nav">
        <div className="top">
          <input className="search-box" onChange={this.handleChange}></input>
          <button className="search-btn" onClick={this.handleSearch}>Search</button>
        </div>
        {showSearchResults &&
        <div className="bottom">
          <div className="left">
            <img src={movie.Poster} alt="Poster"></img>
          </div>
          <div className="right">
            <h4>{movie.Title}</h4>
            <button className="add-to-favourite" onClick={()=>this.handleAddMovie(movie)}>Add to Favourites</button>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default Navbar;
