import React, { useEffect } from "react";

import section_shape_1 from "../../../assets/img/section-shape-1.png";
import hw_img_1 from "../../../assets/images/hw-img-1.jpg";
import hw_img_2 from "../../../assets/images/hw-img-2.jpg";
import wallet from "../../../assets/img/wallet.png";
import square from "../../../assets/img/square.png";
import drawer from "../../../assets/img/drawer.png";
import shopping_bag from "../../../assets/img/shopping-bag.png";

import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorksSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="hw-wrap ptb-100" style={{ backgroundColor: "#09092a" }}>
      <img src={section_shape_1} alt="Image" className="section-shape" />
      <div className="container">
        <div className="row align-items-center gx-5">
          <div
            className="col-xxl-6 col-xl-5 col-lg-5"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="hw-img-wrap">
              <img className="hw-img-one" src={hw_img_1} alt="Image" />
              <img className="hw-img-two" src={hw_img_2} alt="Image" />
            </div>
          </div>
          <div
            className="col-xxl-6 col-xl-7 col-lg-7"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="hw-content">
              <div className="content-title style1 mb-40">
                <span>How It Works</span>
                <h2>Create &amp; Sell Your NFTs</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-12">
                  <div className="hw-card">
                    <h3 className="hw-title">
                      <img src={wallet} alt="Image" /> Set Up Your Wallet
                    </h3>
                    <p>
                      Other hand we denoce ighteous and tion and dso beguilde
                      ralized
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="hw-card">
                    <h3 className="hw-title">
                      <img src={square} alt="Image" />
                      Create Collection
                    </h3>
                    <p>
                      Other hand we denoce ighteous and tion and dso beguilde
                      ralized
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="hw-card">
                    <h3 className="hw-title">
                      <img src={drawer} alt="Image" />
                      Add Your NFT
                    </h3>
                    <p>
                      Other hand we denoce ighteous and tion and dso beguilde
                      ralized
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="hw-card">
                    <h3 className="hw-title">
                      <img src={shopping_bag} alt="Image" />
                      List For Sale
                    </h3>
                    <p>
                      Other hand we denoce ighteous and tion and dso beguilde
                      ralized
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
