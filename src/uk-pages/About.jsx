import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/about/AbHero1";
import AbAcc from "../uk-components/about/AbAcc";
import Running from "../uk-components/about/RunningLine";
import About from "../uk-components/homeComp/About";
import SupportBusinessSection from "../uk-components/about/SupportBusinessSection";
import HowWeWorkSection from "../uk-components/about/HowWeWorkSection";
import WhyChooseMiltaSection from "../uk-components/about/WhyChooseMiltaSection";
import MoreThanAccounting from "../uk-components/about/MoreThanAccounting";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {


  return (
      <main>
        <Hero />
        <About />
        <AbAcc />  
        <SupportBusinessSection />
        <HowWeWorkSection />
         <MoreThanAccounting />
        <WhyChooseMiltaSection />
       
       
      </main>

  );
}

export default App;
