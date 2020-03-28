import React, { useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export const Backtop = () => {
  useEffect(() => {
    const btn = document.getElementById("myBtn");

    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        btn.classList.remove("d-none");
        btn.classList.add("d-flex");
      } else {
        btn.classList.remove("d-flex");
        btn.classList.add("d-none");
      }
    };
  });
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="p-fixed bottom-3 right-3">
      <button
        onClick={scrollTop}
        className="button d-none wh-same border-circle is-medium is-link "
        id="myBtn"
      >
        <FiArrowUp />
      </button>
    </div>
  );
};
