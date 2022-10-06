import React from "react";
import CollectionSectionCard from "./collectionAuctionCard";

import Section_shape_1 from "../../../assets/img/section-shape-1.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { collectionAuthCardData } from "./file";

const CollectionSection = () => {
  const Responsive = {
    0: {
      items: 1,
      margin: 5,
    },
    700: {
      items: 2,
      // margin: 20,
    },
    1080: {
      items: 3,
      // margin: 20,
    },
  };
  const leftArrow =
    "<i class='fa fa-angle-left fa-4x' style='font-size:25px!important' ></i>";
  const rightArrow =
    "<i class='fa fa-angle-right fa-4x' style='font-size:25px!important' ></i>";
  return (
    <section
      className="collection-wrap pt-100 pb-75"
      style={{ backgroundColor: "#09092a" }}
    >
      <img src={Section_shape_1} alt="Image" className="section-shape" />
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="section-title style1 mb-40">
              <span>Most Popular</span>
              <h2>Popular Collection</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="collection-slider  owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            nav
            navText={[leftArrow, rightArrow]}
            responsive={Responsive}
            dots={false}
          >
            {collectionAuthCardData.map((c) => {
              return (
                <div className="item">
                  <CollectionSectionCard
                    key={c.id}
                    MainImage={c.MainImage}
                    item={c.item}
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
};

export default CollectionSection;
