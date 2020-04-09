import React, { useEffect } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Carousal from "./Components/Carousel";
import QuickLinks from "./Components/QuickLinks";
import Brands from "./Components/Brands";
import { Card } from "antd";
import TopDealsOfMonth from "./Components/TopDealsOfMonth";
import TodayDeals from "./Components/TodayDeals";
import Footer from "./Components/Footer";

function App() {
  const { Meta } = Card;
  useEffect(() => {
    document.body.style.fontFamily = "Poppins";
  });
  return (
    <>
      <Navbar />
      <QuickLinks />
      <Carousal />
      <Brands />
      <TopDealsOfMonth />
      <TodayDeals />
      <Footer />
    </>
  );
}

export default App;
