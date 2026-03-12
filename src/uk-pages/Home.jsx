import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/homeComp/Hero";
import About from "../uk-components/homeComp/About";
import Services from "../uk-components/homeComp/ServicesSection";
import Cta from "../uk-components/homeComp/Cta";
import TeamSection from "../uk-components/homeComp/TeamSection";
import ConsultationSection from "../uk-components/homeComp/ConsultationSection";
import FAQ from "../uk-components/homeComp/FAQ";
import Testimonials from "../uk-components/homeComp/WhyChooseMilta";
import SecCta from "../uk-components/homeComp/SecCta";
import useFullSEO from "../utils/useFullSEO";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {


  return (
      <main>
        <Hero />
        <Services />
        <About />
         <Cta />
        <TeamSection />
        
        <ConsultationSection />
        <SecCta />
       
        <FAQ />
      </main>

  );
}

export default App;
