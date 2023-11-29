import { Link } from "react-router-dom";
import "../../../App.scss";
import { Typography, Box } from "@mui/material";

const ActiveFundraiser = ({ heading, content, picturePath }) => {
  return (
    <div class="card-flex card-margin card-border background-white black-link">
      <Link to="/fundraiserpage">
        <Box
          sx={{
            p: 5,
            m: 2,
            borderRadius: 2,
            backgroundColor: "#D3D3D3",
          }}
        >
          <Box>
            <Box sx={{ p: 1, backgroundColor: "#FFFFFF", borderRadius: 1 }}>
              <img
                src={`http://localhost:3001/public/assets/${picturePath}`}
                alt="fundraiser display"
              />
            </Box>
          </Box>
          <Typography>{heading}</Typography>
          <Typography>{content}</Typography>
        </Box>
      </Link>
    </div>
  );
};

export default ActiveFundraiser;
