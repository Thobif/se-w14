import React from "react";
import "./App.css";

// import Home from "./Home"
import About from "./About";
import Contact from "./Contact";
// import {User} from "./User";
function App(){
  return(
    <div className="App">
      <h2>Welcome to ReactJS</h2>
      {/* <Home/> */}
      <About name= "Peter Parker"/>
    <Contact  />
      {/* <User/> */}
    </div>
  );
};
export default App;