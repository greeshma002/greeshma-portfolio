import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./pages/Hero";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero/>
<Footer/>
    </div>
  );
}
