import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/us/blogs/${blog.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box
        sx={{
          maxWidth: 720,
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 3 },
          p: { xs: 2, sm: 2.5 },
          borderRadius: "18px",

          /* 🌿 Green Glass Gradient */
          background:
            "linear-gradient(135deg, rgba(11,61,46,0.18), rgba(20,90,67,0.18))",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(11,61,46,0.25)",

          boxShadow: "0 10px 28px rgba(11,61,46,0.18)",
          transition: "all 0.35s ease",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 18px 45px rgba(11,61,46,0.35)",
          },
        }}
      >
        {/* TEXT CONTENT */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "13px",
              color: "#1e4d3a",
              mb: 0.8,
              fontWeight: 500,
            }}
          >
            {new Date(blog.created_at).toDateString()} • {blog.author}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "17px", sm: "19px" },
              fontWeight: 700,
              lineHeight: 1.35,
              mb: 1,
              color: "#0b3d2e",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#355f51",
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.excerpt}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default BlogCard;
