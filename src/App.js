import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="background h-[100dvh] ">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
