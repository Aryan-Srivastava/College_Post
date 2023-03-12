import React from "react";
import { ImageSlider, SplitSection, CardBlocks, Footer,  } from "../components";
import BottomBar from '../components/BottomBar.jsx'
export default function About() {
  return (
    <div className="About-Page">
      <ImageSlider />
      <SplitSection />
      <CardBlocks />
      <BottomBar />
      <Footer />
    </div>
  );
}
