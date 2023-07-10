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
      educFormValues: [],
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

  handleEducFormChange = (educForms) => {
    this.setState({ educFormValues: educForms });
  };

  render() {
    return (
      <div>
        <Title title="ResuBuilder" tagline="Craft Your CV with Ease"></Title>
        <div className="body">
          <div className="forms">
            <GeneralInfo
              values={this.state.values}
              handleInputChange={this.handleInputChange}
            />
            <EducationalBg
              educFormValues={this.state.educFormValues}
              onChange={this.handleEducFormChange}
            />
            <ExperienceBg />
          </div>
          <PreviewCv
            values={this.state.values}
            educFormValues={this.state.educFormValues}
          />
        </div>
      </div>
    );
  }
}

export default App;
