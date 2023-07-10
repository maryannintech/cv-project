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
      expFormValues: [],
      showPreview: false,
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

  handleExpFormChange = (expForms) => {
    this.setState({ expFormValues: expForms });
  };

  handlePreviewToggle = () => {
    this.setState((prevState) => ({
      showPreview: !prevState.showPreview,
    }));
  };

  render() {
    return (
      <div>
        <Title title="ResuBuilder" tagline="Craft Your CV with Ease"></Title>
        <button className="preview-toggle" onClick={this.handlePreviewToggle}>
          {this.state.showPreview ? "Show Form" : "Show Preview"}
        </button>
        {this.state.showPreview && (
          <PreviewCv
            values={this.state.values}
            educFormValues={this.state.educFormValues}
          />
        )}
        <div className="body">
          {!this.state.showPreview && (
            <>
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
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
