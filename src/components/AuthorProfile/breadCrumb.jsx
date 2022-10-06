import React from "react";
import { NavLink } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div className="breadcrumb-wrap bg-f br-2">
      <div className="overlay bg-black op-7"></div>
      <div className="container">
        <div className="breadcrumb-title">
          <h2>Author Profile</h2>
          <ul className="breadcrumb-menu list-style">
            <li>
              <NavLink to="/home">Home </NavLink>
            </li>
            <li>Author Profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
