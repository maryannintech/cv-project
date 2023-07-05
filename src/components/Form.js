import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationalBg from "./EducationalBg";
import ExperienceBg from "./ExperienceBg";
import "../styles/Forms.css";


class Forms extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="body">
        <GeneralInfo></GeneralInfo>
        <EducationalBg></EducationalBg>
        <ExperienceBg></ExperienceBg>
      </div>
    );
  }
}

export default Forms;