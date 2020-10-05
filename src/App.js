/*import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

//how we can create route
//the Route pass inbuilt props such as history each component it renders
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/posts/:id" exact component={Post} />
          <Route path="/" render={() => <div>404 NOT FOUND!</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

const Post = ({ match }) => {
  return <div>rendering post{match.params.id}</div>;
};*/

import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import About from "./component/About";
import Fixtures from "./component/Fixtures";
import MatchDetail from "./component/MatchDetail";
import Nav from "./component/Nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/about" exact component={About} />
            <Route path="/fixtures" exact component={Fixtures} />
            <Route path="/matchDetail/:id" exact component={MatchDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const Home = () => {
  //<Route path="*" render={() => <h1>404 NOT FOUND</h1>} />
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
