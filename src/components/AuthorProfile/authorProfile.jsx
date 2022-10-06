import React, { Component } from "react";
import AuctionCards from "./auctionCards";
import AuthProfileSection from "./authProfile";
import BreadCrumb from "./breadCrumb";
import { AnimatePresence, motion } from "framer-motion";

import { auctionCard } from "./file";

class AuthorProfile extends Component {
  state = { selectedItem: "All", allItems: auctionCard };

  styles = {
    backgroundColor: "#43b4a0",
    color: "white",
  };

  handleItem = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
    let { selectedItem, allItems } = this.state;

    const filterd =
      selectedItem === "All"
        ? this.state.allItems
        : allItems.filter((f) => f.category === selectedItem);

    return (
      <div className="content-wrapper">
        <BreadCrumb />
        <AuthProfileSection />

        <section className="auction-filter-wrap pb-100">
          <div className="container">
            <div className="section-title style3 text-center mb-50">
              <h2>Featured Product</h2>
            </div>
            <div className="controls auction-filter-btn style2">
              <button
                type="button"
                className="control"
                style={selectedItem === "All" ? this.styles : {}}
                onClick={() => this.handleItem("All")}
              >
                All
              </button>
              <button
                type="button"
                className="control"
                style={selectedItem === "art" ? this.styles : {}}
                onClick={() => this.handleItem("art")}
              >
                Art
              </button>
              <button
                type="button"
                className="control"
                style={selectedItem === "card" ? this.styles : {}}
                onClick={() => this.handleItem("card")}
              >
                Card
              </button>
              <button
                type="button"
                className="control"
                style={selectedItem === "collectibles" ? this.styles : {}}
                onClick={() => this.handleItem("collectibles")}
              >
                Collectibles
              </button>
              <button
                type="button"
                className="control"
                style={selectedItem === "photo" ? this.styles : {}}
                onClick={() => this.handleItem("photo")}
              >
                Photo
              </button>
            </div>
            <div className="row justify-content-center grid auction-filter">
              <AnimatePresence>
                {filterd.map((d) => {
                  return (
                    <div className="col-xl-4 col-lg-6 col-md-6 mix art">
                      <AuctionCards
                        MainImage={d.MainImage}
                        text1={d.text1}
                        text2={d.text2}
                        authImage={d.authImage}
                        authTitle={d.authTitle}
                        authName={d.authName}
                        authBid1={d.authBid1}
                        authBid22={d.authBid2}
                        time={d.time}
                      />
                    </div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AuthorProfile;
