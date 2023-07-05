import React, { Component } from "react";
import Title from "./components/Title";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <Title title="ResuBuilder" tagline="Craft Your CV with Ease"></Title>
    );
  }
}

export default App;
