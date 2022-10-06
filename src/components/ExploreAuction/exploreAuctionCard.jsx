import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const ExploreAuctionCard = (props) => {
  const {
    MainImage,
    btauthTitle,
    authImage,
    authTitle,
    authName,
    authBid1,
    authBid2,
    title,
  } = props;

  return (
    <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
      <div className="auction-card style7">
        <div className="auction-img">
          <img src={MainImage} alt="Image" />
          <button
            type="button"
            className="btn style1"
            data-bs-toggle="modal"
            data-bs-target="#placeBid"
          >
            {btauthTitle}
          </button>
        </div>
        <div className="auction-info-wrap">
          <div className="auction-author-info">
            <div className="author-info">
              <div className="author-img">
                <img src={authImage} alt="Image" />
              </div>
              <div className="author-name">
                <span>{authTitle}</span>
                <h6>{authName}</h6>
              </div>
            </div>
            <div className="auction-bid">
              <span>{authBid1}</span>
              <h6>{authBid2}</h6>
            </div>
          </div>
          <div className="auction-title">
            <h3>
              <NavLink to="">{title}</NavLink>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreAuctionCard;
