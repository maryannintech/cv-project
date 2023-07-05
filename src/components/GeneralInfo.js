import React, { Component } from "react";
import "../styles/Fonts.css";
import "../styles/GeneralInfo.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>PERSONAL INFORMATION</h1>
        <form>
          <label htmlFor="first-name">First Name: </label>
          <div className="names">
            <input type="text" id="first-name"></input>
            <label htmlFor="last-name">Last Name: </label>
            <input type="text" id="last-name"></input>
          </div>
          <div className="title">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
