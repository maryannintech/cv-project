import React, { Component } from "react";
import "../styles/Fonts.css";
import "../styles/GeneralInfo.css";

class GeneralInfo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="gen-form">
        <h1>PERSONAL INFORMATION</h1>
        <form>
          <label htmlFor="first-name">First Name: </label>
          <div className="names">
            <input type="text" id="first-name" required></input>
            <label htmlFor="last-name">Last Name: </label>
            <input type="text" id="last-name" required></input>
          </div>
          <div className="title-input">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" required></input>
          </div>
          <div className="contact">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" required></input>
            <label htmlFor="number">Phone number: </label>
            <input type="tel" id="number" required></input>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
