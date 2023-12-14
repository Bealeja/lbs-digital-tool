import { useState, useEffect } from "react";
import { Avatar, Box, Typography, LinearProgress } from "@mui/material";
import DonationPhoto from "../../../assets/child.png";

const MyFundraiser = ({ eventname, photo, date, moneyraised, goal }) => {
  const [sumProgressBar, setSumProgressBar] = useState(null);

  useEffect(() => {
    let percentage = (moneyraised / goal) * 100;
    setSumProgressBar(percentage);
  }, []);

  // Convert Date String into required day
  const getSuffixOfDate = (date) => {
    const dayNumber = Number(date[0]); //1

    let suffix;
    switch (dayNumber) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }

    return `${dayNumber + suffix}`;
  };

  const dateString = getSuffixOfDate(date);

  return (
    <>
      <Box
        sx={{
          height: "175px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            top: "20px",
            right: "-10px",
            width: "80px",
            height: "50px",
            position: "absolute",
            backgroundColor: "#a99ed1",
            borderRadius: "4px",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              color: "#fffbfa",
              fontSize: "10pt",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              marginRight: "10px",
              textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              width: "100%",
            }}
          >
            {`${dateString} ${date[1]} ${date[2]}`}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", paddingBottom: "10px" }}>
          <Avatar
            src={`http://localhost:3001/assets/${photo}`}
            alt="Profile Photo"
            variant="rounded"
            sx={{ height: "50px", width: "50px" }}
          />

          <Typography
            sx={{
              color: "#d19eb9",
              fontSize: "18pt",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              textShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
              padding: "10px",
            }}
          >
            {eventname}
          </Typography>
        </Box>

        <LinearProgress
          value={sumProgressBar}
          variant="determinate"
          sx={{
            height: "10px",
            borderRadius: "5px",
            backgroundColor: "#b2b2b2",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              color: "#a99ed1",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              textShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
              paddingBottom: "5px",
              paddingTop: "5px",
            }}
          >
            Amount Raised
          </Typography>
          <Typography
            sx={{
              color: "#a99ed1",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              textShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
              paddingBottom: "5px",
              paddingTop: "5px",
            }}
          >
            {moneyraised}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              color: "#9ed1a9",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              textShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
              paddingBottom: "5px",
            }}
          >
            Goal
          </Typography>
          <Typography
            sx={{
              color: "#9ed1a9",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              textShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
              paddingBottom: "5px",
            }}
          >
            {goal}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MyFundraiser;
