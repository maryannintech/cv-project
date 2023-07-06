import React from "react";
import "../styles/Fonts.css";
import "../styles/EducationalBg.css";
import { useState } from "react";

function EducationalBg() {
  const [isShown, setIsShown] = useState(false);
  const showEducForm = (event) => {
    setIsShown(true);
  };
  const removeEducForm = (event) => {
    setIsShown(false);
  }
  return (
    <div className="education-bg">
      <h1>EDUCATIONAL BACKGROUND</h1>
      <EducForm></EducForm>
      {isShown && <EducForm></EducForm>}
      <div className="educ-btns">
        <button className="add-educ" onClick={showEducForm}>ADD EDUCATION</button>
        <button className="remove-educ" onClick={removeEducForm}>REMOVE EDUCATION</button>
      </div>
    </div>
  );
}

function EducForm() {
  return (
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
  );
}

export default EducationalBg;
