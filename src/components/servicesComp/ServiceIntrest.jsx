import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContactForm from "../common/ContactForm";

function ContactUsSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        py: { xs: 6, sm: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Grid item xs={12} md={8}>

            {/* Highlighted Service - CENTERED */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#1d4230",
                  color: "#fff",
                  px: 3,
                  py: 1.5,
                  borderRadius: "10px",
                  display: "inline-block",
                  mb: 4,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  fontWeight: 600,
                  boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
                }}
              >
                🔥 Contact Us For Service
              </Box>
            </Box>

            {/* Centered Contact Form */}
            <Box
              sx={{
                width: "100%",
                maxWidth: 600,
                mx: "auto",
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: 4,
                backgroundColor: "#fff",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #e5e5e5",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#1d4230",
                  mb: 4,
                  textAlign: "center",
                }}
              >
                Service Interest – Contact Us Today
              </Typography>

              <ContactForm />
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactUsSection;
