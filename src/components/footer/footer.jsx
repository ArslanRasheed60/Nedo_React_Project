import React from "react";
import { NavLink } from "react-router-dom";

import section_shape_1 from "../../assets/img/section-shape-1.png";
import logo_white from "../../assets/img/logo-white.png";

const Footer = () => {
  return (
    <footer
      className="footer-wrap bg-f pt-100 "
      style={{ paddingTop: "3.9rem" }}
    >
      <img src={section_shape_1} alt="Image" className="section-shape" />
      <div className="container">
        <div className="row pb-75">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
            <div className="footer-widget">
              <NavLink to="/" className="footer-logo">
                <img src={logo_white} alt="Image" />
              </NavLink>
              <p className="comp-desc">
                Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope
                elit esumo tempo incidunt labore dolore magna aliqu core tetur
                adip iscing.
              </p>
              <ul className="social-profile list-style style1">
                <li>
                  <NavLink target="_blank" to="https://facebook.com">
                    <i className="flaticon-facebook"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink target="_blank" to="https://twitter.com">
                    <i className="flaticon-twitter"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink target="_blank" to="https://instagram.com">
                    <i className="flaticon-instagram"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink target="_blank" to="https://linkedin.com">
                    <i className="flaticon-linkedin"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget">
              <h3 className="footer-widget-title">Marketplace</h3>
              <ul className="footer-menu list-style">
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Art
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    All NFTs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Music
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Trending Card
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Virtual World
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-4 ps-lg-5">
            <div className="footer-widget">
              <h3 className="footer-widget-title">Resources</h3>
              <ul className="footer-menu list-style">
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Help &amp; Support
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Live Auction
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Item Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Activity
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Collection Card
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget">
              <h3 className="footer-widget-title">Company</h3>
              <ul className="footer-menu list-style">
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Latest News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" target="_blank">
                    <i className="flaticon-next-1"></i>
                    Terms &amp; Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyright-text">
          <i className="ri-copyright-line"></i>
          <script>document.write(new Date().getFullYear())</script> 2022 &nbsp;
          <span>Nedo</span>. All Rights Reserved By{" "}
          <NavLink to="https://hibootstrap.com/" target="_blank">
            HiBootstrap
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
