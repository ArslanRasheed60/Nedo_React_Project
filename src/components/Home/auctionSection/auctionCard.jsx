import React from "react";
import { NavLink } from "react-router-dom";

const CardAuctionSection = (props) => {
  const {
    MainImage,
    authImage,
    likes,
    btn1,
    authTitle,
    authName,
    authBid1,
    authBid2,
    discrip1,
    discrip2,
    time,
  } = props;

  return (
    <div
      className="auction-card style1"
      style={{ width: "26rem", height: "36.5rem", marginLeft: "0.5rem" }}
    >
      <div className="auction-img">
        <img src={MainImage} alt="Image" />
        <span className="item-popularity">
          <i className="flaticon-heart"></i>
          {likes}
        </span>
        <button
          type="button"
          className="btn style1"
          data-bs-toggle="modal"
          data-bs-target="#placeBid"
        >
          {btn1}
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
              <h6>
                <NavLink to="/">{authName}</NavLink>
              </h6>
            </div>
          </div>
          <div className="auction-bid">
            <span>{authBid1}</span>
            <h6>{authBid2}</h6>
          </div>
        </div>
        <div className="auction-title">
          <h3>
            <NavLink to="/">{discrip1}</NavLink>
          </h3>
          <span>{discrip2}</span>
        </div>
        <div className="countdown text-center" data-countdown="2022/12/11">
          <div className="cdown day">
            <span className="time-count">{time.day}</span>
            <p>Days</p>
          </div>
          <div className="cdown hour">
            <span className="time-count">{time.hour}</span>
            <p>Hours</p>
          </div>
          <div className="cdown minutes">
            <span className="time-count">{time.min}</span>
            <p>Minutes</p>
          </div>

          <div className="cdown second">
            <span className="time-count">{time.sec}</span>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAuctionSection;
