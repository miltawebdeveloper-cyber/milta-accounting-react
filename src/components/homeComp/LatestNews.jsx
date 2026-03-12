import React from "react";
import { Container, Grid, Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

const posts = [
  { title: "Interview Tips", date: "March 20, 2023", img: "/post1.jpg" },
  { title: "Personal Branding", date: "March 19, 2023", img: "/post2.jpg" },
  { title: "Employee Stories", date: "March 18, 2023", img: "/post3.jpg" },
];

function LatestNews() {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Latest News
        </Typography>
        <Grid container spacing={4}>
          {posts.map((post, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ height: "100%" }}>
                <CardMedia component="img" height="160" image={post.img} alt={post.title} />
                <CardContent>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {post.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default LatestNews;
