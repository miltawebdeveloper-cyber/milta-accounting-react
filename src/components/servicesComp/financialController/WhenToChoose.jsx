// src/components/financialComp/WhenToChoose.jsx
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const WhenToChoose = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: "linear-gradient(135deg, #1d4230, #0f2b1d)",
        color: "#fff",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1300px !important",
          px: { xs: 3, md: 4 },
        }}
      >
        <Grid
          container
          spacing={6}
          alignItems="flex-start"
          justifyContent="center"
        >
          {/* Column 1 - Controller */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  background: "rgba(255,165,0,0.08)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2,
                }}
              >
                <ManageAccountsIcon sx={{ color: "#ff9401", fontSize: 30 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    color: "#ff9401",
                  }}
                >
                  When to Choose a Controller
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                A Controller is the right fit if your business needs hands-on
                management of day-to-day financial operations. Their focus is on
                accurate reporting, compliance, financial close processes, and
                internal controls. The Miltafs Controller brings these crucial
                capabilities while providing reliable financial oversight, all
                at a cost-effective price point for SMBs.
              </Typography>
            </Box>
          </Grid>

          {/* Column 2 - CFO */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  background: "rgba(255,165,0,0.08)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2,
                }}
              >
                <TrendingUpIcon sx={{ color: "#ff9401", fontSize: 30 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    color: "#ff9401",
                  }}
                >
                  When to Choose a CFO
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                A CFO, on the other hand, is ideal for businesses that require
                high-level strategic financial leadership, including long-term
                business and financial strategy, fundraising, and investor
                relations. As your business scales and you need more complex
                financial strategies, a CFO is invaluable for guiding the
                company through growth, funding, and investment decisions.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhenToChoose;
