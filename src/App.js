import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Forms from "./components/Form";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Title title="ResuBuilder" tagline="Craft Your CV with Ease"></Title>
        <Forms></Forms>
      </div>
    );
  }
}

export default App;
