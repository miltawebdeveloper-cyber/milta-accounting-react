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

  /* ===== PAGINATION LOGIC ===== */
  const totalPages = Math.ceil(filtered.length / BLOGS_PER_PAGE);

  const paginatedBlogs = filtered.slice(
    (page - 1) * BLOGS_PER_PAGE,
    page * BLOGS_PER_PAGE
  );

  /* Reset page on filter/search change */
  useEffect(() => {
    setPage(1);
  }, [search, category]);

  return (
    <Box sx={{ px: { xs: 2, md: 5 }, mt: 5 }}>
      {/* ===== SEARCH + CATEGORY ===== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: 2,
          mb: 3,
        }}
      >
        {/* SEARCH */}
        <Box sx={{ flex: 1 }}>
          <TextField
            fullWidth
            placeholder="Search blogs…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
                bgcolor: category === c ? "#ff7a18" : "#f1f1f1",
                color: category === c ? "#fff" : "#000",
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": {
                  bgcolor:
                    category === c ? "#ff7a18" : "#e0e0e0",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ===== BLOG GRID ===== */}
      <Grid container spacing={3} justifyContent="center">
        {paginatedBlogs.map((b) => (
          <Grid
            key={b.id}
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ width: "100%", maxWidth: "500px" }}>
              <BlogCard blog={b} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* ===== ORANGE GRADIENT PAGINATION ===== */}
      {totalPages > 1 && (
        <Box
          sx={{
            mt: 4,
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
                  mx: 0.3,
                  borderRadius: "12px",
                  fontWeight: 600,
                  border: "1px solid #ffd3b0",
                  color: "#ff7a18",
                  "&.Mui-selected": {
                    background:
                      "linear-gradient(135deg, #ff7a18, #ffb347)",
                    color: "#fff",
                    border: "none",
                    boxShadow:
                      "0 6px 18px rgba(255,122,24,0.45)",
                  },
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, rgba(255,122,24,0.15), rgba(255,179,71,0.15))",
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
