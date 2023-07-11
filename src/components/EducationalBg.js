import React, { useState, useRef, useEffect } from "react";
import "../styles/Fonts.css";
import "../styles/EducationalBg.css";

function EducationalBg({ onChange }) {
  const [educForms, setEducForms] = useState([]);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Create refs for input fields dynamically based on the educForms length
    inputRefs.current = Array(educForms.length)
      .fill()
      .map((_, i) => inputRefs.current[i] || React.createRef());
  }, [educForms.length]);

  const addEducForm = () => {
    const updatedForms = [
      ...educForms,
      {
        school: "",
        program: "",
        started: "",
        graduated: "",
      },
    ];
    setEducForms(updatedForms);
    onChange(updatedForms);
  };

  const removeEducForm = () => {
    const updatedForms = educForms.slice(0, -1);
    setEducForms(updatedForms);
    onChange(updatedForms);
  };

  const handleFormChange = (index, e) => {
    const { name, value } = e.target;
    const updatedForms = educForms.map((form, i) => {
      if (i === index) {
        return {
          ...form,
          [name]: value,
        };
      }
      return form;
    });
    setEducForms(updatedForms);
    onChange(updatedForms);
  };

  return (
    <div className="education-bg">
      <h1>EDUCATIONAL BACKGROUND</h1>
      {educForms.map((_, index) => (
        <form key={index}>
          <label htmlFor={`school${index}`}>School attended: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            id={`school${index}`}
            name="school"
            required
            value={educForms[index].school}
            onChange={(e) => handleFormChange(index, e)}
          ></input>
          <label htmlFor={`program${index}`}>Program: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            id={`program${index}`}
            name="program"
            required
            value={educForms[index].program}
            onChange={(e) => handleFormChange(index, e)}
          ></input>
          <label htmlFor={`started${index}`}>Date started: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="date"
            id={`started${index}`}
            name="started"
            required
            value={educForms[index].started}
            onChange={(e) => handleFormChange(index, e)}
          ></input>
          <label htmlFor={`graduated${index}`}>Date graduated: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="date"
            id={`graduated${index}`}
            name="graduated"
            required
            value={educForms[index].graduated}
            onChange={(e) => handleFormChange(index, e)}
          ></input>
        </form>
      ))}
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
