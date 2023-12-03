import { Link } from "react-router-dom";
import "../../../App.scss";
import { Typography, Box } from "@mui/material";

const ActiveFundraiser = ({ heading, content, picturePath }) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        border: 0.1,
        width: "auto",
      }}
    >
      <Box>
        <Box sx={{ p: 2, borderRadius: 4, overflow: "hidden" }}>
          <img
            src={`http://localhost:3001/public/assets/${picturePath}`}
            alt="fundraiser display"
            style={{ width: "auto", height: "auto", borderRadius: "4px" }}
          />
        </Box>
      </Box>
      <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
        {heading}
      </Typography>
      <Typography sx={{ color: "#555", fontSize: "0.9rem" }}>
        {content}
      </Typography>
    </Box>
  );
};

export default ActiveFundraiser;
