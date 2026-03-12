import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Container,
  Typography,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import logo from "../../assets/logo.svg";

export default function UkHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState({});

  const navItems = [
    { label: "Home", path: "/uk" },
    { label: "About", path: "/uk/about" },
     { label: "Why Milta", path: "/uk/why-milta" },
    {
      label: "Services",
      path: "/uk/services",
      submenu: [
        { label: "Bookkeeping Services", to: "/uk/book-keeping" },
        { label: "Tax Planning and Preparation Services", to: "/uk/tax-planning" },
        { label: "Digital Marketing", to: "/uk/digital-marketing" },
        { label: "Data Entry Services", to: "/uk/data-entry" },
        { label: "Controller Service", to: "/uk/controller-service" },
        { label: "Accounting Outsourcing", to: "/uk/accounting-outsourcing" },
        { label: "Accounting Payable", to: "/uk/accounts-payable" },
        { label: "Accounts Receivable", to: "/uk/accounts-receivable" },
        { label: "Financial Reporting", to: "/uk/financial-reporting" },
        { label: "Payroll Outsourcing", to: "/uk/payroll-outsourcing" },
        { label: "Invoice Processing", to: "/uk/invoice-processing" },
      ],
    },
    {
      label: "Industry",
      path: "/uk/industry",
      submenu: [
        { label: "Book Keeping", path: "/uk/book-keeping" },
        { label: "Contractors", to: "/uk/constructor-companies" },
        { label: "Real Estate", to: "/uk/real-estate" },
        { label: "Manufacturing", to: "/uk/manufacturing" },
        { label: "Healthcare", to: "/uk/health-care" },
        { label: "Non-Profit", to: "/uk/non-profit" },
        { label: "Restaurant", to: "/uk/restaurant" },
        { label: "Retail Business", to: "/uk/retail-business" },
        { label: "Law Firms", to: "/uk/law-firms" },
      ],
    },
    { label: "Blog", path: "/uk/blogs" },
    { label: "Contact", path: "/uk/contact" },
  ];

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // DESKTOP DROPDOWN HANDLERS
  const handleOpenMenu = (event, label) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  // MOBILE SUBMENU TOGGLE
  const toggleMobileMenu = (label) => {
    setMobileOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <Box sx={{ backgroundColor: "#1f3d1f", color: "#fff" }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.8 }}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">supportinsurance@gmail.com</Typography>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+222 (345) 666 88</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <LanguageIcon fontSize="small" />
              <Typography variant="body2">English</Typography>
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                <FacebookIcon fontSize="small" />
                <TwitterIcon fontSize="small" />
                <LinkedInIcon fontSize="small" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= MAIN HEADER ================= */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          boxShadow: scrolled ? "0px 8px 28px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", minHeight: scrolled ? 64 : 80 }}>
            <Link to="/uk">
              <img src={logo} alt="UK Logo" style={{ height: scrolled ? 36 : 42 }} />
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
              {navItems.map((item) =>
                item.submenu ? (
                  <Box
                    key={item.label}
                    onMouseEnter={(e) => handleOpenMenu(e, item.label)}
                    sx={{ display: "inline-flex" }}
                  >
                    <Button
                      component={NavLink}
                      to={item.path}
                      sx={{
                        color: "#1a1a1a",
                        textTransform: "none",
                        fontWeight: 500,
                        "&.active": {
                          color: "#2b6d2a",
                          fontWeight: 600,
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </Box>
                ) : (
                  <Button
                    key={item.label}
                    component={NavLink}
                    to={item.path}
                    sx={{
                      color: \"#1a1a1a\",
                      textTransform: "none",
                      fontWeight: 500,
                      "&.active": {
                        color: \"#2b6d2a\",
                        fontWeight: 600,
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}
            </Box>

            {/* ACTIONS */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton><SearchIcon /></IconButton>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2b6d2a",
                  borderRadius: "30px",
                  px: 3,
                  display: { xs: "none", md: "inline-flex" },
                }}
              >
                Get A Quote →
              </Button>
              <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= DESKTOP DROPDOWN ================= */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        MenuListProps={{ onMouseLeave: handleCloseMenu }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {navItems
          .find((i) => i.label === activeMenu)
          ?.submenu?.map((sub) => (
            <MenuItem key={sub.label} component={Link} to={sub.to} onClick={handleCloseMenu}>
              {sub.label}
            </MenuItem>
          ))}
      </Menu>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300 }}>
          <List>
            {navItems.map((item) => (
              <Box key={item.label}>
                <ListItemButton
                  component={!item.submenu ? NavLink : "div"}
                  to={!item.submenu ? item.path : undefined}
                  onClick={() =>
                    item.submenu ? toggleMobileMenu(item.label) : setOpen(false)
                  }
                >
                  <ListItemText primary={item.label} />
                  {item.submenu && <ExpandMoreIcon />}
                </ListItemButton>

                {item.submenu && (
                  <Collapse in={mobileOpen[item.label]}>
                    {item.submenu.map((sub) => (
                      <ListItemButton
                        key={sub.label}
                        component={Link}
                        to={sub.to}
                        sx={{ pl: 4 }}
                        onClick={() => setOpen(false)}
                      >
                        <ListItemText primary={sub.label} />
                      </ListItemButton>
                    ))}
                  </Collapse>
                )}
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
