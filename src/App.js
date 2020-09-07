import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./Components/Home";
import About from "./Components/About/About";
import Internships from "./Components/Internships";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume"

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/about"><About /></Route>
                  <Route path="/internships"><Internships /></Route>
                  <Route path="/projects"><Projects /></Route>
                  <Route path="/contact"><Contact /></Route>
                  <Route path="/resume"><Resume showName="false"/></Route>
                  <Route><Home /></Route>
              </Switch>
          </Router>
      </div>
    );
    }
}

export default App;
