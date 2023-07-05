import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationalBg from "./EducationalBg";
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
      </div>
    );
  }
}

export default Forms;