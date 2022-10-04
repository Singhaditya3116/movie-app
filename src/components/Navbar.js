import React from "react";
import {handleMovieSearch} from "../actions/index"

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state={
      showSearchResults:true,
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

  render(){
    return (
      <div className="nav">
        <div className="top">
          <input className="search-box" onChange={this.handleChange}></input>
          <button className="search-btn" onClick={this.handleSearch}>Search</button>
        </div>
        <div className="bottom">

        </div>
      </div>
    );
  }
}

export default Navbar;
