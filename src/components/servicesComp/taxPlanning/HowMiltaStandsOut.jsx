import React from "react";
import { Box, Grid, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const HowMiltaStandsOut = () => {
  const points = [
    {
      title: "Customized for U.S. Clients",
      description:
        "Milta focuses exclusively on providing tax planning and preparation services for U.S.-based individuals and businesses, ensuring compliance with federal, state, and local laws.",
    },
    {
      title: "Specialized Expertise",
      description:
        "We handle complex returns, including those for estates, trusts, partnerships, and corporations.",
    },
    {
      title: "Proven Results",
      description:
        "Our track record speaks for itself, with countless satisfied clients benefiting from reduced liabilities and maximized refunds.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        background: "linear-gradient(180deg, #fefefe, #f5f9f6)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontFamily: "'Poppins', sans-serif",
            color: "#0a382a",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            lineHeight: 1.3,
          }}
        >
          How Milta Stands Out
        </Typography>

        {/* Points Section */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
          {points.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  height: "100%",
                  borderRadius: 3,
                  p: { xs: 3, sm: 4 },
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box display="flex" alignItems="center" mb={1.5}>
                  <StarIcon sx={{ color: "#ff9401", fontSize: 30, mr: 1 }} />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#1d4230",
                      fontWeight: 600,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    color: "#333",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HowMiltaStandsOut;
