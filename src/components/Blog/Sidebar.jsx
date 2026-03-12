import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

export default function SidebarLatest({ blogs }) {
  return (
    <Box sx={{ p: 2, bgcolor: "#f8f8f8", borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>Latest Posts</Typography>
      <List>
        {blogs.map((b) => (
          <ListItem key={b.id}>{b.title}</ListItem>
        ))}
      </List>
    </Box>
  );
}
