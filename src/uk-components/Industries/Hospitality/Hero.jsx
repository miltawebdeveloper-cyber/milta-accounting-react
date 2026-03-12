// src/uk-components/Industries/Healthcare/Hero.jsx
import React, { useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const heroImage =
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

const AboutUs = () => {
  useEffect(() => {
    // Update document title
    document.title = "Hospitality Accounting Services in the UK | Milta Accounting";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "We provide accounting services for the hospitality industry, helping UK businesses stay accurate, organized, and compliant."
      );
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      metaDescription.content = "We provide accounting services for the hospitality industry, helping UK businesses stay accurate, organized, and compliant.";
      document.head.appendChild(metaDescription);
    }
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", 
        "hospitality accounting services, bookkeeping for hospitality, accounting for hospitality, hospitality accounting solutions, hospitality bookkeeping services, accounting services for hospitality"
      );
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      metaKeywords.content = "hospitality accounting services, bookkeeping for hospitality, accounting for hospitality, hospitality accounting solutions, hospitality bookkeeping services, accounting services for hospitality";
      document.head.appendChild(metaKeywords);
    }
    
    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://www.miltafs.com/uk/hospitality-accounting-services/");
    } else {
      canonical = document.createElement('link');
      canonical.rel = "canonical";
      canonical.href = "https://www.miltafs.com/uk/hospitality-accounting-services/";
      document.head.appendChild(canonical);
    }

    // Cleanup function
    return () => {
      // Optional: Reset title when component unmounts
      document.title = "Milta Accounting";
    };
  }, []);

  return (
    <Box component="main">
      {/* ================= HERO SECTION ================= */}
      <Box
        component="section"
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "45vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          overflow: "hidden",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5) blur(1px)",
            zIndex: -2,
          }}
        />

        {/* Animated Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(120deg, rgba(21, 255, 0, 0.24), rgba(5, 107, 13, 0.3))",
            animation: "gradientShift 10s ease infinite",
            zIndex: -1,
          }}
        />

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ zIndex: 1, px: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
              textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Hospitality Accounting Services in the UK
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.25rem" },
              mb: 4,
              lineHeight: 1.6,
              textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
              maxWidth: 750,
              mx: "auto",
              color: "#fff",
            }}
          >
            We provide accounting services for the hospitality industry, helping UK businesses 
            stay accurate, organized, and compliant.
          </Typography>

          <Button
            href="/contact"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 30,
              bgcolor: "#2b6d2a",
              color: "#fff",
              fontWeight: 700,
              boxShadow: "0 5px 15px rgba(50, 141, 38, 0.4)",
              textTransform: "none",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 25px rgba(100, 145, 70, 0.5)",
              },
            }}
          >
            Book a Free Demo
          </Button>
        </Container>

        {/* Gradient Animation Keyframes */}
        <Box
          component="style"
          children={`
            @keyframes gradientShift {
              0% {background-position: 0% 50%;}
              50% {background-position: 100% 50%;}
              100% {background-position: 0% 50%;}
            }
          `}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;