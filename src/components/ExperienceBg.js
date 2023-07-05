import React, { Component } from "react";
import "../styles/Fonts.css";
import "../styles/ExperienceBg.css";

class ExperienceBg extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div className="experience-form">
      <h1>EXPERIENCE</h1>
        <form>
            <label htmlFor="company-name">Company name: </label>
            <input type="text" id="company-name" required></input>
            <label htmlFor="position">Position: </label>
            <input type="text" id="position" required></input>
            <label htmlFor="tasks">Main tasks: </label>
            <input type="text" id="tasks" required></input>
            <label htmlFor="job-started">Started working: </label>
            <input type="date" id="job-started" required></input>
            <label htmlFor="job-ended">Ended working: </label>
            <input type="date" id="job-ended" required></input>
        </form>
     </div>
    );
  }
}

export default ExperienceBg;