import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBar from '../components/appbar';
import SideDrawer from '../components/drawer';
import { StickyHeadTable } from '../components/Table';
import { Column, EmployeesData } from '../components/Table/types';
import { Button, Grid, Modal, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcm5hbWUiOiJ2aXNobnUiLCJpYXQiOjE3MDQ4Mzc2ODEsImV4cCI6MTcwNDkyNDA4MX0.CDrjDE9SNMOVPe_nDGqfLGxVpuaNOvMz4Ms7Bk69rN8'

export default function Employees() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState<EmployeesData[]>([]);

  useEffect(() => {
    const fetchData = () => {
      // Replace 'yourBearerToken' with your actual bearer token

      fetch('http://localhost:4000/api/employees?page=1', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
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
            return { ...item, position: item.position.name, role: item.role.name, department: item.department.name }
          })
          // Set the data in the state
          setData(mutated_result);
        })
        .catch((error) => {
          // Handle errors
        })
        .finally(() => {
          // Set loading to false when the API call is complete
        });
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }


  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const headers: Column[] = [
    { id: 'name', label: 'Emp Name', minWidth: 110 },
    { id: 'position', label: 'Position', minWidth: 100 },
    {
      id: 'role',
      label: 'Role',
      minWidth: 100,
    },
    {
      id: 'dob',
      label: 'DOB',
      minWidth: 100,
    },
    {
      id: 'doj',
      label: 'DOJ',
      minWidth: 80,
    },
    {
      id: 'total_exp',
      label: 'Total Exp',
      minWidth: 100,
    },
    {
      id: 'department',
      label: 'Department',
      minWidth: 100,
    },
    {
      id: 'phone',
      label: 'Phone',
      minWidth: 100,
    },
    {
      id: 'email',
      label: 'Email',
      minWidth: 100,
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 100,
    },
  ];
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search button clicked');
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar />
      <SideDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
          <h3 style={{ padding: 0, margin: 0, }}>Employee Listing</h3>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              sx={{ margin: 0 }}
            >
              Add Employee
            </Button>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <TextField
            label="Search"
            variant="standard"
            color='primary'
            size="small"
            style={{ marginTop: 0, marginRight: 10 }}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSearch}
            size='small'
            sx={{ marginTop: 2 }}
          >
            Search
          </Button>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>

            </Grid>
            <Grid item xs={6}>
              {/* <Item>xs=6</Item> */}
            </Grid>
          </Grid>
        </Box>
        <StickyHeadTable headers={headers} rows={data} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Todo : Add form here */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Employee Form
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>

  );
}