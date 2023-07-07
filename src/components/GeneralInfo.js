import React from "react";
import "../styles/Fonts.css";
import "../styles/GeneralInfo.css";
import {useState} from 'react';

function GeneralInfo() {
  const genInfo = {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phoneNumber: "",
  };

  const [values, setValues] = useState(genInfo);

  return (
    <div className="gen-form">
      <h1>PERSONAL INFORMATION</h1>
      <form>
        <div className="names">
          <label htmlFor="first-name">First Name: </label>
          <input type="text" id="first-name" name="firstName" value={values.firstName} required></input>
          <label htmlFor="last-name">Last Name: </label>
          <input type="text" id="last-name" name="lastName" value={values.lastNameName} required></input>
        </div>
        <div className="title-input">
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" value={values.title} required></input>
        </div>
        <div className="contact">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" value={values.email} required></input>
          <label htmlFor="number">Phone number: </label>
          <input type="tel" id="number" name="number" value={values.phoneNumber} required ></input>
        </div>
      </form>
    </div>
  );
}

export default GeneralInfo;
