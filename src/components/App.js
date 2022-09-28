import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
// import { render } from "@testing-library/react";
import {data} from "../data";


class App extends React.Component {
  
  componentDidMount(){
    const {store} = this.props;
    //make an API call
    //Dispatch the action.

    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();
    })
    
    store.dispatch({
      type:"ADD_MOVIES",
      movie:data
    })
    
    console.log("DID MOUNT STATE :",this.props.store.getState());
  }

  render(){
    const {store} = this.props;
    console.log("App store :",store);
    const movies = store.getState();
    return (
    
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab"> Movies</div>
            <div className="tab"> Favourite</div>
          </div>
          <div className="movie-list">
            {movies.map((movie,index)=>{
                return <MovieCard movie={movie} key={index}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
