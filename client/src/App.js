//import all of our components and react libraries that we will use
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
 //use router to set routes to our page components and render them when clicked on 
function App() {
  return (
    <Router>
      <div>
        {/* render nav component */}
        <Nav />
        {/* using router and switch render component user clicks on */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
