import React from "react";
import "../styles/Fonts.css";
import "../styles/EducationalBg.css";
import { useState } from "react";
import PreviewCv from "./PreviewCv";

function EducationalBg() {
  const [educForms, setEducForms] = useState([]);

  const addEducForm = () => {
    setEducForms([...educForms, <EducForm key={educForms.length} />]);
  };

  const removeEducForm = () => {
    setEducForms(educForms.slice(0, -1));
  };

  const educBG = {
    school: "",
    program: "",
    started: "",
    graduated: "",
  };

  const [educValues, setEducBG] = useState(educBG);

  const [schools, setSchools] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducBG({
      ...educValues,
      [name]: value,
    });
  };

  const onSubmitEduc = (e) => {
    e.preventDefault();
    setSchools([...schools, educValues]);
    setEducBG(educBG);
    console.log(schools);
  };

  function EducForm({ handleChange, onSubmitEduc }) {
    return (
      <form onSubmit={onSubmitEduc}>
        <label htmlFor="school-name">School attended: </label>
        <input
          type="text"
          id="school-name"
          name="school"
          required
        ></input>
        <label htmlFor="program-finished">Program: </label>
        <input
          type="text"
          id="program-finished"
          name="program"
          value={educValues.program}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="start-date">Date started: </label>
        <input
          type="date"
          id="start-date"
          name="started"
          value={educValues.program}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="end-date">Date graduated: </label>
        <input
          type="date"
          id="end-date"
          name="graduated"
          value={educValues.started}
          onChange={handleChange}
          required
        ></input>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
  return (
    <div className="education-bg">
      <h1>EDUCATIONAL BACKGROUND</h1>
      {educForms.map((educForm) => educForm)}
      <EducForm handleChange={handleChange} onSubmitEduc={onSubmitEduc} />
      <div className="educ-btns">
        <button className="add-educ" onClick={addEducForm}>
          ADD EDUCATION
        </button>
        <button className="remove-educ" onClick={removeEducForm}>
          REMOVE EDUCATION
        </button>
      </div>
    </div>
  );
}

export default EducationalBg;
