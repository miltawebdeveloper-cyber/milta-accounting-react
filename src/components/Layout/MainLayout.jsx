import React from 'react';
import { Box, Container, CssBaseline, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';



const MainLayout = ({ children }) => {
  const theme = useTheme();
  // Check if screen size is 'md' (medium) or larger
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
       

        {/* Use a MUI Container to center content and limit max-width */}
        <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          {children}
        </Container>

       
      </Box>
    </React.Fragment>
  );
};

export default MainLayout;