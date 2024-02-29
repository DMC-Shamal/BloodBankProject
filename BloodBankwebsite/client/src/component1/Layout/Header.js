import React, { useState } from "react";
import '../../styles/HeaderStyles.css';

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <BloodtypeIcon/>
        <h2>Health Care Center</h2>
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        {/* <AppBar sx={{backgroundImage:`linear-gradient(90deg, rgba(94,50,60,1) 19%, rgba(50,40,84,1) 46%, rgba(22,77,106,1) 86%, rgba(52,9,121,1) 100%);`}}>  */}
 
 <AppBar sx={{bgcolor:"white"}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"rgb(188, 14, 14)"}
              variant="h3"
              sx={{ flexGrow: 1 }}
            >
              <h6>  <BloodtypeIcon />Health Care Center</h6>
           </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              
              <ul className="navigation-menu">
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/about">About</a>
  </li>
  <li>
    <a href="/contact">Contact</a>
  </li>
  <li>
    <a href="/login">Login</a>
  </li>
</ul>

            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
