// src/components/StrengthsSection.jsx
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AppsIcon from "@mui/icons-material/Apps";

const stats = [
  { icon: EmojiEventsIcon, value: "10+", label: "Years Of Success" },
  { icon: PeopleAltIcon, value: "100+", label: "Happy Clients" },
  { icon: AssignmentTurnedInIcon, value: "1000+", label: "Completed Projects" },
  { icon: AppsIcon, value: "20+", label: "Software Used" },
];

const StrengthsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 }, // reduced vertical padding
        background: "linear-gradient(135deg, rgb(29, 66, 48) 40%, rgb(20, 48, 36) 100%)",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: { xs: 3, md: 4 }, // reduced spacing
            fontSize: { xs: "1.7rem", md: "2.2rem" },
          }}
        >
          Strengths
        </Typography>

        <Grid container spacing={2.5} justifyContent="center">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <Grid
                key={index}
                size={{ xs: 6, sm: 3 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "0.25s ease",
                    p: 1.5, // reduced padding
                    borderRadius: "10px",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      backgroundColor: "rgba(255,255,255,0.04)",
                    },
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: { xs: 36, sm: 48 }, // slightly smaller
                      color: "#ffffff",
                    }}
                  />

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mt: 0.5, // reduced spacing
                      fontSize: { xs: "1.4rem", md: "1.8rem" },
                    }}
                  >
                    {item.value}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: 0.3, // reduced spacing
                      fontWeight: 500,
                      color: "#ff9401",
                      fontSize: { xs: "0.85rem", md: "0.95rem" },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default StrengthsSection;
