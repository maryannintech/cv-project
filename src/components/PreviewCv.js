import React from "react";
import "../styles/PreviewCv.css";
import "../styles/Fonts.css";

function PreviewCv({ values, educFormValues, expFormValues }) {
  if (!values || !educFormValues || !expFormValues) {
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
        {educFormValues.map((educForm, index) => (
          <div key={index} className="education-item">
            <p className="school">School: {educForm.school}</p>
            <p className="program">Program: {educForm.program}</p>
            <div className="school-dates">
              <p className="school-started">
                Date started: {educForm.started} &nbsp;
              </p>
              <p className="school-graduated">
                Date graduated: {educForm.graduated}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="exp-title">EXPERIENCE</p>
      <hr></hr>
      <div className="expBG">
        {expFormValues.map((expForm, index) => (
          <div key={index} className="exp-item">
            <p className="company-name">Company: {expForm.companyName}</p>
            <p className="position">Position: {expForm.position} </p>
            <p className="tasks">Tasks: {expForm.tasks}</p>
            <div className="company-dates">
              <p className="company-started">
                Started working: {expForm.started} &nbsp;
              </p>
              <p className="company-ended">Ended working: {expForm.ended}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviewCv;
