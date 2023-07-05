import React, { Component } from "react";
import Title from "./components/Title";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Title title="ResuBuilder" tagline="Craft Your CV with Ease"></Title>
        <GeneralInfo></GeneralInfo>
      </div>
    );
  }
}

export default App;
