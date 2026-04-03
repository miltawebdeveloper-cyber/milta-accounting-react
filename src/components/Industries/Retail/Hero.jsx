import React, { useState } from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomButton from "../../common/CustomButton";
import ContactPopup from "../../common/ContactPopup";

const SplitHero = ({
  title = "Accounting & Tax Services Built for Retail Businesses",
  subtitle,
  points = [],
  secondaryBtnText = "Reach Out Us",
  onSecondaryClick,
}) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const handleSecondaryClick = onSecondaryClick || (() => setContactModalOpen(true));

  return (
    <>
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1d4230, #0f2b1d)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          py: { xs: 8, md: 10 },
          px: 2,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid
              item xs={12} md={10}
              sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}
            >
              <Typography variant="h1" fontWeight={700}
                sx={{ fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" }, mb: 2, lineHeight: 1.2, color: "#ff9401" }}
              >
                {title}
              </Typography>

              {subtitle && (
                <Typography sx={{ fontSize: "1.2rem", color: "#fff", opacity: 0.9, mb: 3, maxWidth: "600px" }}>
                  {subtitle}
                </Typography>
              )}

              {points.length > 0 && (
                <Stack spacing={1.5} sx={{ mb: 4, maxWidth: "550px" }}>
                  {points.map((point, index) => (
                    <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#fff" }}>
                      <ArrowForwardIosIcon sx={{ fontSize: 18, color: "#ff9401", mr: 1 }} />
                      <Typography>{point}</Typography>
                    </Box>
                  ))}
                </Stack>
              )}

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }} alignItems="center" justifyContent="center">
                <CustomButton
                  onClick={handleSecondaryClick}
                  sx={{
                    backgroundColor: "transparent", color: "#fff", px: 4, py: 1.6,
                    borderRadius: "8px", border: "2px solid #ff9401", fontWeight: 600,
                    textTransform: "none", fontSize: "1rem",
                    "&:hover": { backgroundColor: "rgba(255,148,1,0.15)", transform: "translateY(-3px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" },
                    transition: "0.3s ease", width: { xs: "100%", sm: "auto" },
                  }}
                >
                  {secondaryBtnText}
                </CustomButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ position: "absolute", top: "-50px", right: "-50px", width: 200, height: 200, backgroundColor: "rgba(255,148,1,0.2)", borderRadius: "50%", zIndex: 1 }} />
        <Box sx={{ position: "absolute", bottom: "-80px", left: "-80px", width: 300, height: 300, backgroundColor: "rgba(255,148,1,0.15)", borderRadius: "50%", zIndex: 1 }} />
      </Box>
      <ContactPopup open={contactModalOpen} handleClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default SplitHero;
