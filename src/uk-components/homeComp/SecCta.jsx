// src/components/HeroSection.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import heroImage from "../../assets/businessman.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 3, sm: 5, md: 10 },
        px: { xs: 1.5, sm: 2, md: 3 },
        display: "flex",
        justifyContent: "center",
        background: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* MAIN HERO CARD */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1250px",
          borderRadius: { xs: "16px", sm: "20px", md: "22px" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          background: "linear-gradient(135deg, #0B3D1E 0%, #2E7D32 100%)",
          minHeight: { xs: "auto", md: "340px" },
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, sm: 5, md: 7 },
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }} // 📱 Fade-up on mobile
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "620px" },
            zIndex: 2,
            order: { xs: 2, md: 1 }, 
          }}
        >

          {/* Heading - Optimized for mobile */}
          <Typography
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              mb: { xs: 2, sm: 2.5, md: 3 },
              fontSize: { 
                xs: "24px", 
                sm: "28px", 
                md: "36px", 
                lg: "48px" 
              },
              color: "#fff",
              letterSpacing: "-0.02em",
              maxWidth: { xs: "100%", sm: "90%", md: "100%" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            Powering Your Business Potential
          </Typography>

          {/* Description - Better readability on mobile */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.95)",
              mb: { xs: 3, sm: 3.5, md: 4 },
              fontSize: { 
                xs: "14px", 
                sm: "15px", 
                md: "16px" 
              },
              maxWidth: { xs: "100%", sm: "500px", md: 480 },
              mx: { xs: "auto", md: 0 },
              lineHeight: { xs: 1.6, sm: 1.65, md: 1.7 },
              px: { xs: 1, sm: 2, md: 0 },
            }}
          >
            From precision accounting to proactive support, Milta simplifies your
            finances so you can focus on what truly matters—growing your business
            with clarity and confidence.
          </Typography>

          {/* Button - Full width on mobile, auto on desktop */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
            }}
          >
            <Button
              onClick={() => navigate("/uk/contact")}
              sx={{
                bgcolor: "#97ba3a",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "50px",
                px: { xs: 3, sm: 4, md: 4 },
                py: { xs: 1.2, sm: 1.3, md: 1.4 },
                textTransform: "none",
                fontSize: { xs: "14px", sm: "15px", md: "15px" },
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: "280px", sm: "240px", md: "none" },
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#97ba3a",
                  transform: { xs: "none", md: "translateY(-2px)" },
                  boxShadow: { md: "0 4px 12px rgba(0,0,0,0.15)" },
                },
              }}
            >
              Start Your Success Journey →
            </Button>
          </Box>
        </Box>

        {/* RIGHT IMAGE - Optimized for mobile */}
        <Box
          component={motion.img}
          src={heroImage}
          alt="Hero Team"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          sx={{
            position: { xs: "relative", md: "absolute" },
            right: { md: "40px" },
            bottom: { md: "0px" },
            mt: { xs: 0, sm: 2, md: 0 },
            mb: { xs: 1, sm: 2, md: 0 }, // Add margin bottom on mobile
            height: { 
              xs: "120px", 
              sm: "180px", 
              md: "400px", 
              lg: "480px" 
            },
            width: "auto",
            maxWidth: { 
              xs: "180px", 
              sm: "260px", 
              md: "340px", 
              lg: "none" 
            },
            objectFit: "contain",
            zIndex: 1,
            pointerEvents: "none",
            order: { xs: 1, md: 2 }, // Image first on mobile
            filter: { xs: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))", md: "none" },
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;