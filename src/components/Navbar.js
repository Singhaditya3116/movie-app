import React from "react";

class Navbar extends React.Component {
  render(){
    return (
      <div className="nav">
        <input className="search-box"></input>
        <button className="search-btn">Search</button>
      </div>
    );
  }
}

export default Navbar;
