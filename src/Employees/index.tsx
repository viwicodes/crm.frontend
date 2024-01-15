import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "../components/commons/appbar";
import SideNav from "../components/commons/drawer";
import { Employees } from "../components/eployees";
import useToken from "../Auth/useToken";
import { EmployeesData } from "../components/Table/types";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashBoard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [data, setData] = React.useState<EmployeesData[]>([]);
  const { getToken } = useToken();

  React.useEffect(() => {
    // const fetchData = () => {
    // Replace 'yourBearerToken' with your actual bearer token

    fetch("//13.234.34.212:4000/api/employees?page=1", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
    })
      .then((response) => {
        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        return response.json();
      })
      .then((result) => {
        const mutated_result = result.data.map((item: any) => {
          return {
            ...item,
            position: item.position.name,
            role: item.role.name,
            department: item.department.name,
          };
        });
        // Set the data in the state
        setData(mutated_result);
        console.log(data, "api");
      })
      .catch((error) => {
        // Handle errors
      })
      .finally(() => {
        // Set loading to false when the API call is complete
      });
    // };

    // Call the fetchData function when the component mounts
    // fetchData();
  }, []);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "#316FFF" }}>
          <NavBar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <SideNav />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Employees data={data} />
      </Box>
    </Box>
  );
}
