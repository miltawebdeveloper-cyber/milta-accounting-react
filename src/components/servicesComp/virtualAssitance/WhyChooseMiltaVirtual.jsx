// src/components/servicesComp/virtualAssistant/WhyChooseMiltaVA.jsx
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const WhyChooseMiltaVA = () => {
  const highlights = [
    {
      title: "Customized Solutions",
      desc: "We recognize that every business has its own unique goals, challenges, and operational needs. That’s why our services are thoughtfully designed and fully customizable to align with your specific objectives. We take the time to understand your requirements in detail, allowing us to deliver tailored solutions that drive efficiency, improve performance, and support your growth. Our focus is not just on providing services, but on delivering measurable outcomes that create real value and long-term success for your business.",
      icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    },
    {
      title: "Expert Team",
      desc: "Our virtual assistants are skilled, knowledgeable, and dedicated to providing top-notch support. Whether you need help with accounting, customer service, or administrative work — we’ve got you covered.",
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
    },
    {
      title: "Advanced Technology",
      desc: "We leverage cutting-edge tools and software to ensure seamless service delivery, including bookkeeping platforms, project management tools, and communication channels.",
      icon: "https://cdn-icons-png.flaticon.com/512/2936/2936631.png",
    },
    {
      title: "Commitment to Confidentiality",
      desc: "Your business information is completely safe and secure with us. We understand the importance of confidentiality and treat your data with the highest level of care and responsibility. Our team follows strict data security protocols and industry best practices to ensure that all your information is protected from unauthorized access, misuse, or disclosure.",
      icon: "https://cdn-icons-png.flaticon.com/512/942/942751.png",
    },
    {
      title: "Scalability",
      desc: "Our services are designed to grow alongside your business, providing consistent, reliable support as your needs evolve. We understand that every stage of your journey comes with new challenges and opportunities, which is why we offer flexible solutions customized to your changing requirements. Whether you’re just starting or scaling to the next level, our team is committed to adapting with you—ensuring seamless support, improved efficiency, and long-term success every step of the way.",
      icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              background:
                "linear-gradient(to top, hsl(152, 80%, 12%), hsl(160, 35%, 25%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose Miltafs for Virtual Assistant Services?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              maxWidth: "1200px",
              width: "100%",
              mx: "auto",
            }}
          >
            We stand out as a trusted partner for small businesses looking for
            efficient, reliable, and scalable virtual assistant solutions.
          </Typography>
        </Box>

        {/* Content Grid */}
        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  maxWidth: "1200px",
                  width: "100%",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  textAlign: { xs: "center", sm: "left" },
                  backgroundColor: "#f8fff9",
                  borderRadius: 3,
                  p: { xs: 3, sm: 4 },
                  boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 28px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    width: 70,
                    height: 70,
                    objectFit: "contain",
                    mb: { xs: 2, sm: 0 },
                    mr: { sm: 3 },
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontFamily: "'Poppins', sans-serif",
                      mb: 1,
                      color: "#0a382a",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseMiltaVA;
