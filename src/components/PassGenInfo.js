import React from "react";
import GenPreview from "./GenPreview";

function PassGenInfo({ values }) {
  return (
    <GenPreview
      email={values.email}
      mobile={values.phoneNumber}
      firstname={values.firstName}
      lastname={values.lastName}
      title={values.title}
    />
  );
}

export default PassGenInfo;