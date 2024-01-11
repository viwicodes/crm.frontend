import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { StickyHeadTable } from "../../components/Table";
import { Column, EmployeesData } from "../../components/Table/types";
import { Button, Grid, Modal, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import Form from "./newForm";
import useToken from "../../Auth/useToken";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const bearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcm5hbWUiOiJ2aXNobnUiLCJpYXQiOjE3MDQ4Mzc2ODEsImV4cCI6MTcwNDkyNDA4MX0.CDrjDE9SNMOVPe_nDGqfLGxVpuaNOvMz4Ms7Bk69rN8";

export const Employees: React.FC<{ data: EmployeesData[] }> = ({
  data,
}): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  // const [data, setData] = useState<EmployeesData[]>([]);
  const { getToken } = useToken();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const headers: Column[] = [
    { id: "name", label: "Emp Name", minWidth: 110 },
    { id: "position", label: "Position", minWidth: 100 },
    {
      id: "dob",
      label: "DOB",
      minWidth: 100,
    },
    {
      id: "doj",
      label: "DOJ",
      minWidth: 80,
    },
    {
      id: "total_exp",
      label: "Total Exp",
      minWidth: 100,
    },
    {
      id: "department",
      label: "Department",
      minWidth: 100,
    },
    {
      id: "phone",
      label: "Phone",
      minWidth: 100,
    },
    {
      id: "email",
      label: "Email",
      minWidth: 100,
    },
    {
      id: "status",
      label: "Status",
      minWidth: 100,
    },
  ];
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search button clicked");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ padding: 0, margin: 0 }}>Employee Listing</h3>
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
        <div style={{ marginBottom: "10px" }}>
          <TextField
            label="Search"
            variant="standard"
            color="primary"
            size="small"
            style={{ marginTop: 0, marginRight: 10 }}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSearch}
            size="small"
            sx={{ marginTop: 2 }}
          >
            Search
          </Button>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs></Grid>
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
        <Form />
      </Modal>
    </Box>
  );
};
