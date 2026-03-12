import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const FederalTaxForms = () => {
  const forms = [
    {
      title: "Form 1040",
      points: [
        "Used by individuals to report income and claim deductions/credits.",
        "Includes detailed sections for wages, investments, and deductions.",
      ],
    },
    {
      title: "Form 1065",
      points: [
        "Partnership tax returns, detailing profits, losses, and credits.",
        "Partners receive a Schedule K-1 for individual filings.",
      ],
    },
    {
      title: "Form 1120",
      points: [
        "C Corporation returns, detailing corporate income, expenses, and tax liabilities.",
      ],
    },
    {
      title: "Form 1120S",
      points: [
        "For S Corporations, reflecting income passed through to shareholders.",
      ],
    },
    {
      title: "Form 990",
      points: [
        "Non-Profit Organization returns, required to maintain tax-exempt status.",
        "Transparency in reporting revenue, expenses, and program activities.",
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 6 },
        background: "linear-gradient(135deg, #0a1a13, #132d22)",
        display: "flex",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1300px" }}>
        {/* Section Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontFamily: "'Poppins', sans-serif",
            color: "#ff9401",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.4rem" },
            lineHeight: 1.4,
            textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
          }}
        >
          Understanding Key Federal Tax Forms
        </Typography>

        {/* Forms Grid */}
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {forms.map((form, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <Paper
                elevation={6}
                sx={{
                  width: "100%",
                  maxWidth: "300px",
                  height: { xs: "auto", md: "310px" },
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  background: "linear-gradient(145deg, #1e3b2b, #14261c)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                  },
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#ff9401",
                    fontWeight: 600,
                    mb: 1.5,
                    fontFamily: "'Poppins', sans-serif",
                    textAlign: "center",
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                  }}
                >
                  {form.title}
                </Typography>

                <List sx={{ color: "#e5e5e5", mb: 0, px: 0 }}>
                  {form.points.map((text, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        py: 0.6,
                        px: 0,
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: "#ff9401",
                          minWidth: 32,
                          justifyContent: "center",
                        }}
                      >
                        <CheckCircleIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          color: "#f1f1f1",
                          lineHeight: 1.6,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FederalTaxForms;
