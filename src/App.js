import React, { Component } from "react";
import Title from "./components/Title";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Title title="ResuBuilder" tagline="Craft Your CV with Ease"></Title>
      </div>
    );
  }
}

export default App;
