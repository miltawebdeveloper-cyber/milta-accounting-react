// src/components/servicesComp/bookKeeping/OurSolutions.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const services = [
  {
    title: "Real Estate Virtual Assistant",
    description:
      "Our Real Estate VAs manage property listings, update client databases, coordinate showings, and perform market research—helping you focus on client relationships and closing deals.",
  },
  {
    title: "Data Entry",
    description:
      "We ensure data accuracy and consistency across all business platforms. From spreadsheets to CRMs, our virtual assistants efficiently manage large datasets for smooth workflow.",
  },
  {
    title: "Event Planning",
    description:
      "From virtual meetings to large-scale conferences, our VAs coordinate RSVPs, vendors, schedules, and logistics to guarantee smooth and stress-free event management.",
  },
  {
    title: "Internet Research",
    description:
      "Our VAs conduct thorough market, competitor, and customer research to deliver actionable insights that support data-driven business decisions.",
  },
  {
    title: "Business Card Scanning",
    description:
      "We digitize and organize business cards, ensuring your contact database remains updated and easy to access within your preferred CRM or contact management system.",
  },
  {
    title: "Appointment Scheduling",
    description:
      "Stay organized with our scheduling support — we manage your calendar, meetings, and reminders to keep your business running efficiently.",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "We maintain financial records, reconcile accounts, and generate reports, ensuring your business stays compliant and financially organized.",
  },
  {
    title: "Call Answering",
    description:
      "Our professional VAs handle your inbound calls promptly and courteously, improving client satisfaction and ensuring you never miss a lead.",
  },
  {
    title: "Correspondence Management",
    description:
      "We manage your emails and business communication — drafting, responding, and organizing messages to help you stay focused and professional.",
  },
  {
    title: "Desktop Publishing Services",
    description:
      "Our VAs design and prepare marketing materials like brochures, flyers, and presentations that align with your brand and enhance communication.",
  },
  {
    title: "Presentations & Spreadsheets Creation",
    description:
      "We create engaging, data-driven presentations and spreadsheets that help you communicate complex information clearly and professionally.",
  },
  {
    title: "Travel, Airline & Hotel Reservations",
    description:
      "We manage complete travel planning — from booking flights to preparing detailed itineraries — for seamless and cost-effective business travel.",
  },
];

const OurSolutions = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 8 },
        px: { xs: 2, sm: 4 },
        background: "linear-gradient(135deg, #0a1a13, #132d22)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1300px" }}>
        {/* Section Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 2,
            fontFamily: "'Poppins', sans-serif",
            color: "#ff9401",
          }}
        >
          Our Virtual Assistant Services in the USA
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 6,
            fontFamily: "'Poppins', sans-serif",
            color: "#fffdfb",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Professional, Scalable, and Reliable Support for Your Business Growth
        </Typography>

        {/* Grid Layout */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: 200,
                  width: "100%",
                  maxWidth: 400,
                  display: "flex",
                  flexDirection: "column",
                  p: 4,
                  borderRadius: 4,
                  mx: "auto",
                  background: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    border: "1px solid #ff9401",
                    boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
                    background: "rgba(255, 255, 255, 0.12)",
                  },
                }}
              >
                {/* Card Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#ff9401",
                    mb: 1,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {service.title}
                </Typography>

                {/* Card Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#f8f8f8",
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurSolutions;
