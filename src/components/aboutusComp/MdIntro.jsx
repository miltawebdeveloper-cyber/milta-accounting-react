import React from "react";
import { Box, Container, Grid, Typography, Avatar, Paper } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

function MDSection() {
  const mds = [
    {
      name: "Mohammed Rizwan",
      designation: "Managing Director",
      image: "/images/md1.jpg",
      description:
        "Mohammed Rizwan holds a Bachelor's degree in Commerce and brings over a decade of hands-on experience in the financial services industry. His expertise spans accounting, strategic planning, and client relationship management.",
      email: "mohammed@miltafs.com",
      phone: "(813) 560-0065",
    },
    {
      name: "Raja Vignesh",
      designation: "Managing Director",
      image: "/images/md2.jpg",
      description:
        "Raja Vignesh is a graduate with a Bachelor's degree in Business Administration and has more than 10 years of experience in the financial sector. He specializes in growing the business, improving operations, and leading teams.",
      email: "conway@miltafs.com",
      phone: "(813) 560-0065",
    },
  ];

  const themeColor = "#ff9401";

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        backgroundColor: "#f3f0e6",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{
            color: "#0d3731",
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.6rem" },
            mb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 2, sm: 0 },
          }}
        >
          The Visionary Behind the Growth
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, sm: 6 }}
          justifyContent="center"
        >
          {mds.map((md, index) => (
            <Grid item xs={12} sm={10} md={5} key={index}>
              <Paper
                elevation={5}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                {/* Top Banner */}
                <Box
                  sx={{
                    backgroundColor: themeColor,
                    height: { xs: 80, sm: 100 },
                    position: "relative",
                  }}
                >
                  <Avatar
                    src={md.image}
                    alt={md.name}
                    sx={{
                      width: { xs: 110, sm: 130, md: 140 },
                      height: { xs: 110, sm: 130, md: 140 },
                      border: "4px solid #fff",
                      position: "absolute",
                      bottom: { xs: -55, sm: -65, md: -70 },
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Box>

                {/* Card Content */}
                <Box
                  sx={{
                    pt: { xs: 8, sm: 10, md: 11 },
                    pb: { xs: 3, sm: 4 },
                    px: { xs: 2.5, sm: 3, md: 4 },
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#1d4230"
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
                    }}
                  >
                    {md.name}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {md.designation}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#333",
                      mb: 3,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                    }}
                  >
                    {md.description}
                  </Typography>

                  {/* Contact icons */}
                  <Box display="flex" justifyContent="center" gap={2}>
                    <a
                      href={`mailto:${md.email}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "45px",
                        height: "45px",
                        backgroundColor: themeColor,
                        color: "white",
                        borderRadius: "50%",
                        textDecoration: "none",
                        transition: "background-color 0.3s",
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = "#e68a00"}
                      onMouseOut={(e) => e.target.style.backgroundColor = themeColor}
                    >
                      <Email sx={{ fontSize: { xs: 20, sm: 24 } }} />
                    </a>

                    <a
                      href={`tel:${md.phone.replace(/[^\d+]/g, '')}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "45px",
                        height: "45px",
                        backgroundColor: themeColor,
                        color: "white",
                        borderRadius: "50%",
                        textDecoration: "none",
                        transition: "background-color 0.3s",
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = "#e68a00"}
                      onMouseOut={(e) => e.target.style.backgroundColor = themeColor}
                    >
                      <Phone sx={{ fontSize: { xs: 20, sm: 24 } }} />
                    </a>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MDSection;