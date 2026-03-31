import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Call, Email, SupportAgent } from "@mui/icons-material";
import CustomButton from "../common/CustomButton";

function SaleSupport() {
  const linkStyle = {
    color: "#ff9401",
    textDecoration: "none",
    cursor: "pointer",
  };

  const handleSalesEmail = () => {
    window.location.href = "mailto:Chris@miltafs.com";
  };

  const handleSupportEmail = () => {
    window.location.href = "mailto:info@miltafs.com";
  };

  const handleCall = () => {
    window.location.href = "tel:+13254754737";
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "#f4f8ee" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">

          {/* Chat to Sales */}
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <SupportAgent sx={{ color: "#ff9401", fontSize: 50, mb: 2 }} />

              <Typography variant="h6" fontWeight={700} color="#1d4230" mb={1}>
                Chat to Sales
              </Typography>

              <Typography color="#000" mb={2}>
                Interested in outsourcing? Speak to our friendly team:
              </Typography>

              <Typography color="#ff9401" fontWeight={600}>
                <a href="mailto:frank@miltafs.com" style={linkStyle}>
                  frank@miltafs.com
                </a>

              </Typography>

              <Box mt={3}>
                <CustomButton onClick={handleSalesEmail}>
                  Contact Sales
                </CustomButton>
              </Box>
            </Box>
          </Grid>

          {/* Email Support */}
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Email sx={{ color: "#ff9401", fontSize: 50, mb: 2 }} />

              <Typography variant="h6" fontWeight={700} color="#1d4230" mb={1}>
                Email Support
              </Typography>

              <Typography color="#000" mb={2}>
                Email us and we’ll get back to you within 24 hours:
              </Typography>

              <Typography color="#ff9401" fontWeight={600}>
                <a href="mailto:info@miltafs.com" style={linkStyle}>
                  info@miltafs.com
                </a>
              </Typography>

              <Box mt={3}>
                <CustomButton onClick={handleSupportEmail}>
                  Send Email
                </CustomButton>
              </Box>
            </Box>
          </Grid>

          {/* Call Support */}
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Call sx={{ color: "#ff9401", fontSize: 50, mb: 2 }} />

              <Typography variant="h6" fontWeight={700} color="#1d4230" mb={1}>
                Call Support
              </Typography>

              <Typography color="#000" mb={2}>
                Call with our staff 24/7 for instant support.
              </Typography>

              <Typography color="#ff9401" fontWeight={600}>
                US: <a href="tel:+18133030213" style={linkStyle}>+1 (813) 303-0213</a> /{" "}
                <a href="tel:+18135600065" style={linkStyle}>+1 (813) 560-0065</a>
              </Typography>

              <Box mt={3}>
                <CustomButton onClick={handleCall}>
                  Start Call
                </CustomButton>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default SaleSupport;
