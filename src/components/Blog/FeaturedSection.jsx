import { Box, Grid, Typography, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { getBlogs } from "../../api/client";
import { useEffect, useState } from "react";

const FeaturedSection = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({ 
        featured: true, 
        order: "created_at", 
        ascending: false, 
        limit: 2 
      });
      setFeatured(data);
    };
    load();
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 5 }, mt: 4 }}>
      <Grid container spacing={3}>
        {featured.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Box>
              <img
                src={item.image_url}
                alt={item.title}
                style={{ width: "100%", borderRadius: 12 }}
              />

              <Typography
                variant="h5"
                component={Link}
                to={`/us/blogs/${item.slug}`}
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: 700,
                  mt: 2,
                  display: "block"
                }}
              >
                {item.title}
              </Typography>

              <Typography sx={{ color: "gray" }}>
                {item.author} — {new Date(item.created_at).toDateString()}
              </Typography>

              <Chip label={item.category} size="small" sx={{ mt: 1 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedSection;
