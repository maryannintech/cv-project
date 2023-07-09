import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import PreviewCv from "./components/PreviewCv";
import GeneralInfo from "./components/GeneralInfo";
import EducationalBg from "./components/EducationalBg";
import ExperienceBg from "./components/ExperienceBg";

class App extends Component {
  constructor() {
    super();
    this.genInfo = {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      phoneNumber: "",
    };

    this.state = {
      values: this.genInfo,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };
  render() {
    return (
      <div>
        <Title title="ResuBuilder" tagline="Craft Your CV with Ease"></Title>
        <div className="forms">
          <GeneralInfo
            values={this.state.values}
            handleInputChange={this.handleInputChange}
          ></GeneralInfo>
          <EducationalBg></EducationalBg>
          <ExperienceBg></ExperienceBg>
        </div>
        <PreviewCv values={this.state.values}></PreviewCv>
      </div>
    );
  }
}

export default App;
