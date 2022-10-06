import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import slide_1 from "../../../assets/images/Slide1.png";
import slide_2 from "../../../assets/images/Slide2.png";
import slide_3 from "../../../assets/images/Slide3.png";

const RenderCarosoul = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      autoplay
      autoplaySpeed={700}
      loop={true}
      items={1}
    >
      <div className="item">
        <div className="nft-item">
          <span className="featured">Featured Art</span>
          <img src={slide_1} alt="Image" />
          <div className="nft-info-wrap">
            <div className="nft-info">
              <p>Reserve Price</p>
              <h6>
                <span>68.4</span> ETH
              </h6>
            </div>
            <div className="nft-bid">
              <button
                type="button"
                className="btn style1"
                data-bs-toggle="modal"
                data-bs-target="#placeBid"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="nft-item">
          <span className="featured">Canvas</span>
          <img src={slide_2} alt="Image" />
          <div className="nft-info-wrap">
            <div className="nft-info">
              <p>Reserve Price</p>
              <h6>
                <span>68.4</span> ETH
              </h6>
            </div>
            <div className="nft-bid">
              <button
                type="button"
                className="btn style1"
                data-bs-toggle="modal"
                data-bs-target="#placeBid"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="nft-item">
          <span className="featured">Featured</span>
          <img src={slide_3} alt="Image" />
          <div className="nft-info-wrap">
            <div className="nft-info">
              <p>Reserve Price</p>
              <h6>
                <span>68.4</span> ETH
              </h6>
            </div>
            <div className="nft-bid">
              <button
                type="button"
                className="btn style1"
                data-bs-toggle="modal"
                data-bs-target="#placeBid"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default RenderCarosoul;
