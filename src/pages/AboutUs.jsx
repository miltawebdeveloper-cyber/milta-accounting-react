import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import MiltaAccountingOverview from "../components/aboutusComp/MiltaAccountingOverview";
import OurStrengthsSection from "../components/aboutusComp/OurStrengthsSection";


// Components
import Team from "../components/aboutusComp/Team";
import SaleSupport from "../components/aboutusComp/SaleSupport";
import ServicesCarousel from "../components/homeComp/ServicesCarousel";
import MdIntro from "../components/aboutusComp/MdIntro";
import CTASection from "../components/common/CtaSection"; // single import
import HeroSection from "../components/aboutusComp/HeroSec";
import Path from "../components/aboutusComp/Path";
import PartnerSection from "../components/aboutusComp/PartnerSection";
import useFullSEO from "../utils/useFullSEO";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <HeroSection/>
        <Team />
        <SaleSupport />
        <MiltaAccountingOverview />
        <PartnerSection />

        <Path/>
        <CTASection />
        
        <OurStrengthsSection />
        <ServicesCarousel /> 
        
      </main>
    </ThemeProvider>
  );
}

export default App;
