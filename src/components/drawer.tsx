import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import { Link, useNavigate } from 'react-router-dom';


const data = [
    { icon: <People />, label: 'Dashboard', path: 'dashboard' },
    { icon: <Dns />, label: 'Employees', path: 'employees' },
    { icon: <PermMedia />, label: 'Activity List', path: 'activities' },
    { icon: <Public />, label: 'Projects', path: 'projects' },
    { icon: <Public />, label: 'Time Entry', path: 'time' },
    { icon: <Public />, label: 'Roles', path: 'roles' },
];
const drawerWidth = 240;
export default function SideDrawer() {
    return (
        <Drawer
            variant="permanent"
            PaperProps={{
                sx: {
                    backgroundColor: "#f5f5f5",
                }
            }}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                {data.map((item, i) => (
                    <List component={Link} to={`/${item.path}`} key={i} disablePadding style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItem key={item.label} disablePadding sx={{ height: 60 }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* {item.icon} */}
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </List>
                ))}
            </Box>
        </Drawer>
    )
}