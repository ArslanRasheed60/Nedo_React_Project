import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class TopAuthorCard extends Component {
  state = {};
  render() {
    const { MainImage, followers, authImage, authTitle, authName } = this.props;
    return (
      <div className="author-card  " style={{ width: "20rem" }}>
        <div className="author-card-img">
          <img src={MainImage} alt="Image" />
          <span className="followers">Followers: {followers}</span>
        </div>
        <div className="author-info-wrap">
          <div className="author-info">
            <div className="author-img">
              <img src={authImage} alt="Image" />
            </div>
            <div className="author-name">
              <span>{authTitle}</span>
              <h3>
                <NavLink to="/">{authName}</NavLink>
              </h3>
            </div>
          </div>
          <div className="author-social">
            <i className="flaticon-share-1"></i>
            <ul className="social-profile list-style style1">
              <li>
                <a target="_blank" href="https://facebook.com">
                  <i className="flaticon-facebook"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com">
                  <i className="flaticon-twitter"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://instagram.com">
                  <i className="flaticon-instagram"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://linkedin.com">
                  <i className="flaticon-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopAuthorCard;
