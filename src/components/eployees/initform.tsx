import { Padding } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Form() {
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

        <Box
          sx={{
            display: "flex",
            flex: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
            padding: "30px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        </Box>
        <Button variant="contained">Submit</Button>
      </Box>
    </>
  );
}
