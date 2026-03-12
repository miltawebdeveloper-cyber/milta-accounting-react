import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/uk/blogs/${blog.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 780,
          mx: "auto",
          p: { xs: 2.5, sm: 3 },
          borderRadius: "20px",
          backgroundColor: "#fff",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
          transition: "all 0.35s ease",
          fontFamily: "'Poppins', sans-serif",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
            borderColor: "#2b6d2a",
          },
        }}
      >
        {/* TOP META INFO */}
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#2b6d2a",
            mb: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {new Date(blog.created_at).toDateString()}
          <Box component="span" sx={{ color: "#1a1a1a" }}>
            • {blog.author}
          </Box>
        </Typography>

        {/* BLOG TITLE */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "18px", sm: "22px" },
            lineHeight: 1.3,
            mb: 1.2,
            color: "#1a1a1a",

            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {blog.title}
        </Typography>

        {/* BLOG EXCERPT */}
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "15px" },
            lineHeight: 1.7,
            color: "rgba(0,0,0,0.65)",
            mb: 2,

            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {blog.excerpt}
        </Typography>

        {/* READ MORE LINK STYLE */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            fontSize: "14px",
            fontWeight: 600,
            color: "#97ba3a",
            transition: "0.3s",

            "&:hover": {
              color: "#2b6d2a",
            },
          }}
        >
          Read More →
        </Box>
      </Box>
    </Link>
  );
};

export default BlogCard;
