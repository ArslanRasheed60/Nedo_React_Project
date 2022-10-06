import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AuctionCardFilterSection from "./auctionCardFilterSection";
import { NavLink } from "react-router-dom";

import { auc_card } from "./file";

class ProductFilterSection extends Component {
  state = { selectedItem: "All", allItems: auc_card };

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
        ? this.state.allItems.slice(0, 9)
        : allItems.filter((f) => f.category === selectedItem);
    return (
      <section
        className="auction-filter-wrap ptb-100"
        style={{ backgroundColor: "#09092a" }}
      >
        <div className="container">
          <div className="section-title style1 text-center mb-50">
            <span>Exclusive Assets</span>
            <h2>Explore Product</h2>
          </div>
          <div className="controls auction-filter-btn">
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
              {filterd.map((f) => {
                return (
                  <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 mix cards">
                    <AuctionCardFilterSection
                      MainImage={f.MainImage}
                      authImage={f.authImage}
                      authName={f.authName}
                      likes={f.likes}
                      auctionStock={f.auctionStock}
                      auctionStockValue={f.auctionStockValue}
                      title={f.title}
                    />
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
          <div className="text-center mt-20">
            <NavLink to="/authorprofile" className="btn style1">
              View All Items
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductFilterSection;
