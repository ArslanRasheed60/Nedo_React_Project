import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const CollectionSectionCard = (props) => {
  const { MainImage, authImage, authTitle, authName, item } = props;

  return (
    <div
      className="auction-card style4"
      style={{ width: "25rem", height: "27rem", marginLeft: "3rem" }}
    >
      <div className="auction-img">
        <img src={MainImage} alt="Image" />
      </div>
      <div className="auction-info-wrap">
        <div className="auction-author-info">
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
          <div className="auction-bid">
            <span className="item-popularity">{item}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSectionCard;
