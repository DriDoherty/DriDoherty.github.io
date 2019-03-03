import React, { Component } from 'react';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {

  render() {
    return (
      <div>

        <About/>
        <Skills/>
        <Projects/>
        <Footer />

      </div>
    );
  }
}

export default App;