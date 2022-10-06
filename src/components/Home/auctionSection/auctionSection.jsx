import React from "react";

import CardAuctionSection from "./auctionCard";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { auth_sec_card } from "./file";

import left_arrow from "../../../assets/img/left-arrow.png";

const AuctionSection = () => {
  const Responsive = {
    0: {
      items: 1,
      margin: 5,
    },
    768: {
      items: 2,
      margin: 150,
    },
    1080: {
      items: 3,
      // margin: 10,
    },
  };
  const leftArrow =
    "<i class='fa fa-angle-left fa-4x' style='font-size:20px!important' ></i>";
  const rightArrow =
    "<i class='fa fa-angle-right fa-4x' style='font-size:20px!important' ></i>";
  return (
    <section
      className="auction-wrap ptb-100"
      style={{ backgroundColor: "#09092a" }}
    >
      <div className="container">
        <div className="section-title style1 text-center mb-40">
          <span>Auction</span>
          <h2>Live Auctions</h2>
        </div>
        <div className="auction-slider owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            navText={[leftArrow, rightArrow]}
            nav
            dots={false}
            responsive={Responsive}
          >
            {auth_sec_card.map((d) => {
              return (
                <div key={d.id} className="item">
                  <CardAuctionSection
                    MainImage={d.MainImage}
                    btn1={d.btn1}
                    authImage={d.authImage}
                    authTitle={d.authTitle}
                    authName={d.authName}
                    authBid1={d.authBid1}
                    authBid2={d.authBid2}
                    discrip1={d.discrip1}
                    discrip2={d.discrip2}
                    likes={d.likes}
                    time={d.time}
                  />
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default AuctionSection;
