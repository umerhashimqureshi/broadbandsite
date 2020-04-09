import React from "react";
import Navbar from "./Navbar";
import QuickLinks from "./QuickLinks";
import Heading from "./Heading";
import SidePanelForComparison from "./SidePanelForComparion";
import Footer from "./Footer";
import FilterResults from "./FilterResults";

const ComparePage = () => {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <Navbar />
      <QuickLinks />
      <div style={{ width: "60%", margin: "auto" }}>
        <Heading comparison="Broadband" />
        <div className="d-flex">
          <SidePanelForComparison />
          <FilterResults />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComparePage;
