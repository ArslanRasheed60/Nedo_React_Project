import React, { Component } from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import ExploreAuction from "./ExploreAuction/exploreAuction";
import Footer from "./footer/footer";
import Header from "./header/header";
import HomePage from "./Home/Home";
import AuthorProfile from "./AuthorProfile/authorProfile";
import BackToTop from "./utils/backtotop";

const Main = () => {
  return (
    <React.Fragment>
      {/* <!--Preloader starts--> */}
      {/* <div class="loader js-preloader">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/authorprofile" element={<AuthorProfile />} />
          <Route path="/exploreauction" element={<ExploreAuction />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
      <BackToTop />
    </React.Fragment>
  );
};

export default Main;
