import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import hero_shape_1 from "../../../assets/img/hero/hero-shape-1.png";
import RenderCarosoul from "./carousol";

import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="hero-wrap style1">
      <img
        src={hero_shape_1}
        alt="Image"
        className="hero-shape-one"
        style={{ backgroundColor: "#09092a" }}
      />
      <div className="container">
        <div className="row align-items-center gx-5">
          <div className="col-lg-6">
            <div className="hero-content">
              <span
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Nedo Marketplace
              </span>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                Discover, Collect &amp; Sell NFT Digital Art
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                Here are many variations of passages of Lorem Ipsum available
                but the new majority have suffer alteration in by injected
                humour or randomised words. Lorem ipsum dolor sit amet
                consectetur adipiscing elits sed aliquam.{" "}
              </p>
              <div
                className="hero-btn"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <NavLink to="/" className="btn style1">
                  Get Started
                </NavLink>
                <NavLink to="/" className="btn style2">
                  Create NFT
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img-slider owl-carousel owl-loaded owl-drag">
              <RenderCarosoul />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
