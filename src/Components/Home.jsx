import React from "react";
import { Download } from "./Download";
import { NavBar } from "./Navbar";
import HeroSlider from "./HeroSlider";
import StoreLocator from "./StoreLocator";
import { News } from "./News";
import { NewsCard } from "./NewsCard";
import { Footer } from "./Footer";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSlider />
      <StoreLocator />
      <Download />
      <News />
      <NewsCard />
      <Footer />
    </>
  );
}

export default Home;
