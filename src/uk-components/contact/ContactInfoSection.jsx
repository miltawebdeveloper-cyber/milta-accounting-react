// src/components/ContactInfoSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";

import { motion } from "framer-motion";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const contactItems = [
  {
    icon: <LocationOnOutlinedIcon sx={{ color: "#2b6d2a" }} />,
    label: "Office Address",
    details: (
      <>
        No. 175, Sri Sai Tower, 3rd Floor,
        <br />
        Bharathi Colony Rd, Peelamedu,
        <br />
        Coimbatore, Tamil Nadu 641004, India
      </>
    ),
  },
  {
    icon: <EmailOutlinedIcon sx={{ color: "#2b6d2a" }} />,
    label: "Email Address",
    details: <>info@miltafs.com</>,
  },
  {
    icon: <CallOutlinedIcon sx={{ color: "#2b6d2a" }} />,
    label: "Contact Number",
    details: (
      <>

        India : +91 96001 03723
      </>
    ),
  },
];

const socialLinks = [
  {
    icon: <LinkedInIcon fontSize="small" />,
    url: "https://www.linkedin.com/company/milta-accounding-services-pvt-ltd/",
  },
  {
    icon: <FacebookIcon fontSize="small" />,
    url: "https://www.facebook.com/miltaaccountingservices/",
  },
  {
    icon: <InstagramIcon fontSize="small" />,
    url: "https://www.instagram.com/milta_accountings/",
  },
  {
    icon: <YouTubeIcon fontSize="small" />,
    url: "https://www.youtube.com/@milta-accounting-service",
  },
];

const ContactInfoSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          {/* ================= LEFT CONTENT ================= */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  color: "#97ba3a",
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                ● Contact Info
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.25,
                  mb: 3,
                  color: "#2b6d2a",
                  fontSize: {
                    xs: "34px",
                    md: "42px",
                  },
                }}
              >
                Looking for Reliable
                <br />
                UK Accounting &
                <br />
                Financial Support?
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  maxWidth: { xs: "100%", md: 420 },
                  lineHeight: 1.8,
                  fontSize: {
                    xs: "16px",
                    md: "16px",
                  },
                }}
              >
                Our professional team supports UK businesses with accounting,
                bookkeeping, tax compliance, and financial advisory services,
                ensuring accuracy, transparency, and growth.
              </Typography>
            </motion.div>
          </Grid>

          {/* ================= RIGHT CONTACT INFO ================= */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Box sx={{ pl: { md: 6 } }}>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  {contactItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: idx * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <Box
                        display="flex"
                        alignItems="flex-start"
                        mb={4}
                        gap={3}
                        sx={{
                          flexDirection: { xs: "column", sm: "row" },
                        }}
                      >
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            color: "#fff",
                            borderRadius: "50%",
                            backgroundColor: "#97ba3a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Box>
                          <Typography fontSize={14} color="text.secondary">
                            {item.label}
                          </Typography>
                          <Typography fontWeight={600}>
                            {item.details}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}

                  <Divider sx={{ my: 4 }} />
                </Box>

                {/* Social Icons */}
                <Box display="flex" gap={2} flexWrap="wrap">
                  {socialLinks.map((social, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: idx * 0.15,
                      }}
                      viewport={{ once: true }}
                    >
                      <IconButton
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          border: "1px solid #e5e7eb",
                          color: "#2b6d2a",
                          width: 40,
                          height: 40,
                          "&:hover": {
                            backgroundColor: "#97ba3a",
                            color: "#fff",
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactInfoSection;
