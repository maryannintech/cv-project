import React from "react";
import "../styles/Title.css";
import "../styles/Fonts.css";
import { useState } from "react";

function Title({title, tagline}) {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="app-name">
      <div className="container">
        <h1>{title}</h1>
        <h3>{tagline}</h3>
      </div>
      <div className="title-buttons">
        <button className="previewcv-show" onClick={handleClick}>PREVIEW</button>
      </div>
    </div>
  );
}

export default Title;
