import React from "react";
import { Box, Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import heroImage from "../../assets/heroImage.png";

const features = [
  "Available Full-Time: Gain access to full-time professionals dedicated to your accounting needs.",
  "Overnight Delivery: We work while you're offline, ensuring your deliverables are ready by the time you return.",
  "Offload Non-Core Functions: Focus on growing your business while we handle the financial complexities.",
  "High-Quality CPA Services in USA: Skilled professionals with a client retention rate exceeding 95%.",
  "Reduced Overheads: Eliminate costs related to salaries, management, hiring, and training.",
  "Diversify Your Customers: Expand your client base without additional investments.",
];

const WhyChooseMiltaTwoColumn = () => {
  return (
    <Box sx={{ py: 10, px: 4, backgroundColor: "#f9f9f9" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.3rem" },
              }}
            >
              Why Choose Milta for CPA Services in USA
            </Typography>

            <List disablePadding>
              {features.map((feature, index) => (
                <ListItem key={index} sx={{ alignItems: "flex-start", mb: 1, py: 0 }}>
                  <ArrowForwardIosIcon
                    sx={{ color: "#ff9401", fontSize: 16, mt: "2px", mr: 1 }}
                  />
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: "0.95rem", md: "1rem" },
                          lineHeight: 1.6,
                          color: "text.primary",
                        }}
                      >
                        {feature}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={heroImage}
              alt="CPA Services"
              sx={{
                width: "100%",
                maxWidth: 300,
                borderRadius: 3,
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseMiltaTwoColumn;
