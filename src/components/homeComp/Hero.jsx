import React, { useRef } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const slides = [
  {
    title: "Expert Outsourcing <br> Accounting & Bookkeeping Services",
    description:
      "Trusted by 100+ Clients Across 12 Countries. Proudly serving small businesses, growing enterprises, and Fortune 500 companies.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
       alt: "Outsourcing accounting and bookkeeping services for global businesses",
  },
  {
    title: "Tax Planning and <br> Preparation Services in the USA!",
    description:
      "Professional US Expat Tax Service for Federal, State, and City Tax Preparation.",
    image:
      "https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg",
      alt: "Tax planning and preparation services for businesses in the USA",
  },
  {
    title: "The Best CPA Service <br> for Small Businesses in the USA",
    description: "We offer the best CPA service for small businesses in the USA.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
       alt: "Certified public accountant services for small businesses in the USA",
  },
  {
    title: "Boost Your Business <br> with a Virtual Assistant!",
    description: "Get the skilled help you need to scale faster.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
       alt: "Virtual assistant helping businesses improve productivity",
  },
  {
    title: "Expert Financial Controller <br> Services in the USA",
    description: "Improve your accounting systems with experts.",
    image:
      "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg",
       alt: "Professional financial controller services for business accounting",
  },
];

export default function BannerSlider() {
  const navigate = useNavigate();

  // ✅ Navigation Button Refs
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Background Animation */}
      <style>
        {`
          @keyframes waveMotion {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* ✅ Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}

        // ✅ FIX: Attach navigation after swiper loads
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        style={{ width: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                minHeight: { xs: "70vh", sm: "75vh", md: "80vh", lg: "85vh" },
                display: "flex",
                alignItems: "center",
                background:
                  "linear-gradient(270deg,#2b6d2a,#5d9031,#85ac37,#2b6d2a)",
                backgroundSize: "400% 400%",
                animation: "waveMotion 15s ease infinite",
                px: { xs: 2, sm: 4, md: 6 },
              }}
            >
              <Container maxWidth={false} sx={{ maxWidth: "1300px" }}>
                <Grid
                  container
                  alignItems="center"
                  spacing={{ xs: 3, sm: 4, md: 6 }}
                  sx={{
                    flexDirection: { xs: "column-reverse", md: "row" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {/* TEXT */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ maxWidth: 650, mx: { xs: "auto", md: 0 } }}>
                      <Typography

                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          fontSize: {
                            xs: "1.6rem",
                            sm: "2.2rem",
                            md: "3rem",
                            lg: "3.1rem",
                          },
                          lineHeight: 1.3,
                          color: "#fff",
                        }}
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />

                      <Typography
                        sx={{
                          mb: 4,
                          fontSize: {
                            xs: "0.95rem",
                            sm: "1.1rem",
                            md: "1.25rem",
                          },
                          lineHeight: 1.7,
                          color: "#f2f2f2",
                        }}
                      >
                        {slide.description}
                      </Typography>

                      <Button
                        variant="contained"
                        onClick={() => navigate("/contact")}
                        sx={{
                          background: "#ff9401",
                          color: "#fff",
                          fontWeight: 600,
                          px: { xs: 4, md: 5 },
                          py: { xs: 1, md: 1.3 },
                          borderRadius: "50px",
                          textTransform: "none",
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                          "&:hover": { background: "#ffb000" },
                        }}
                      >
                        Contact Us
                      </Button>
                    </Box>
                  </Grid>

                  {/* IMAGE */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    justifyContent={{ xs: "center", md: "flex-end" }}
                  >
                    <Box
                      sx={{
                        width: { xs: 220, sm: 280, md: 450, lg: 520 },
                        height: { xs: 220, sm: 280, md: 450, lg: 520 },
                        borderRadius: "50%",
                        overflow: "hidden",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                      }}
                    >
                      <Box
                        component="img"
                        src={slide.image}
                        alt={slide.alt}

                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Navigation Arrows */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, sm: 24, md: 30 },
          right: { xs: 16, sm: 24, md: 30 },
          display: "flex",
          gap: { xs: 1, md: 2 },
          zIndex: 10,
        }}
      >
        <Box ref={prevRef} sx={arrowStyle}>
          <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
        </Box>

        <Box ref={nextRef} sx={arrowStyle}>
          <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
        </Box>
      </Box>
    </Box>
  );
}

/* Arrow Button Styling */
const arrowStyle = {
  width: { xs: 35, sm: 40, md: 45 },
  height: { xs: 35, sm: 40, md: 45 },
  border: "2px solid #fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#fff",
  backgroundColor: "rgba(255,255,255,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.25)",
  },
};
