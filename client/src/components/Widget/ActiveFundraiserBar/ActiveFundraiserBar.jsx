import { React, useState, useEffect } from "react";

import ActiveFundraiser from "../ActiveFundraiser/ActiveFundraiser";
import { Box, Container, Grid, Typography } from "@mui/material";

const ActiveFundraiserBar = () => {
  const [activeFundraisers, setActiveFundraisers] = useState([]);

  const getFundraisers = async () => {
    await fetch(`http://localhost:3001/fundraisers`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setActiveFundraisers(json))
      .catch((error) => {
        console.log(
          `failure to get JSON data for Active Fundraiser Bar Component : ${error}`
        );
      });

    console.log(
      "This is activeFundraisers: " + JSON.stringify(activeFundraisers)
    );
  };

  //Render only on component render
  useEffect(() => {
    getFundraisers();
  }, []);

  return (
    <>
      <Container>
        {activeFundraisers && (
          <Box>
            {activeFundraisers
              .slice(0, 4)
              .map(({ _id, heading, content, picturePath }) => (
                <ActiveFundraiser
                  key={_id}
                  heading={heading}
                  content={content}
                  picturePath={picturePath}
                />
              ))}
          </Box>
        )}

        {activeFundraisers == [] && (
          <Box>
            <Typography>No Events Found</Typography>
          </Box>
        )}
      </Container>
    </>
  );
};

export default ActiveFundraiserBar;
