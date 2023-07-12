import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Info />
      <About />
      <Footer />
    </>
  );
}
