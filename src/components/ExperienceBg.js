import React from "react";
import "../styles/Fonts.css";
import "../styles/ExperienceBg.css";
import { useState } from "react";

function ExperienceBg() {
  const [isShown, setIsShown] = useState(false);
  const showExperienceForm = (event) => {
    setIsShown(true);
  };
  const removeExperienceForm = (event) => {
    setIsShown(false);
  }
  return (
    <div className="experience-form">
      <h1>EXPERIENCE</h1>
      <ExperienceForm></ExperienceForm>
      {isShown && <ExperienceForm></ExperienceForm>}
      <div className="exp-btns">
        <button className="add-educ" onClick={showExperienceForm}>ADD EXPERIENCE</button>
        <button className="remove-educ" onClick={removeExperienceForm}>REMOVE EXPERIENCE</button>
      </div>
    </div>
  );
}

function ExperienceForm() {
  return (
    <form>
        <label htmlFor="company-name">Company name: </label>
        <input type="text" id="company-name" required></input>
        <label htmlFor="position">Position: </label>
        <input type="text" id="position" required></input>
        <label htmlFor="tasks">Location: </label>
        <input type="text" id="tasks" required></input>
        <label htmlFor="job-started">Started working: </label>
        <input type="date" id="job-started" required></input>
        <label htmlFor="job-ended">Ended working: </label>
        <input type="date" id="job-ended" required></input>
      </form>
  );
}

export default ExperienceBg;
