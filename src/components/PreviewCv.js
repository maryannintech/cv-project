import React from "react";
import "../styles/PreviewCv.css";
import "../styles/Fonts.css";
import GeneralInfo from "./GeneralInfo";

function PreviewCv() {
  return (
    <div className="preview-cv">
      <div className="genInfo">
        <div className="contacts">
          <p className="email">Email: professionalmaryann@gmail.com</p>
          <p className="phone-number">Mobile: 0123456789</p>
        </div>
        <p className="name">Miranda, Mary Ann</p>
        <p className="title">Senior Web Developer</p>
      </div>
      <p className="educ-title">EDUCATIONAL BACKGROUND</p>
      <hr></hr>
      <div className="educBG">
        <p className="school">School: Jose Rizal University</p>
        <p className="position">
          Program: Bachelor of Science in Information Technology (BSIT)
        </p>
        <div className="school-dates">
          <p className="school-started">Date started: 8/14/2023</p>
          <p className="school-graduated">Date graduated: 6/14/2027</p>
        </div>
      </div>
      <p className="exp-title">EXPERIENCE</p>
      <hr></hr>
      <div className="expBG">
        <p className="company-name">Company: Google</p>
        <p className="position">Position: Junior Frontend Web Developer</p>
        <p className="location-company">Location: Taguig</p>
        <div className="company-dates">
          <p className="company-started">Started working: 8/14/2027</p>
          <p className="company-ended">Ended working: 1/11/2030</p>
        </div>
      </div>
    </div>
  );
}

export default PreviewCv;
