import { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link, useLocation } from "react-router-dom";
import styles from "./drawer.module.scss";

const drawerWidth = 240;
const iconArray = [
  <DashboardIcon />,
  <SupervisedUserCircleIcon />,
  <DonutLargeIcon />,
  <TaskAltIcon />,
  <AccessTimeFilledIcon />,
  <LoyaltyIcon />,
  <SubtitlesIcon />,
];
const linkStyles = {
  textDecoration: "none",
  color: "inherit", // or set your desired color
};
export default function SideNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const location = useLocation();

  const drawer = (
    <Box sx={{ borderRight: "none" }}>
      <Toolbar
        sx={{
          backgroundColor: "#316FFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="assets/logo-white.svg" />
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: "Dashboard", path: "/dashboard" },
          { text: "Employees", path: "/employees" },
          { text: "Projects", path: "/projects" },
          { text: "Activities", path: "/activities" },
          { text: "Time Entry", path: "/time" },
          { text: "Roles", path: "/roles" },
        ].map((text, index) => (
          <Link key={index} to={text.path} style={linkStyles}>
            <ListItem key={text.text}>
              <ListItemButton selected={location.pathname == text.path}>
                <ListItemIcon>
                  {iconArray[index % iconArray.length]}
                </ListItemIcon>
                <ListItemText primary={text.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Drawer
        PaperProps={{ style: { border: "none" } }}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        PaperProps={{ style: { border: "none" } }}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
