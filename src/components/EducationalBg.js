import React from "react";
import "../styles/Fonts.css";
import "../styles/EducationalBg.css";

function EducationalBg() {
  return (
    <div className="education-bg">
      <h1>EDUCATIONAL BACKGROUND</h1>
      <form>
        <label htmlFor="school-name">School attended: </label>
        <input type="text" id="school-name" required></input>
        <label htmlFor="program-finished">Program: </label>
        <input type="text" id="program-finished" required></input>
        <label htmlFor="start-date">Date started: </label>
        <input type="date" id="start-date" required></input>
        <label htmlFor="end-date">Date graduated: </label>
        <input type="date" id="end-date" required></input>
      </form>
    </div>
  );
}

export default EducationalBg;
