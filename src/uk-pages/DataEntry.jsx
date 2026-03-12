import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/DataEntry/Hero";
import Faq from "../uk-components/Services/DataEntry/Faq";
import InfoSection from "../uk-components/Services/DataEntry/InfoSection";
import Offer from "../uk-components/Services/DataEntry/offer";
import UkServicesSection from "../uk-components/Services/DataEntry/ServicesSection";
import WhyChoose from "../uk-components/Services/DataEntry/WhyChoose";
import IntroSection from "../uk-components/Services/DataEntry/IntroSection";
import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

  return (
      <main>
        <Hero />
        <IntroSection />
        <Offer />
        <InfoSection />
        
        <UkServicesSection />
        <WhyChoose />
         <Faq />
      </main>

  );
}

export default App;
