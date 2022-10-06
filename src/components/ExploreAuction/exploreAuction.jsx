import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import { cards } from "./file";
import RenderFormGroup from "./render_formgroup";
import ExploreAuctionCard from "./exploreAuctionCard";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#43b4a0",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    border: "1px solid currentColor",
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

class ExploreAuction extends Component {
  state = {
    currentPage: 1,
    pageSize: 9,
    items: cards,
    value: [1200, 3000],
  };

  onValueChange = (Event, newValue) => {
    this.setState({ value: newValue });
  };

  paginate = (items, currentPage, pagesize) => {
    let index = (currentPage - 1) * pagesize;
    return _(items).slice(index).take(pagesize).value();
  };

  handleChange = (current) => {
    let currentPage = current;
    this.setState({ currentPage });
  };

  render() {
    let { currentPage, pageSize, items } = this.state;
    let Modifieditems = this.paginate(items, currentPage, pageSize);

    return (
      <div className="content-wrapper">
        <div className="breadcrumb-wrap bg-f br-1">
          <div className="overlay bg-black op-7"></div>
          <div className="container">
            <div className="breadcrumb-title">
              <h2>Explore Auction</h2>
              <ul className="breadcrumb-menu list-style">
                <li>
                  <a href="index.html">Home </a>
                </li>
                <li> Explore Auction</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="explore-auction ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-4">
                <div className="sidebar">
                  <div className="sidebar-widget">
                    <h4>Search</h4>
                    <div className="search-box">
                      <div className="form-group">
                        <input type="search" placeholder="Search" />
                        <button type="submit">
                          <i className="flaticon-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h4>Filter Auction</h4>
                    <form action="#" className="auction-filter">
                      <RenderFormGroup
                        name="status"
                        label="Status"
                        v1="New"
                        v2="Old"
                        v3="Trending"
                      />
                      <RenderFormGroup
                        name="cat"
                        label="Categories"
                        v1="Art"
                        v2="Music"
                        v3="Trending"
                      />
                      <RenderFormGroup name="cat" label="Items" />
                      <RenderFormGroup name="cat" label="Items" />
                      <div className="form-group">
                        <label htmlFor="price-range">Price Range</label>
                        <AirbnbSlider
                          min={0}
                          max={8000}
                          value={this.state.value}
                          onChange={this.onValueChange}
                        />
                        <span type="text" id="amount_one">
                          ${this.state.value[0]} - ${this.state.value[1]}
                        </span>
                      </div>
                      <RenderFormGroup name="cat" label="Sort by" />
                      <RenderFormGroup name="ratings" label="Ratings" />
                      <RenderFormGroup name="chain" label="Chain" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-8 col-lg-8">
                <div className="row justify-content-center">
                  {Modifieditems.map((d) => {
                    return (
                      <ExploreAuctionCard
                        MainImage={d.MainImage}
                        btauthTitle={d.btauthTitle}
                        authImage={d.authImage}
                        authTitle={d.authTitle}
                        authName={d.authName}
                        authBid1={d.authBid1}
                        authBid2={d.authBid2}
                        title={d.title}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ExploreAuction;
