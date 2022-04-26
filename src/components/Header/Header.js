import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Button>Prices</Button>
      </Link>
      <Link to="/search">
        <Button>Search</Button>
      </Link>
    </div>
  );
};

export default Header;
