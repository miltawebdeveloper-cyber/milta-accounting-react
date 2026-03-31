import React from "react";
import { Box, Typography } from "@mui/material";
import ContactForm from "../common/ContactForm";

const CTA = () => {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        p: { xs: 2, sm: 3, md: 6 },
        background: "transparent",
        borderRadius: "14px",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mt: 1,
            color: "#97ba3a",
          }}
        >
          Send Us Message
        </Typography>
      </Box>

      <ContactForm />
    </Box>
  );
};

export default CTA;
