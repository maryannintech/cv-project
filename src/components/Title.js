import React from "react";
import "../styles/Title.css";
import "../styles/Fonts.css";

function Title(props) {
  const { title, tagline } = props;
  return (
    <div className="app-name">
      <div className="container">
        <h1>{title}</h1>
        <h3>{tagline}</h3>
      </div>
      <div></div>
    </div>
  );
}

export default Title;
