import React from "react";
import "../styles/PreviewCv.css";
import "../styles/Fonts.css";

function PreviewCv({ values }) {
  if (!values) {
    // Handle the case when values is undefined or falsy
    return null;
  }
  return (
    <div className="preview-cv">
      <div className="genInfo">
        <div className="contacts">
          <p className="email">Email: {values.email}</p>
          <p className="phone-number">Mobile: {values.phoneNumber} </p>
        </div>
        <p className="name">
          {values.lastName}, {values.firstName}
        </p>
        <p className="title">{values.title}</p>
      </div>
      <p className="educ-title">EDUCATIONAL BACKGROUND</p>
      <hr></hr>
      <div className="educBG">
        <p className="school">School: {values.school}</p>
        <p className="position">Program: {values.program}</p>
        <div className="school-dates">
          <p className="school-started">Date started:{values.started} </p>
          <p className="school-graduated">Date graduated: {values.graduated}</p>
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
