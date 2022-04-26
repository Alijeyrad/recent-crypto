import React from "react";
import "./Button.css";

const Button = ({ children, handleClick = () => {}, classes = "" }) => (
  <button className={`button ${classes}`} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
