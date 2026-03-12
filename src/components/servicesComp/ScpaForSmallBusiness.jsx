import React from "react";
import { Box, Typography, Container } from "@mui/material";

const SpecializedCPAServices = () => {
  const services = [
    {
      title: "Startup Accounting Support",
      desc: "Assistance with setting up accounting systems, managing initial tax filings, and establishing financial workflows.",
    },
    {
      title: "Financial Health Checkups",
      desc: "Regular reviews to identify financial risks and growth opportunities.",
    },
    {
      title: "Customized Reporting",
      desc: "Providing detailed, customized reports to help you make data-driven decisions.",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f9fafc" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: 4,
          }}
        >
          {/* Left Column - 35% width */}
          <Box
            sx={{
              flex: "0 0 35%",
              minWidth: { xs: "100%", md: "35%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#1d4230",
                fontFamily: "'Poppins', sans-serif",
                mb: 3,
              }}
            >
              Specialized CPA Services for Small Businesses
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.8,
              }}
            >
              At Milta, we understand the unique challenges faced by CPA small businesses in the USA.
              Our specialized services are customized to support growth, enhance operational efficiency,
              and ensure regulatory compliance.
            </Typography>
          </Box>

          {/* Right Column - 65% width */}
          <Box
            sx={{
              flex: "0 0 65%",
              minWidth: { xs: "100%", md: "65%" },
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  mb: 3,
                  p: 3,
                  borderLeft: "4px solid #1d4230",
                  pl: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: 1,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#1d4230", mb: 1 }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.7 }}
                >
                  {service.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SpecializedCPAServices;
