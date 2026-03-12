import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const NonprofitBookkeepingLayout = () => {
return (
<Box
sx={{
py: { xs: 6, md: 5 },
background: "linear-gradient(180deg, #f9f9f9 0%, #f0f8f5 100%)",
display: "flex",
justifyContent: "center",
}}
>
<Container
maxWidth={false}
sx={{
maxWidth: { xs: "95%", sm: "90%", md: "1000px" },
color: "#1d4230",
fontFamily: "'Poppins', sans-serif",
textAlign: "left",
}}
>
{/* Section Title */}
<Typography
variant="h4"
sx={{
fontWeight: 700,
mb: 4,
color: "#1d4230",
textAlign: { xs: "center", md: "left" },
}}
>
Bookkeeping for Nonprofits in the US </Typography>

    {/* Introductory Paragraphs */}
    <Stack spacing={2.5} sx={{ mb: 6 }}>
      <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
        With over 6+ years of experience, Milta is your reliable partner for bookkeeping
        for nonprofits in the US. Whether you're launching a new nonprofit, managing a
        growing foundation, or running a well-established organization, we offer
        tailored accounting solutions to meet your unique financial needs. Our team
        specializes in nonprofit compliance, donor reporting, and tax filing,
        empowering your organization to grow with confidence.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, color: "#1d4230" }}>
        Why Bookkeeping for Nonprofit Organizations in the US Matters
      </Typography>

      <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
        Proper bookkeeping for nonprofit organizations in the US is crucial to maintain
        transparency, meet IRS regulations, and gain donor trust. Nonprofits operate
        with the mission to serve the public, making accurate financial management vital
        for sustaining operations and securing funding.
      </Typography>

      <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
        At Milta, we offer specialized services in accounting for small nonprofits that
        ensure every dollar is tracked, reported, and aligned with your organizational
        goals.
      </Typography>
    </Stack>
  </Container>
</Box>


);
};

export default NonprofitBookkeepingLayout;
