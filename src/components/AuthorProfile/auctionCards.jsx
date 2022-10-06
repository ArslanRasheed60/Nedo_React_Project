import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AuctionCards = (props) => {
  const {
    MainImage,
    text1,
    text2,
    authImage,
    authTitle,
    authName,
    authBid1,
    authBid2,
    time,
  } = props;

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="auction-card style9">
        <div className="auction-img">
          <img src={MainImage} alt="Image" />
          <button
            type="button"
            className="btn style1"
            data-bs-toggle="modal"
            data-bs-target="#placeBid"
          >
            {text1}
          </button>
        </div>
        <div className="auction-info-wrap">
          <div className="auction-end">
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
            <button type="button">
              <i className="flaticon-heart"></i>
            </button>
          </div>
          <div className="auction-title">
            <h3>
              <a href="item-details.html">{text2}</a>
            </h3>
          </div>
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
        </div>
      </div>
    </motion.div>
  );
};

export default AuctionCards;
