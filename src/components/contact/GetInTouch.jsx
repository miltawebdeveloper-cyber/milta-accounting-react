import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ContactForm from "../common/ContactForm";

function ContactUsSection() {
  return (
    <Box
      id="get-in-touch"
      sx={{
        pt: { xs: 6, md: 9 },
        pb: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, #f9fdf9 0%, #f2f7f2 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* MAIN CARD */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fff",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08), 0 30px 80px rgba(0,0,0,0.12)",
          }}
        >
          {/* LEFT PANEL */}
          <Box
            sx={{
              flex: "0 0 45%",
              background:
                "linear-gradient(135deg, #ffb347 0%, #ff8c00 60%, #ff6f00 100%)",
              color: "#fff",
              p: { xs: 4, md: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {/* Subtle light overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.15), transparent)",
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative" }}>
              {/* HEADLINE */}
              <Typography
                sx={{
                  fontSize: { xs: "1.9rem", md: "2.3rem" },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 2,
                  letterSpacing: "-0.4px",
                }}
              >
                Grow Your Business <br /> with Confidence
              </Typography>

              {/* SUBTEXT */}
              <Typography
                sx={{
                  fontSize: "1rem",
                  opacity: 0.95,
                  lineHeight: 1.75,
                  maxWidth: 420,
                }}
              >
                Our experts understand U.S. accounting regulations, tax
                compliance, payroll standards, and reporting requirements—so
                you can focus on growth while we handle the numbers.
              </Typography>

              {/* CONTACT REDIRECT BUTTON */}

            </Box>
          </Box>

          {/* RIGHT FORM */}
          <Box
            sx={{
              flex: "0 0 55%",
              p: { xs: 3, md: 5 },
              background: "#ffffff",
            }}
          >
            {/* CTA BUTTON TEXT */}
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 800,
                fontSize: "2rem",
                letterSpacing: "0.4px",
                mb: 1,
              }}
            >
              Our Free Consultation request
            </Typography>

            {/* TRUST LINE */}
            <Typography
              sx={{
                textAlign: "center",
                color: "#2e7d32",
                fontWeight: 600,
                mb: 4,
                fontSize: "0.95rem",
              }}
            >
              Complete the form below to schedule your free consultation. Our team will reach out to you at the earliest.            </Typography>

            <ContactForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUsSection;
