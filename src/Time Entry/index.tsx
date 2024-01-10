import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import NavBar from '../components/commons/appbar';
import SideDrawer from '../components/commons/drawer';

export default function TimeEntry() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar />
            <SideDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <h3 style={{ padding: 0, margin: 0, }}>Employee Time Entry</h3>
                </div>
            </Box>
        </Box>

    );
}