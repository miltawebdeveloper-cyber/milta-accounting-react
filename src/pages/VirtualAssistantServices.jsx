// src/pages/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import HeroVirtual from "../components/servicesComp/virtualAssitance/HeroVirtual";
import FaqSer5 from "../components/servicesComp/virtualAssitance/FaqSer5";
import VAServices from "../components/servicesComp/virtualAssitance/VAServices";
import ServiceinVirtual from "../components/servicesComp/virtualAssitance/ServiceinVirtual";
import Benefits from "../components/servicesComp/virtualAssitance/Benefits";
import CtaSection from "../components/common/CtaSection";
import WhyChooseMiltaVirtual from "../components/servicesComp/virtualAssitance/WhyChooseMiltaVirtual";
import useFullSEO from "../utils/useFullSEO";


function App() {

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What distinguishes a typical employee from a virtual assistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A virtual assistant works remotely and provides flexible, part-time, or project-based support, unlike traditional employees who require physical office space, fixed working hours, and full-time salaries."
      }
    },
    {
      "@type": "Question",
      name: "Are virtual assistant services affordable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, virtual assistant services are highly cost-effective for small businesses, offering professional support without the overhead costs of hiring full-time, in-house employees."
      }
    },
    {
      "@type": "Question",
      name: "How can I contact my virtual assistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can communicate with your virtual assistant through multiple channels such as email, video conferencing, messaging apps, and project management tools for seamless collaboration."
      }
    },
    {
      "@type": "Question",
      name: "Can a virtual assistant handle confidential business data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our virtual assistants follow strict data security protocols, including NDAs and secure systems, to ensure complete confidentiality of your business information."
      }
    }
  ]
};


  useFullSEO({
  title:
    "Hire Virtual Assistants & Remote Personal | Virtual Assistant Services",
  description:
    "Professional virtual assistant services for small businesses. Specializing in real estate, data entry, bookkeeping, event planning, and more. Affordable and scalable solutions.",
  keywords:
    "virtual assistant service, virtual assistant services for small business, virtual bookkeeping service, accounting virtual service, virtual assistant services in the usa, accounting virtual service in the usa",
  author: "Milta Accounting",
  canonical:
    "https://www.miltafs.com/us/services/virtual-assistant-service-in-the-usa/",
    schema: faqSchema,
});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
       
        <HeroVirtual/>
        <VAServices/>
        <ServiceinVirtual/>
        <Benefits/>
        
        <CtaSection/>
        <WhyChooseMiltaVirtual/>
        <FaqSer5/>
      </main>
    </ThemeProvider>
  );
}

export default App;
