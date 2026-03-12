import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* SERVICES DATA */
const services = [
  {
    title: "Bookkeeping Service",
    description:
      "We create customized bookkeeping solutions for small and growing businesses. Speak with our bookkeeping professionals and get a free consultation today.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    link: "/uk/bookkeeping-services-for-small-business",
  },
  {
    title: "Accounts Payable Service",
    description:
      "We provide a comprehensive outsourced accounts payable service to simplify your financial operations and improve efficiency.",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
    link: "/uk/accounts-payable-services-in-uk",
    featured: true,
  },
  {
    title: "Payroll Outsourcing Service",
    description:
      "Fully managed payroll services for small businesses, SMEs, and growing organizations across the UK.",
    icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    link: "/uk/payroll-services-for-small-business",
  },
  {
    title: "Accounts Receivable Service",
    description:
      "Optimize your cash collection cycle, improve customer payment experience, and prevent revenue leakage before it impacts cash flow.",
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    link: "/uk/accounts-receivable-services-in-uk",
  },
  {
    title: "Virtual Accounting Assistance",
    description:
      "Dependable virtual accounting services in the UK. Our experienced online accountants ensure accurate and efficient financial management.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    link: "/uk/virtual-assistant-services-in-the-uk",
  },
  {
    title: "Digital Marketing Service",
    description:
      "Best digital marketing services in the UK. Boost your online presence, drive traffic, and increase sales with our expert marketing solutions.",
    icon: "https://cdn-icons-png.flaticon.com/512/1968/1968641.png",
    link: "/uk/best-digital-marketing-service-in-uk",
  },
];

const ServicesSection = () => {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 16 },
        backgroundColor: "#f5f7f8",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="xl">
        {/* ================= HEADER ================= */}
        <Box textAlign="center" mb={{ xs: 5, md: 9 }}>
          <Typography
            sx={{
              color: "#97ba3a",
              fontWeight: 600,
              mb: 2,
              fontSize: "15px",
            }}
          >
            ● Our Services
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontWeight: 600,
              lineHeight: 1.25,
              maxWidth: 650,
              mx: "auto",
              fontSize: {
                xs: "22px",
                sm: "30px",
                md: "42px",
              },
              color: "#2b6d2a",
            }}
          >
            The largest truly global wealth manager
          </Typography>
        </Box>

        {/* ================= FLEXBOX GRID ================= */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {services.map((item, index) => {
            const direction = index % 2 === 0 ? -80 : 80;

            return (
              <Box
                key={index}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 16px)",
                    md: "calc(33.333% - 32px)",
                  },
                  maxWidth: {
                    xs: 400,
                    sm: "none",
                  },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: direction }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "16px",
                      padding: {
                        xs: "20px 16px",
                        sm: "32px 24px",
                        md: "40px 32px",
                      },
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)",
                      background: item.featured
                        ? "linear-gradient(180deg, #2b6d2a, #97ba3a)"
                        : "#fff",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        transform: { md: "translateY(-8px)" },
                      },
                    }}
                  >
                    {/* CONTENT - Always visible */}
                    <Box>
                      {/* ICON */}
                      <Box sx={{ width: { xs: 45, sm: 55 }, height: { xs: 45, sm: 55 }, mb: 2 }}>
                        <Box
                          component="img"
                          src={item.icon}
                          alt={item.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            filter: item.featured
                              ? "brightness(0) invert(1)"
                              : "none",
                          }}
                        />
                      </Box>

                      {/* TITLE */}
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: {
                            xs: "0.95rem",
                            sm: "1rem",
                            md: "1.1rem",
                          },
                          mb: 1.5,
                          color: item.featured ? "#fff" : "#2b6d2a",
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* DESCRIPTION */}
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.85rem",
                            sm: "0.9rem",
                            md: "0.95rem",
                          },
                          lineHeight: 1.6,
                          color: item.featured
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(0,0,0,0.7)",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>

                    {/* BUTTON */}
                    <Box mt={{ xs: 2, sm: 3, md: 4 }}>
                      <Button
                        component={Link}
                        to={item.link}
                        fullWidth
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          borderRadius: "30px",
                          px: 2,
                          py: { xs: 0.75, sm: 1 },
                          fontSize: { xs: "0.8rem", sm: "0.9rem" },
                          backgroundColor: item.featured
                            ? "#ffffff"
                            : "#2b6d2a",
                          color: item.featured
                            ? "#2b6d2a"
                            : "#fff",
                          "&:hover": {
                            backgroundColor: item.featured
                              ? "rgba(255,255,255,0.85)"
                              : "#245c23",
                          },
                        }}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;