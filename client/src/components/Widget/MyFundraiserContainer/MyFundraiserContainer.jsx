import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import MyFundraiser from "../MyFundraiser/MyFundraiser";

const MyFundRaiserContainer = ({ username }) => {
  const [myFundraisers, setMyFundraisers] = useState([]);

  useEffect(() => {
    const getMyFundraiserEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/fundraisers/myFundraisers?userID=${username}`
        );
        const responseJSON = await response.json();
        setMyFundraisers(responseJSON);
      } catch (error) {
        console.log(
          `Error caught when fetching myFundraisers: ${error.message}`
        );
      }
    };

    getMyFundraiserEvents();
  }, [username]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          height: "fit-content",
          borderRadius: "8px",
          marginTop: "20px",
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "1px",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            color: "#d19eb9",
            fontSize: "22pt",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            textShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
            paddingBottom: "20px",
          }}
        >
          My Fundraisers
        </Typography>
        {myFundraisers && (
          <>
            {myFundraisers.map(
              ({ eventname, photo, date, moneyraised, goal }, i) => (
                <MyFundraiser
                  eventname={eventname}
                  photo={photo}
                  date={date}
                  moneyraised={moneyraised}
                  goal={goal}
                  key={i}
                />
              )
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default MyFundRaiserContainer;
