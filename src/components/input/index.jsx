import React from "react";

export const Input = props => {
  return (
    <React.Fragment>
      <input
        type="text"
        className="input is-primary"
        placeholder={props.placeholder}
      />
      <br /> <br />
    </React.Fragment>
  );
};
