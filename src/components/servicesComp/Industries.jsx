import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Factory,
  LocalHospital,
  Agriculture,
  Restaurant,
  Store,
  LocalShipping,
  AccountBalance,
  RealEstateAgent,
  BusinessCenter,
  Explore
} from '@mui/icons-material';
import StylishDividerText from '../homeComp/StylishDividerText';

const IndustriesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  // Industry data with icons
  const industries = [
    { name: 'Real Estate', icon: <RealEstateAgent /> },
    { name: 'Manufacturing', icon: <Factory /> },
    { name: 'Healthcare', icon: <LocalHospital /> },
    { name: 'Agriculture', icon: <Agriculture /> },
    { name: 'Home & Restaurant', icon: <Restaurant /> },
    { name: 'Franchise', icon: <Store /> },
    { name: 'E-commerce', icon: <BusinessCenter /> },
    { name: 'Shipping & Logistics', icon: <LocalShipping /> },
    { name: 'Small Business Accounting', icon: <AccountBalance /> }
  ];

  // Styled components
  const SectionContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    padding: theme.spacing(6, 0),
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  }));

  const IndustryCard = styled(Card)(({ theme }) => ({
    height: '140px',
    minHeight: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1d4230 0%, #2d5c45 100%)',
    color: '#ffffff',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 25px rgba(29, 66, 48, 0.3)',
      background: 'linear-gradient(135deg, #ff9401 0%, #ffaa33 100%)',
    },
  }));

  const ExploreButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#ff9401',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '1rem',
    padding: theme.spacing(1.5, 4),
    borderRadius: '0',
    minWidth: '250px',
    '&:hover': {
      backgroundColor: '#e08500',
    },
  }));

  const SectionDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: '#1d4230',
    height: '2px',
    margin: theme.spacing(4, 0),
  }));

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        {/* Main Header */}
        <Box textAlign="center" mb={2}>
            <StylishDividerText text="Industries We serve"/>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              color: '#1d4230',
              fontWeight: 700,
              fontSize: isMobile ? '1.75rem' : '2.5rem',
              textTransform: 'capitalize',
            }}
          >
            Our Focused Industries
          </Typography>
        </Box>


        {/* Description */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              fontSize: '1.1rem',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Each industry is unique and their requirements. Our industry-specific solutions are tailored to your needs to help you operate efficiently.
          </Typography>
        </Box>

        {/* Industries Grid - Strict 3 columns per row */}
        <Grid 
          container 
          spacing={3} 
          sx={{ 
            margin: '0 auto',
            justifyContent: 'center'
          }}
        >
          {industries.map((industry, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={4}
              key={index}
              sx={{
                display: 'flex',
                minHeight: '160px'
              }}
            >
              <IndustryCard sx={{ width: '100%' }}>
                <CardContent sx={{ 
                  textAlign: 'center',
                  p: 2,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:last-child': { pb: 2 }
                }}>
                  <Box sx={{ 
                    fontSize: '2.5rem',
                    mb: 1,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {industry.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#ffffff',
                      textAlign: 'center',
                      lineHeight: 1.2
                    }}
                  >
                    {industry.name}
                  </Typography>
                </CardContent>
              </IndustryCard>
            </Grid>
          ))}

        </Grid>

        {/* Explore Button */}
        <Box textAlign="center" mb={6}>
          <ExploreButton 
            variant="contained" 
            size="large"
            startIcon={<Explore />}
          >
            Explore More About Industry
          </ExploreButton>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default IndustriesSection;