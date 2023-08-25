import React from "react";
import Navbar from "./Navbar";
import NewsletterSignUp from "./NewsletterSignUp";
import Cards from "./Cards";
import CarouselMain from "./CarouselMain";
import DisplayMain from "./DisplayMain";
import Footer from "./Footer";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <NewsletterSignUp />
      <Cards />
      <DisplayMain />
      <CarouselMain />
      <Footer />
    </div>
  );
}

export default Home;
