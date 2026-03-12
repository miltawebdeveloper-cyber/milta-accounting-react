import React from "react";
import { Box, Grid, Typography, Container, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
"Enhanced Accuracy: Our double-entry verification and reconciliation processes significantly reduce errors.",
"Improved Decision-Making: Accurate and timely financial data enables better strategic planning.",
"Regulatory Compliance: We ensure all financial records meet US tax and regulatory standards.",
"Time Management: Free up resources to focus on core business activities.",
"Business Growth: Streamline operations, allowing your business to scale efficiently.",
];

const BenefitsDataEntryLayout = () => {
return (
<Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#fffefb" }}>
<Container
maxWidth={false}
sx={{
maxWidth: "1300px !important",
px: { xs: 2, sm: 4, md: 6 },
}}
>
<Grid
container
spacing={{ xs: 4, md: 6 }}
alignItems="center"
justifyContent="center"
>
{/* Left Vertical Accent (hidden on mobile) */}
<Grid
item
xs={12}
md={4}
sx={{
display: { xs: "none", md: "flex" },
justifyContent: "flex-end",
mb: { xs: 3, md: 0 },
}}
>
<Box
sx={{
width: "6px",
height: { md: "340px" },
borderRadius: "10px",
background:
"linear-gradient(180deg, #ffb84d 0%, #ff9401 50%, #e67600 100%)",
boxShadow: "0 4px 20px rgba(255, 148, 1, 0.4)",
}}
/> </Grid>


      {/* Right Content */}
      <Grid item xs={12} md={8}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#1a1a1a",
            fontFamily: "'Poppins', sans-serif",
            textAlign: { xs: "center", md: "left" },
            lineHeight: 1.3,
          }}
        >
          Benefits of Our Data Entry Services in the{" "}
          <Box component="span" sx={{ color: "#ff9401" }}>
            USA
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#555",
            mb: 3,
            lineHeight: 1.7,
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "90%" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          We help your business maintain accurate records, enhance
          decision-making, and stay compliant while saving time and driving
          growth.
        </Typography>

        <Stack
          spacing={2}
          sx={{
            mx: { xs: "auto", md: 0 },
            width: { xs: "100%", sm: "90%", md: "85%" },
          }}
        >
          {benefits.map((point, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "row",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: "#ff9401",
                  mr: 1.5,
                  mt: "3px",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  color: "#444",
                  lineHeight: 1.6,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: "100%",
                }}
              >
                {point}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Typography
          sx={{
            mt: 4,
            fontStyle: "italic",
            color: "#0d3731",
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Example: A small IT firm achieved 15% growth after outsourcing data
          entry, which allowed them to focus on client acquisition.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Box>


);
};

export default BenefitsDataEntryLayout;
