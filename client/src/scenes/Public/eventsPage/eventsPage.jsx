import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Avatar,
  LinearProgress,
  Button,
} from "@mui/material";
import BannerImage from "../../../assets/banner1.png";
import ProfileCard from "../../../components/Widget/ProfileCard/ProfileCard";
import MyFundRaiserContainer from "../../../components/Widget/MyFundraiserContainer/MyFundraiserContainer";

import { FundraisersContainer } from "../../../components/Widget";

const EventsPage = () => {
  const profileAttributes = ["Make It Rain", "Shindig sorcerer", "Job Juggler"];
  const [suburbLatLong, setSuburbLatLong] = useState([]);

  if (suburbLatLong == []) setSuburbLatLong(["-37.840935", "144.946457"]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ width: "70%" }}>
          {/* banner */}
          <Box
            sx={{
              backgroundImage: `url(${BannerImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              height: "200px",
              width: "100%",
              borderRadius: "8px",
            }}
          ></Box>
          {/* fundraisers Container */}
          <FundraisersContainer />
        </Grid>

        {/* Menu Filter */}
        <Grid item sx={{ width: "30%" }}>
          <ProfileCard />
          <MyFundRaiserContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default EventsPage;
