import React from "react";
import "../styles/Fonts.css";
import "../styles/GeneralInfo.css";
import { useState } from "react";
import GenPreview from "./GenPreview";

function GeneralInfo() {
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
    <div className="gen-form">
      <h1>PERSONAL INFORMATION</h1>
      <form>
        <GenPreview
          email={values.email}
          mobile={values.phoneNumber}
          firstname={values.firstName}
          lastname={values.lastName}
          title={values.title}
        ></GenPreview>
        <div className="names">
          <label htmlFor="first-name">First Name: </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
            required
          ></input>
          <label htmlFor="last-name">Last Name: </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="title-input">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="contact">
          <label htmlFor="phoneNumber">Phone number: </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleInputChange}
            required
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            required
          ></input>
        </div>
      </form>
    </div>
  );
}

export default GeneralInfo;
