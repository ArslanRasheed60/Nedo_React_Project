import React, { Component } from "react";

import author_item_1 from "../../../assets/img/author/author-item-1.jpg";
import { NavLink } from "react-router-dom";
import TopAuthorCard from "./topAuthorCard";
import { auth_card_data } from "./file";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class TopAuthorSection extends Component {
  state = { cards: auth_card_data };
  Responsive = {
    0: {
      items: 1,
      margin: 5,
    },
    600: {
      items: 2,
      // margin: 20,
    },
    700: {
      items: 3,
      // margin: 20,
    },
    1080: {
      items: 4,
      // margin: 20,
    },
  };
  leftArrow =
    "<i class='fa fa-angle-left fa-4x' style='font-size:22px!important' ></i>";
  rightArrow =
    "<i class='fa fa-angle-right fa-4x' style='font-size:22px!important' ></i>";

  render() {
    return (
      <section
        className=" style1 bg-f ptb-100"
        style={{ backgroundColor: "#09092a" }}
      >
        <div className="container">
          <div className="row mb-40">
            <div className="col">
              <div className="section-title style1 text-center">
                <h2>Top Creators</h2>
              </div>
            </div>
          </div>
          <div className="author-slider-two owl-carousel owl-loaded owl-drag">
            <OwlCarousel
              className="owl-theme"
              loop
              nav
              navText={[this.leftArrow, this.rightArrow]}
              responsive={this.Responsive}
              dots={false}
            >
              {this.state.cards.map((c) => {
                return (
                  <div className="item">
                    <TopAuthorCard
                      key={c.id}
                      MainImage={c.MainImage}
                      followers={c.followers}
                      authImage={c.authImage}
                      authTitle={c.authTitle}
                      authName={c.authName}
                    />
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default TopAuthorSection;
