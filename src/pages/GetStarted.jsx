import React from "react";
import Navbar from '../components/Navbar'
import Konsultasi from "../elements/GetStarted/Konsultasi";
import Footer from "../components/Footer";
import Header from "../elements/GetStarted/Header";
import Achievement from "../elements/GetStarted/Achievement";
import Layanan from "../elements/GetStarted/Layanan";
import GetStarted from "../elements/GetStarted/GetStarted";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Achievement />
      <Layanan />
      <Konsultasi />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Homepage;