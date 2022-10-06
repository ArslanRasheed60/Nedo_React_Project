import React, { useEffect } from "react";
import AuctionSection from "./auctionSection/auctionSection";
import CollectionSection from "./collectionSection/collectionSection";
import HeroSection from "./heroSection/heroSection";
import HowItWorksSection from "./howItWorkSection/howItWorkSection";
import ProductFilterSection from "./productFilterSection/productFilter";
import TopAuthorSection from "./topAuthorSection/TopAuthorSection";

const HomePage = () => {
  //style={{ backgroundColor: "#09092a" }}

  return (
    <React.Fragment>
      <HeroSection />
      <AuctionSection />
      <ProductFilterSection />
      <HowItWorksSection />
      <CollectionSection />
      <TopAuthorSection />
    </React.Fragment>
  );
};

export default HomePage;
