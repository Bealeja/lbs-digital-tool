import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import {
  Table,
  NewsBar,
  ActiveFundraiserBar,
  Donations,
  RadioButtons,
} from "../../../components/Widget";
import { Navbar, Banner, Footer } from "../../../components/Core";
import {
  Container,
  Box,
  Grid,
  Button,
  Autocomplete,
  TextField,
  Typography,
  InputBase,
  FlexEnd,
} from "@mui/material";

import HorizontalBar from "../../../components/Widget/BarChart/BarChart";
import ResponsiveAppBar from "../../../components/Core/ToolBar/Toolbar";
const HomePage = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              bgcolor: "#a99ed1",
              p: 2,
              borderRadius: 3,
              border: 0.1,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Typography
              sx={{
                fontSize: "h2.fontSize",
                m: 1,
                fontFamily: "poppins",
                fontWeight: "bold",
                color: "#ffffff",
                width: "100%",
              }}
            >
              Active Fundraisers
            </Typography>
            <InputBase
              placeholder="Search for Fundraisers..."
              sx={{
                width: "30%",
                color: "black",
                borderRadius: "1rem",
                padding: "1rem 2rem",
                backgroundColor: "white",
              }}
            />
          </Box>
        </Grid>
        <Grid item sx={{ width: "100%", m: 1 }}>
          <ActiveFundraiserBar />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
