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
    width: 1000,
    height: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };
  const [formData, setFormData] = useState<AddEmployeeData>({
    name: "",
    position: 1,
    role: 1,
    department: 1,
    total_exp: 0,
    phone: "",
    email: "",
  });
  const navigate = useNavigate();
  const fetchData = (formData: AddEmployeeData) => {
    // Replace 'yourBearerToken' with your actual bearer token

    fetch("//13.234.34.212:4000/api/employees", {
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingX: "50px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                paddingY: "10px",
              }}
            >
              Name
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              id="outlined-basic"
              variant="outlined"
              label="Of the employee"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingX: "50px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                paddingY: "10px",
              }}
            >
              Position
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              id="outlined-basic"
              variant="outlined"
              label="Of the employee"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              width: "50%",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                paddingY: "10px",
              }}
            >
              Role
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              id="outlined-basic"
              variant="outlined"
              label="Of the employee"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
          </Box>

          <Box
            sx={{
              width: "50%",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                paddingY: "10px",
              }}
            >
              Department
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              id="outlined-basic"
              variant="outlined"
              label="Of the employee"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingX: "50px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                paddingY: "10px",
              }}
            >
              Experience
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              id="outlined-basic"
              variant="outlined"
              label="Of the employee"
              name="total_exp"
              value={formData.total_exp}
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              width: "50%",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                paddingY: "10px",
              }}
            >
              Phone
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              id="outlined-basic"
              variant="outlined"
              label="Of the employee"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              width: "50%",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                paddingY: "10px",
              }}
            >
              Email
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              id="outlined-basic"
              variant="outlined"
              label="Of the employee"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}
