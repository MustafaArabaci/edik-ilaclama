import React, { useState } from "react";
import Logo from "../assets/indir.png";

import { Link } from "react-router-dom";

import { HiOutlineBars3 } from "react-icons/hi2";
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

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Anasayfa",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "Hakkımızda",
      icon: <InfoIcon />,
      path: "/hakkimizda",
    },
    {
      text: "Projeler",
      icon: <CommentRoundedIcon />,
      path: "/projeler",
    },
    {
      text: "İletişim",
      icon: <PhoneRoundedIcon />,
      path: "/iletisim",
    },
  ];
  return (
    <nav>
      <Link className="links" to="/">
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
      </Link>

      <div className="navbar-links-container">
        <Link className="links" to="/">
          Anasayfa
        </Link>
        <Link className="links" to="/projeler">
          Çalışma Stillerimiz
        </Link>
        <Link className="links" to="/hakkimizda">
          Hakkımızda
        </Link>
        <Link className="links" to="/iletisim">
          İletişim
        </Link>
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
              <Link to={item.path} key={item.text}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;
