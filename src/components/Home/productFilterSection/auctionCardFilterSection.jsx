import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const AuctionCardFilterSection = (props) => {
  const {
    MainImage,
    authImage,
    authName,
    likes,
    auctionStock,
    auctionStockValue,
    title,
  } = props;

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="auction-card style3">
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
                <h6>
                  <NavLink to="/">{authName}</NavLink>
                </h6>
              </div>
            </div>
            <div className="auction-bid">
              <span className="item-popularity">
                <i className="flaticon-heart"></i>
                {likes}
              </span>
            </div>
          </div>
          <div className="auction-stock">
            <p>{auctionStock}</p>
            <h6>{auctionStockValue}</h6>
          </div>
          <div className="auction-title">
            <h3>
              <NavLink to="/">{title}</NavLink>
            </h3>
          </div>
          <button
            type="button"
            className="btn style5"
            data-bs-toggle="modal"
            data-bs-target="#placeBid"
          >
            Place Bid
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AuctionCardFilterSection;
