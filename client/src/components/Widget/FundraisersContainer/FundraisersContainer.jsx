import { React, useState, useEffect } from "react";

import { Box, Grid, Typography } from "@mui/material";

import DropDown from "../../../components/Widget/DropDown/DropDown";
import Fundraiser from "../Fundraiser/Fundraiser";

const FundraisersContainer = () => {
  const [fetchedFundraisers, setFetchedFundraisers] = useState([]);

  useEffect(() => {
    const getFundraiserEvents = async () => {
      try {
        const response = await fetch("http://localhost:3001/fundraisers");
        const responseJSON = await response.json();
        setFetchedFundraisers(responseJSON);
      } catch (error) {
        console.log(`Error caught when fetching Fundraisers: ${error.message}`);
      }
    };

    getFundraiserEvents();
  }, []);

  return (
    <>
      {" "}
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          height: "fit-content",
          width: "100%",
          borderRadius: "8px",
          marginTop: "20px",
          marginBotton: "20px",
          padding: "20px",
        }}
      >
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  color: "#a99ed1",
                  fontSize: "22pt",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  textShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
                }}
              >
                Fundraisers
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                boxSizing: "content-box",
              }}
            >
              <Typography
                sx={{
                  color: "#b2b2b2",
                  fontSize: "14pt",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  marginRight: "10px",
                  textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                }}
              >
                Select
              </Typography>
              <DropDown />
            </Box>
          </Grid>
        </Grid>
        {fetchedFundraisers && (
          <>
            {fetchedFundraisers
              .slice(0, 3)
              .map(({ eventname, description, photo }) => (
                <Fundraiser
                  eventname={eventname}
                  description={description}
                  photo={photo}
                />
              ))}
          </>
        )}
      </Box>
    </>
  );
};

export default FundraisersContainer;
