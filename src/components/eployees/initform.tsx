import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useToken from "../../Auth/useToken";
import { useNavigate } from "react-router-dom";

type AddEmployeeData = {
  name: string;
  position: number;
  role: number;
  department: number;
  // dob: Date;
  total_exp: number;
  phone: string;
  email: string;
};
export default function Form() {
  const { getToken } = useToken();
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [formData, setFormData] = useState<AddEmployeeData>({
    name: "",
    position: 1,
    role: 1,
    department: 1,
    // dob: 22-12-2023,
    total_exp: 0,
    phone: "",
    email: "",
  });
  const navigate = useNavigate();
  const fetchData = (formData: AddEmployeeData) => {
    // Replace 'yourBearerToken' with your actual bearer token

    fetch("http://localhost:4000/api/employees", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(formData),
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
        // Set the data in the state
        navigate("/");
        alert("employee added");
      })
      .catch((error) => {
        // Handle errors
        alert(error.message);
      })
      .finally(() => {
        // Set loading to false when the API call is complete
      });
  };

  // Handle form field changes
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await fetchData(formData);
    // Add your logic here to handle form submission, for example, send data to the server
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <Box sx={style}>
        {/* Todo : Add form here */}
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ padding: "20px" }}
        >
          Create Employee
        </Typography>

        <Box>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Position"
            variant="outlined"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Role"
            variant="outlined"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Department"
            variant="outlined"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
          {/* <TextField id="outlined-basic" label="Dob" variant="outlined" name="dob" value={formData.dob} onChange={handleChange} /> */}
          {/* <TextField id="outlined-basic" label="Doj" variant="outlined" name="doj" value={formData.doj} onChange={handleChange} /> */}
          <TextField
            id="outlined-basic"
            label="Total Experience"
            variant="outlined"
            name="total_exp"
            value={formData.total_exp}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Box>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}
