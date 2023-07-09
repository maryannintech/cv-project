import React from "react";
import "../styles/PreviewCv.css";
import "../styles/Fonts.css";

function GenPreview({ values }) {
  return (
    <div className="genInfo">
      <div className="contacts">
        <p className="email">Email: {values.email}</p>
        <p className="phone-number">Mobile: {values.phoneNumber} </p>
      </div>
      <p className="name">
        {values.lastName}, {values.firstName}
      </p>
      <p className="title">{values.title}</p>
    </div>
  );
}

export default GenPreview;
