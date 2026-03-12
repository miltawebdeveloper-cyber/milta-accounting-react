import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/contact/Hero";
import ContactInfoSection from "../uk-components/contact/ContactInfoSection";
import Map from "../uk-components/contact/Map";
import CTA from "../uk-components/contact/CTA";
import useFullSEO from "../utils/useFullSEO";


import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

  return (
      <main>
        <Hero />
        <ContactInfoSection />
        <Map />
        <CTA />
        
      </main>

  );
}

export default App;
