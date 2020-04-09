import React from "react";
import TDC from "./TodayDealCard";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const TodayDeals = () => {
  var mainDesign;
  if (isBrowser) {
    mainDesign = {
      margin: "auto",
      width: "60%",
      marginTop: 20
    };
  } else if (isMobile) {
    mainDesign = {
      margin: "auto",
      maxWidth: "200%",
      marginTop: 20
    };
  }

  return (
    <>
      <div style={mainDesign}>
        <div style={{ marginTop: 40, padding: 40 }}>
          <h2 style={{ textAlign: "center" }}>
            Today's best deals
            <hr
              style={{
                width: "5%",
                border: "2px solid red",
                borderRadius: "4px"
              }}
            />
          </h2>
          <div style={{ marginTop: "5%" }}>
            <TDC
              saleDescription="January Sale - Recommended fibre deal with FREE Anytime calls"
              img="sky"
              desc="Sky Broadband Superfast + Sky Pay as You Talk"
              package="FREE Anytime calls 18 month discount"
              prevPrice="32"
              currentPrice="25"
            />
            <TDC
              saleDescription="January Sale - Recommended fibre deal with FREE Anytime calls"
              img="Plusnet"
              desc="Sky Broadband Superfast + Sky Pay as You Talk"
              package="FREE Anytime calls 18 month discount"
              prevPrice="32"
              currentPrice="25"
            />
            <TDC
              saleDescription="January Sale - Recommended fibre deal with FREE Anytime calls"
              img="EE"
              desc="Sky Broadband Superfast + Sky Pay as You Talk"
              package="FREE Anytime calls 18 month discount"
              prevPrice="32"
              currentPrice="25"
            />
            <TDC
              saleDescription="January Sale - Recommended fibre deal with FREE Anytime calls"
              img="TalkTalk"
              desc="Sky Broadband Superfast + Sky Pay as You Talk"
              package="FREE Anytime calls 18 month discount"
              prevPrice="32"
              currentPrice="25"
            />
            <TDC
              saleDescription="January Sale - Recommended fibre deal with FREE Anytime calls"
              img="VirginMedia"
              desc="Sky Broadband Superfast + Sky Pay as You Talk"
              package="FREE Anytime calls 18 month discount"
              prevPrice="32"
              currentPrice="25"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayDeals;
