import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/PayrollOutsourcing/Hero";
import Faq from "../uk-components/Services/PayrollOutsourcing/Faq";
import ServicesSection from "../uk-components/Services/PayrollOutsourcing/ServicesSection";
import WhyChoose from "../uk-components/Services/PayrollOutsourcing/WhyChoose";
import IntroSection from "../uk-components/Services/PayrollOutsourcing/IntroSection";
import Offer from "../uk-components/Services/PayrollOutsourcing/offer";
import useFullSEO from "../utils/useFullSEO";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

   useFullSEO({
      // MAIN SEO
      title: "Trusted Partner for Accounting Outsourcing Servicesfor Small Business",
      description:
        "We specialize in providing exceptional accounting outsourcing services customized specifically for small businesses in the USA. We understand your unique needs and provide tailored solutions to help you grow your business.",
      keywords:
        "business outsourcing services, accounting services for small business, finance and accounting outsourcing, outsource accounting services, virtual cfo services.",
      author: "Milta Accounting",
      canonical: "https://miltafs.com/about",
  
    });

  return (
      <main>
        <Hero />
        <IntroSection />
        <Offer />
        <WhyChoose />
        <ServicesSection />
        <Faq />
        
      
        
      </main>

  );
}

export default App;
