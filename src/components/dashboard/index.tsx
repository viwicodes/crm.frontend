import { Box } from "@mui/material";

export default function Content() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src="assets/card_violet.svg" />
        <img src="assets/card_blue.svg" />
        <img src="assets/card_green.svg" />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "row",
        }}
      >
        <img width={"50%"} src="assets/card_barchart.svg" />
        <img width={"50%"} src="assets/card_infochart.svg" />
      </Box>
    </>
  );
}
