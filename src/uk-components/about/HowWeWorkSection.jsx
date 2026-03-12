// src/components/HowWeWorkSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const HowWeWorkSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 7, md: 8 },
        px: { xs: 2, sm: 3 },
        backgroundColor: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          maxWidth: "1100px",
          textAlign: "center",
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              color: "#97ba3a",
              mb: 1,
              fontWeight: 600,
              fontSize: { xs: 14, sm: 15, md: 16 },
              letterSpacing: 0.5,
            }}
          >
            ● Our Approach
          </Typography>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              fontFamily: "'Poppins', sans-serif",
              color: "#2b6d2a",
              lineHeight: 1.3,
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "34px",
              },
            }}
          >
            How We Work
          </Typography>
        </motion.div>

        {/* Paragraphs */}
        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            textAlign: { xs: "left", md: "center" }, // Better mobile readability
          }}
        >
          {/* Paragraph 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 3, md: 4 },
                fontSize: { xs: 15, sm: 16, md: 17 },
                lineHeight: { xs: 1.8, md: 1.9 },
                color: "#333",
              }}
            >
              Every partnership starts with listening. We take the time to
              understand your business, your goals, and the challenges you’re
              facing before offering any solutions.
            </Typography>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 4 },
                fontSize: { xs: 15, sm: 16, md: 17 },
                lineHeight: { xs: 1.8, md: 1.9 },
                color: "#333",
              }}
            >
              From there, we provide accounting and bookkeeping support that
              fits your needs, no unnecessary extras. As your business grows,
              our support adapts with you. We offer continuous assistance, clear
              insights, and practical guidance to help you plan and make
              informed decisions.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HowWeWorkSection;