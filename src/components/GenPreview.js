import React from "react";
import "../styles/PreviewCv.css";
import "../styles/Fonts.css";

function GenPreview({email, mobile, firstname, lastname, title}) {
  return (
    <div className="preview-cv">
      <div className="genInfo">
        <div className="contacts">
          <p className="email">Email: {email}</p>
          <p className="phone-number">Mobile: {mobile} </p>
        </div>
        <p className="name">{lastname}, {firstname}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  );
}

export default GenPreview;
