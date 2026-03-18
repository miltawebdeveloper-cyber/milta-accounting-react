import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import AccountingSoftwareSection from "../components/SoftwareTools/AccountingSoftwareSection";

import useFullSEO from "../utils/useFullSEO";

function App() {
  useFullSEO({
    // MAIN SEO
    title: "We Specialize in Software for Accounting Services",
    description:
      "We work with proven, industry-recognized accounting software to deliver accurate, timely, and audit-ready financial data for our USA clients.",
    keywords:
      "accounting software, right accounting software, accounting software important",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/us/software/tools-we-use/",
    ogTitle: "We Specialize in Software for Accounting Services",
    ogDescription: "We work with proven, industry-recognized accounting software to deliver accurate, timely, and audit-ready financial data for our USA clients.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/software/tools-we-use/",
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <AccountingSoftwareSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
