import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
export default function NavBar() {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Clipped drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}