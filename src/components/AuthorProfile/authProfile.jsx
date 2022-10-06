import React from "react";
import { NavLink } from "react-router-dom";

import single_author from "../../assets/images/single-author.jpg";

const AuthProfileSection = () => {
  return (
    <section className="author-profile-wrap ptb-100">
      <div className="container">
        <div className="author-details-box">
          <div className="author-img">
            <img src={single_author} alt="Image" />
            <span className="author-badge">
              <i className="flaticon-tick"></i>
            </span>
          </div>
          <div className="single-author-info">
            <span>Creator</span>
            <h3>Mario Gonjales</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              harum provident reprehenderit veritatis ers Lorem ipsum dolor sit
              amet consectetur adipisicing elit ollitia suscipit.
            </p>
            <div className="author-metainfo-wrap">
              <ul className="author-metainfo list-style">
                <li>438 Items</li>
                <li>3.3k Views</li>
              </ul>
              <ul className="social-profile list-style style2">
                <li>
                  <NavLink target="_blank" to="/authorprofile">
                    <i className="flaticon-facebook"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink target="_blank" to="/authorprofile">
                    <i className="flaticon-twitter"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink target="_blank" to="/authorprofile">
                    <i className="flaticon-instagram"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink target="_blank" to="/authorprofile">
                    <i className="flaticon-linkedin"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthProfileSection;
