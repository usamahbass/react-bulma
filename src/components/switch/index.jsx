import React from "react";
import { func, string } from "prop-types";
import { FaSun, FaMoon } from "react-icons/fa";

const SwitchTheme = ({ theme, toggleTheme }, props) => {
  const isLight = theme === "light";
  return (
    <div name={props.name}>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={toggleTheme}
        value={isLight}
        checked={props.checked}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        value={props.value}
      >
        <FaMoon style={{ marginLeft: 8, color: "#f7df1d" }} />
        <span className={`react-switch-button`} />
        <FaSun style={{ marginRight: 8, color: "#f7df1d" }} />{" "}
      </label>
    </div>
  );
};

SwitchTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default SwitchTheme;
