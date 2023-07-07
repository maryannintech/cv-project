import React from "react";
import "../styles/PreviewCv.css";
import "../styles/Fonts.css";

function PreviewCv() {
  let genInfo = {
    firstname: "",
    lastname: "",
    title: "",
    email: "",
    phonenumber: "",
  };
  return (
    <div className="preview-cv">
      <div className="genInfo">
        <p className="email">Email: professionalmaryann@gmail.com</p>
        <p className="phone-number">Mobile: 0123456789</p>
        <p className="name">Miranda, Mary Ann</p>
        <p className="title">Senior Web Developer</p>
      </div>
      <p className="educ-title">EDUCATIONAL BACKGROUND</p>
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
      <div className="expBG"></div>
    </div>
  );
}

export default PreviewCv;
