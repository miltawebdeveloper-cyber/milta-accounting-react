// src/pages/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import HeroBook from "../components/servicesComp/digital-marketing/HeroBook";
import TopNotch from "../components/servicesComp/digital-marketing/TopNotch";
import BusinessNeedIt from "../components/servicesComp/digital-marketing/BusinessNeedIt";
import WhyChooseMiltaBookkeeping from "../components/servicesComp/digital-marketing/WhyChooseMiltaBookkeeping";
import OurSolutions from "../components/servicesComp/digital-marketing/OurSolutions";
import WaveDivider from "../components/homeComp/WaveDivider";
import { Title, Meta, Link } from "react-head";
import useFullSEO from "../utils/useFullSEO";
import FAQ from "../components/servicesComp/digital-marketing/FaqDM";

function App() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Milta create a customized marketing plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Milta begins by understanding your business goals, target audience, and market dynamics. Based on this analysis, we select the most effective platforms and design a customized digital marketing strategy tailored to your specific needs."
      }
    },
    {
      "@type": "Question",
      name: "Can Milta help with website design and development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Milta offers professional website design and development services that align with your brand identity and deliver an exceptional user experience."
      }
    },
    {
      "@type": "Question",
      name: "How does Milta ensure a high return on investment (ROI)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use data-driven digital marketing strategies to attract high-quality leads, continuously optimize campaigns, and focus on measurable results that increase conversions and revenue."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take for digital marketing to show measurable results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline varies based on strategies and business goals, but many clients start seeing measurable improvements within a few months of consistent digital marketing efforts."
      }
    },
    {
      "@type": "Question",
      name: "Can Milta help my business stay competitive in a crowded market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our customized and innovative digital marketing solutions help businesses stand out, attract the right audience, and maintain a strong competitive edge."
      }
    },
    {
      "@type": "Question",
      name: "What makes Milta different from other digital marketing agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Milta stands out through personalized strategies, proven performance, a client-first approach, and dedicated support focused on long-term business growth."
      }
    },
    {
      "@type": "Question",
      name: "What digital marketing services does Milta offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Milta provides end-to-end digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, website design and development, and performance analytics."
      }
    },
    {
      "@type": "Question",
      name: "What is SEO, and how can it help my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO (Search Engine Optimization) improves your website’s visibility on search engines, increases organic traffic, and strengthens your online presence through optimized content and technical enhancements."
      }
    }
  ]
};

  useFullSEO({
  title: "Digital Marketing Agency in the USA | PPC, SEO, and More.",
  description:
    "Best digital marketing agency in the USA. Boost your online presence, drive traffic, and increase sales with our expert services.",
  keywords:
    "digital marketing agency, digital marketing services in the usa, digital marketing services usa, a digital marketing agency in the usa",
  author: "Milta Accounting",
  canonical:
    "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-usa/",
      schema: faqSchema,

});

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <HeroBook />
        <TopNotch />
        <OurSolutions />
        <BusinessNeedIt />
        <WaveDivider/>
        <WhyChooseMiltaBookkeeping/>
        <FAQ/>
     
      </main>
    </ThemeProvider>
  );
}

export default App;
