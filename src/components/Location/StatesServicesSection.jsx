import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Container,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { statesData } from "./statesData";
import { Link } from "react-router-dom";

const StatesServicesSection = () => {
  const stateKeys = Object.keys(statesData);
  const [activeState, setActiveState] = useState(stateKeys[0]);

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        background: "linear-gradient(135deg, #09271bff 0%, #063d1eff 100%)",
        display: "flex",
        justifyContent: "center",
        color: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" fontWeight={700} mb={2}>
            Serving Businesses Across{" "}
            <Box component="span" sx={{ color: "#FFA500" }}>
              Key US States
            </Box>
          </Typography>
          <Typography variant="body1" color="#e0f0d9">
            We currently support clients in the following US states:
          </Typography>
          <Typography variant="body1" color="#e0f0d9" mt={1}>
            Our team understands{" "}
            <Box component="span" sx={{ color: "#FFA500" }}>
              state-specific accounting requirements
            </Box>
            , sales tax rules, payroll compliance, and reporting standards,
            allowing us to deliver reliable financial support regardless of your
            location.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* LEFT SIDEBAR */}
          <Box
            sx={{
              width: { xs: "100%", md: 250 },
              flexShrink: 0,
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <List disablePadding>
              {stateKeys.map((state) => {
                const { description, services } = statesData[state];
                const isActive = activeState === state;

                return (
                  <Box key={state}>
                    <ListItemButton
                      selected={isActive}
                      onClick={() => setActiveState(state)}
                      sx={{
                        color: "#ffffff",
                        transition: "all 0.3s ease",
                        "&.Mui-selected": {
                          background:
                            "linear-gradient(135deg, rgba(255,165,0,0.35), rgba(255,140,0,0.2))",
                          backdropFilter: "blur(10px)",
                          borderLeft: "4px solid #FFA500",
                          boxShadow:
                            "inset 0 0 0 1px rgba(255,255,255,0.25)",
                        },
                        "&.Mui-selected:hover": {
                          background:
                            "linear-gradient(135deg, rgba(255,165,0,0.45), rgba(255,140,0,0.3))",
                        },
                        "&:hover": {
                          backgroundColor: "rgba(255, 165, 0, 0.18)",
                          backdropFilter: "blur(6px)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={state.replace(/([A-Z])/g, " $1").trim()}
                        primaryTypographyProps={{
                          fontWeight: isActive ? 600 : 500,
                        }}
                      />
                    </ListItemButton>

                    {/* Mobile-only content */}
                    {isActive && (
                      <Box
                        sx={{
                          display: { xs: "block", md: "none" },
                          pl: 2,
                          pr: 2,
                          py: 2,
                          borderTop: "1px solid rgba(255,255,255,0.2)",
                          backgroundColor: "rgba(255,255,255,0.05)",
                          borderRadius: 1,
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          gutterBottom
                          color="#a0e7a0"
                        >
                          Serving Businesses in{" "}
                          {state.replace(/([A-Z])/g, " $1").trim()}
                        </Typography>
                        <Typography color="#e0f0d9" mb={2}>
                          {description}
                        </Typography>
                        <List>
                          {services.map((service, index) => (
                            <ListItemButton
                              key={index}
                              component={Link}
                              to={service.url} // updated
                              sx={{
                                mb: 1,
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: 1,
                                "&:hover": {
                                  backgroundColor: "rgba(255,255,255,0.1)",
                                },
                                color: "#ffffff",
                              }}
                            >
                              <ArrowForwardIosIcon
                                sx={{
                                  fontSize: 16,
                                  mr: 1,
                                  color: "#FFA500",
                                }}
                              />
                              <ListItemText primary={service.name} /> {/* updated */}
                            </ListItemButton>
                          ))}
                        </List>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </List>
          </Box>

          {/* RIGHT CONTENT for desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
              backgroundColor: "rgba(255,255,255,0.05)",
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              color="#a0e7a0"
            >
              Serving Businesses in{" "}
              {activeState.replace(/([A-Z])/g, " $1").trim()}
            </Typography>

            <Typography color="#e0f0d9" mb={3}>
              {statesData[activeState].description}
            </Typography>

            <List>
              {statesData[activeState].services.map((service, index) => (
                <ListItemButton
                  key={index}
                  component={Link}
                  to={service.url} // updated
                  sx={{
                    mb: 1,
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                    color: "#ffffff",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{ fontSize: 16, mr: 1, color: "#FFA500" }}
                  />
                  <ListItemText primary={service.name} /> {/* updated */}
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StatesServicesSection;
