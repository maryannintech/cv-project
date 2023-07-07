import React from "react";
import "../styles/Title.css";
import "../styles/Fonts.css";

function Title({title, tagline}) {
  return (
    <div className="app-name">
      <div className="container">
        <h1>{title}</h1>
        <h3>{tagline}</h3>
      </div>
      <div className="title-buttons"></div>
    </div>
  );
}

export default Title;
