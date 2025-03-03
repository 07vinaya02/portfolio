// import { useState } from "react";

import About from "./Components/Abouts/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Home";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar";

// import React from "react";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
