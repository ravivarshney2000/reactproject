import React from "react";
import "./css/bootstrap.min.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home  from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
const App=()=> {
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/service" component={Services}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/" />
     </Switch>
    </>
  )
}
export default App;