import React, { useState, useRef, useEffect } from "react";
import "../styles/Fonts.css";
import "../styles/ExperienceBg.css";

function ExperienceBg({ onChange }) {
  const [experienceForms, setExperienceForms] = useState([]);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Create refs for input fields dynamically based on the educForms length
    inputRefs.current = Array(experienceForms.length)
      .fill()
      .map((_, i) => inputRefs.current[i] || React.createRef());
  }, [experienceForms.length]);

  const addExperienceForm = () => {
    const updatedForms = [
      ...experienceForms,
      {
        companyName: "",
        position: "",
        tasks: "",
        started: "",
        ended: "",
      },
    ];
    setExperienceForms(updatedForms);
    onChange(updatedForms);
  };

  const removeExperienceForm = () => {
    const updatedForms = experienceForms.slice(0, -1);
    setExperienceForms(updatedForms);
    onChange(updatedForms);
  };

  const handleFormChange = (index, e) => {
    const { name, value } = e.target;
    const updatedForms = experienceForms.map((form, i) => {
      if (i === index) {
        return {
          ...form,
          [name]: value,
        };
      }
      return form;
    });
    setExperienceForms(updatedForms);
    onChange(updatedForms);
  };

  return (
    <div className="experience-form">
      <h1>EXPERIENCE</h1>
      {experienceForms.map((_, index) => (
        <form key={index}>
          <label htmlFor={`company-name-${index}`}>Company name: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            id={`company-name-${index}`}
            name="companyName"
            required
            value={experienceForms[index].companyName}
            onChange={(e) => handleFormChange(index, e)}
          ></input>
          <label htmlFor={`position-${index}`}>Position: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            id={`position-${index}`}
            name="position"
            required
            value={experienceForms[index].position}
            onChange={(e) => handleFormChange(index, e)}
          ></input>
          <label htmlFor={`tasks-${index}`}>Tasks: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            id={`tasks-${index}`}
            name="tasks"
            required
            value={experienceForms[index].tasks}
            onChange={(e) => handleFormChange(index, e)}
          ></input>
          <label htmlFor={`started-${index}`}>Started working: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="date"
            id={`started-${index}`}
            name="started"
            required
            value={experienceForms[index].started}
            onChange={(e) => handleFormChange(index, e)}
          ></input>
          <label htmlFor={`ended-${index}`}>Ended working: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="date"
            id={`ended-${index}`}
            name="ended"
            required
            value={experienceForms[index].ended}
            onChange={(e) => handleFormChange(index, e)}
          ></input>
        </form>
      ))}
      <div className="exp-btns">
        <button className="add-educ" onClick={addExperienceForm}>
          ADD EXPERIENCE
        </button>
        <button className="remove-educ" onClick={removeExperienceForm}>
          REMOVE EXPERIENCE
        </button>
      </div>
    </div>
  );
}

export default ExperienceBg;
