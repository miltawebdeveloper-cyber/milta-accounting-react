// src/components/servicesComp/bookKeeping/OurSolutions.jsx
import React from "react";
import { Box, Grid, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const sections = [
  {
    title: "Tax Preparation",
    points: [
      "Federal, State, and City Tax Preparation service refers to organizing and filing tax returns in compliance with U.S. tax laws.",
      "Federal Tax Preparation: Compliance with IRS requirements for individuals and corporations.",
      "State Tax Preparation: State-specific income, property, and sales tax filing.",
      "City Tax Preparation: Handling local taxes for complete compliance.",
      "Our planning service minimizes liabilities and optimizes refunds through accurate and timely filings.",
    ],
  },
  {
    title: "Tax Review and Finalization",
    points: [
      "Meticulous evaluation of tax forms to confirm accuracy and compliance before submission.",
      "All deductions and credits are applied.",
      "Errors are identified and corrected.",
      "Filings meet federal, state, and city requirements.",
    ],
  },
  {
    title: "Tax Forms We Specialize In",
    points: [
      "We handle the preparation of a broad range of tax forms, including but not limited to:",
      "Form 1040: Individual Income Tax Returns.",
      "Form 1041: Returns for estates and trusts.",
      "Form 1065: Returns from partnerships used to record credits, losses, and profits.",
      "Form 990: Returns for Non-Profit Organizations, maintaining tax-exempt status.",
    ],
  },
  {
    title: "Tax E-Filing",
    points: [
      "Electronic submission of tax returns to the IRS and local authorities.",
      "Why Choose E-Filing?",
      "Accelerated processing and faster refunds.",
      "Reduced risk of errors.",
      "Environmentally friendly and paperless process.",
    ],
  },
];

const OurSolutions = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 4 },
        background: "linear-gradient(135deg, #0a1a13, #132d22)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1300px" }}>
        {/* Heading */}
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
          Comprehensive Federal, State, and City Tax Services
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
          We provide complete tax planning, preparation, and e-filing services to ensure compliance and optimize refunds.
        </Typography>

        {/* Grid Layout */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} key={index} display="flex" justifyContent="center">
              <Paper
                elevation={0}
                sx={{
                  width: { xs: "100%", sm: "100%", md: "600px" },
                  minHeight: 460,
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  transition: "all 0.3s ease",
                  /* Glassmorphism effect */
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    border: "1px solid #ff9401",
                    boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
                    background: "rgba(255, 255, 255, 0.15)",
                  },
                }}
              >
                {/* Card Title */}
                <Typography
                  variant="h5"
                  sx={{
                    color: "#ff9401",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    mb: 2,
                    textAlign: "center",
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                  }}
                >
                  {section.title}
                </Typography>

                {/* Card Points List */}
                <Box sx={{ flexGrow: 1, overflowY: "auto", pr: 1 }}>
                  <List sx={{ mb: 0, px: 0 }}>
                    {section.points.map((point, idx) => (
                      <ListItem
  key={idx}
  sx={{
    py: 0.6,
    px: 0,
    alignItems: "center",  // icon + text same line
  }}
>
  <ListItemIcon
    sx={{
      color: "#ff9401",
      minWidth: 28,
      display:
        point.startsWith("Why Choose") ||
        point.includes("Our planning service")
          ? "none"
          : "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: "2px", // visually perfect alignment
    }}
  >
    {!point.startsWith("Why Choose") &&
      !point.includes("Our planning service") && (
        <CheckCircleIcon fontSize="small" />
      )}
  </ListItemIcon>

  <ListItemText
    primary={point}
    primaryTypographyProps={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: { xs: "0.9rem", sm: "1rem" },
      color: "#fff",
      lineHeight: 1.6,
    }}
  />
</ListItem>

                    ))}
                  </List>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurSolutions;
