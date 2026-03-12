import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import MiltaAccountingOverview from "../components/Location/MiltaAccountingOverview";
import HeroSec from "../components/Location/HeroSec";
import useFullSEO from "../utils/useFullSEO";
import StatesServicesSection from "../components/Location/StatesServicesSection";
import Faq from "../components/Location/Faq";
import USAChooseMilta from "../components/Location/USAChooseMilta"

function Areas() {
    useFullSEO({
  // MAIN SEO
  title: "Areas We Serve in the USA | Milta",
  description:
    "We offer small and medium-sized businesses in the US expert bookkeeping, accounting, tax planning and preparation, CPA, virtual assistant, and digital marketing services.",
  keywords:
    "bookkeeping services for small businesses, tax planning and preparation, cpa services for florida small businesses, virtual assistant services, data  entry & management services, financial controller services",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/areas/usa-accounrting-services/",
});


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <HeroSec/>
        <MiltaAccountingOverview />
        <StatesServicesSection />;
        <USAChooseMilta/>
         
        <Faq/>
        
      </main>
    </ThemeProvider>
  );
}

export default Areas;
