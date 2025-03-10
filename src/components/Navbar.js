import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logocommunion.0485ada0760e4748313f.png";
import { HiInformationCircle, HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "About",
      icon: <HiInformationCircle />,
      path: "/about",
    },
    {
      text: "Communities",
      icon: <InfoIcon />,
      path: "/communities",
    },
    {
      text: "Events",
      icon: <CommentRoundedIcon />,
      path: "/events",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>Home</Link>
        <Link
  to="/"
  style={{ color: "black", textDecoration: "none" }}
  onClick={(e) => {
    if (window.location.pathname === "/") {
      e.preventDefault(); // Prevent navigation only if already on home page
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }}
>
  About
</Link>

        <Link to="/communities" style={{ color: "black", textDecoration: "none" }}>Communities</Link>
        <Link to="/events" style={{ color: "black", textDecoration: "none" }}>Events</Link>
        <Link to="/contact" style={{ color: "black", textDecoration: "none" }}>Contact</Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
