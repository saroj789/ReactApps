import React from "react";
import Navbar from "./Navbar"

import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import Footer from "./Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <Footer />
    </>
  );
}

export default App;
