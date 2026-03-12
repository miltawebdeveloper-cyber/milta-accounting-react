import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Box, Typography, Chip, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../../api/client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const EditorsPickCarousel = () => {
  const [picks, setPicks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({ editors_pick: true });
      setPicks(data || []);
    };
    load();
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 5 }, mt: 7, position: "relative" }}>
      <Typography
        variant="h5"
        fontWeight={800}
        sx={{
          mb: 3,
          background: "linear-gradient(90deg, #ff7a18, #ffb347)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Editor’s Picks
      </Typography>

      {/* Navigation Buttons */}
      <IconButton
        className="prev-btn"
        sx={{
          position: "absolute",
          top: "55%",
          left: -12,
          zIndex: 20,
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(255,122,24,0.35)",
          "&:hover": { background: "#fff" },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <IconButton
        className="next-btn"
        sx={{
          position: "absolute",
          top: "55%",
          right: -12,
          zIndex: 20,
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(255,122,24,0.35)",
          "&:hover": { background: "#fff" },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={22}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {picks.map((p) => (
          <SwiperSlide key={p.id}>
            <Box
              onClick={() => navigate(`/us/blogs/${p.slug}`)}
              sx={{
                height: "100%",
                p: 2.5,
                borderRadius: "18px",
                cursor: "pointer",
                background:
                  "linear-gradient(135deg, rgba(255,122,24,0.35), rgba(255,179,71,0.35))",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.35)",
                boxShadow: "0 12px 30px rgba(255,122,24,0.25)",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 18px 45px rgba(255,122,24,0.45)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#5f2a00",
                  mb: 1,
                }}
              >
                {new Date(p.created_at).toDateString()}
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: "#3a1b00",
                  mb: 1,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {p.title}
              </Typography>

              <Chip
                label={p.category}
                size="small"
                sx={{
                  mt: 1,
                  fontWeight: 600,
                  background:
                    "linear-gradient(90deg, #ff7a18, #ffb347)",
                  color: "#fff",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default EditorsPickCarousel;
