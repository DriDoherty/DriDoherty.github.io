import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>

          <Header first_init="A" />

            <Container>
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </Container>

            <Footer />

        </div>
      </Router>
    );
  }
}

export default App;