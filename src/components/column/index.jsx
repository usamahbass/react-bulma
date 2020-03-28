import React from "react";

const Column = props => {
  return (
    <div className={`column ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Column;
