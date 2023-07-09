import React from "react";
import "../styles/PreviewCv.css";
import "../styles/Fonts.css";
import { useState } from "react";
import GeneralInfo from "./GeneralInfo";

function PreviewCv() {
  const genInfo = {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phoneNumber: "",
  };

  const [values, setValues] = useState(genInfo);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="preview-cv">
      <GeneralInfo values={values} handleInputChange={handleInputChange}></GeneralInfo>
      <p className="educ-title">EDUCATIONAL BACKGROUND</p>
      <hr></hr>
      <div className="educBG">
        <p className="school">School: </p>
        <p className="position">Program:</p>
        <div className="school-dates">
          <p className="school-started">Date started: </p>
          <p className="school-graduated">Date graduated: </p>
        </div>
      </div>
      <p className="exp-title">EXPERIENCE</p>
      <hr></hr>
      <div className="expBG">
        <p className="company-name">Company: </p>
        <p className="position">Position: </p>
        <p className="location-company">Location: </p>
        <div className="company-dates">
          <p className="company-started">Started working: </p>
          <p className="company-ended">Ended working: </p>
        </div>
      </div>
    </div>
  );
}

export default PreviewCv;
