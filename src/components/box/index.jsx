import React from "react";

export const Box = props => {
  return (
    <div className="box">
      <article className="media">{props.children}</article>
    </div>
  );
};
