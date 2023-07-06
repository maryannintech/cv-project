import React from "react";
import { useState } from "react";
import "../styles/Title.css";
import PreviewCv from "./PreviewCv";
import "../styles/Fonts.css";

function Title(props) {
  const { title, tagline } = props;
  const [isShown, setIsShown] = useState(false);
  function showPreviewCV() {
    setIsShown(current => !current);
  }
  return (
    <div className="app-name">
      <div className="container">
        <h1>{title}</h1>
        <h3>{tagline}</h3>
      </div>
      <div className="title-buttons">
        <button className="preview-cs" onClick={showPreviewCV}>
          PREVIEW
        </button>
        {isShown && (
            <PreviewCv></PreviewCv>
        )}
      </div>
    </div>
  );
}

export default Title;
