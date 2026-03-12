import {
  Box,
  Grid,
  TextField,
  Chip,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getBlogs } from "../../api/client";
import BlogCard from "./BlogCard";

const categories = [
  "All",
  "SEO",
  "AI",
  "Accounting",
  "Tax",
  "Finance",
  "Digital Marketing",
];

const BLOGS_PER_PAGE = 6;

const BlogGridSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({ 
        table: "blogs_uk", 
        order: "created_at", 
        ascending: false 
      });
      setBlogs(data || []);
    };
    load();
  }, []);

  /* ===== FILTER ===== */
  const filtered = blogs.filter((b) => {
    const matchCategory = category === "All" || b.category === category;
    const matchSearch = b.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  /* ===== PAGINATION ===== */
  const totalPages = Math.ceil(filtered.length / BLOGS_PER_PAGE);

  const paginatedBlogs = filtered.slice(
    (page - 1) * BLOGS_PER_PAGE,
    page * BLOGS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [search, category]);

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        mt: 6,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* ================= SEARCH + CATEGORY ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: 2,
          mb: 4,
        }}
      >
        {/* SEARCH */}
        <Box sx={{ flex: 1, width: "100%" }}>
          <TextField
            fullWidth
            placeholder="Search blogs…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              bgcolor: "#fff",
              borderRadius: "14px",
              "& fieldset": {
                borderColor: "rgba(0,0,0,0.15)",
              },
              "&:hover fieldset": {
                borderColor: "#2b6d2a",
              },
              "& input": {
                fontFamily: "'Poppins', sans-serif",
                fontSize: "15px",
              },
            }}
          />
        </Box>

        {/* CATEGORIES */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            gap: 1,
          }}
        >
          {categories.map((c) => (
            <Chip
              key={c}
              label={c}
              onClick={() => setCategory(c)}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                borderRadius: "10px",
                px: 1.5,
                bgcolor:
                  category === c
                    ? "#2b6d2a"
                    : "rgba(0,0,0,0.06)",
                color:
                  category === c
                    ? "#fff"
                    : "#1a1a1a",
                transition: "0.25s",
                cursor: "pointer",

                "&:hover": {
                  bgcolor:
                    category === c
                      ? "#2b6d2a"
                      : "rgba(0,0,0,0.12)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ================= BLOG GRID ================= */}
      <Grid container spacing={4} justifyContent="center">
        {paginatedBlogs.map((b) => (
          <Grid
            key={b.id}
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "490px" }}>
              <BlogCard blog={b} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  mx: 0.4,
                  borderRadius: "12px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  border: "1px solid rgba(0,0,0,0.15)",
                  color: "#2b6d2a",

                  "&.Mui-selected": {
                    bgcolor: "#97ba3a",
                    color: "#1a1a1a",
                    border: "none",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                  },

                  "&:hover": {
                    bgcolor: "rgba(255,176,77,0.25)",
                  },
                }}
              />
            )}
          />
        </Box>
      )}
    </Box>
  );
};

export default BlogGridSection;
