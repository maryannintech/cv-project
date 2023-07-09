import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Forms from "./components/Form";
import PreviewCv from "./components/PreviewCv";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Title title="ResuBuilder" tagline="Craft Your CV with Ease"></Title>
        <Forms></Forms>
        <PreviewCv></PreviewCv>
      </div>
    );
  }
}

export default App;
