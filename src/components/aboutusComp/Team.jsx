import React from "react";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";
import StylishDividerText from "../homeComp/StylishDividerText";
import BusinessDevelopmentTeam from "@/assets/team/Business Development Team.jpg";
import BusinessAnalyst from "@/assets/team/Business analyst.jpg";
import DigitalMarketers from "@/assets/team/DigitalMarketers.jpg";
import HR from "@/assets/team/HR.jpg";
import Accounting from "@/assets/team/accounting.jpg";
import Taxation from "@/assets/team/taxation.jpg";

// Team data with example images (update paths to your real images)
const teamMembers = [
  { name: "Business Development Team", img: BusinessDevelopmentTeam },
  { name: "Business Analyst Team", img: BusinessAnalyst },
  { name: "Digital Marketers Team", img: DigitalMarketers },
  { name: "Human Resource Team", img: HR },
  { name: "Taxation Team", img: Taxation },
  { name: "Accounting Team", img: Accounting },
];

function TeamSection() {
  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3, 6);

  const renderRow = (row) => (
    <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
      {row.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: 4,
              backgroundColor: "#ffffff",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Avatar
              src={member.img}
              alt={member.name}
              sx={{
                width: 250,
                height: 250,
                mx: "auto",
                mb: 3,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: "#ff9401",
              }}
            >
              {member.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      sx={{
        py: { xs: 4, md: 3 }, // ✅ Reduced padding here
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container maxWidth="lg">
        {/* Divider Title */}
        <StylishDividerText text="Our Team" />

        {/* Section Heading */}
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{
            color: "#1d4230",
            textTransform: "capitalize",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
            letterSpacing: "0.5px",
            mb: { xs: 3, sm: 5 },
          }}
        >
          Meet the People Behind Milta
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            color: "#000201ff",
            textTransform: "capitalize",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", sm: "16px", md: "16px" },
            letterSpacing: "0.5px",
            mb: { xs: 3, sm: 5 },
          }}
        >
          At Milta, great businesses are built with the right team. Our professionals bring
          expertise across accounting, taxation, digital marketing, HR, and business development
          to support your growth. Whether you’re a small business or a growing enterprise, our
          dedicated teams are here to guide you every step of the way.
</Typography>

{/* Rows */}       

        {/* Rows */}
        {renderRow(firstRow)}
        {renderRow(secondRow)}
      </Container>
    </Box>
  );
}

export default TeamSection;
