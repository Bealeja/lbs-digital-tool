import { useState, useEffect } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const ProfileCard = () => {
  const profileAttributes = [
    "Make it Rain",
    "Shindig Sorcerer",
    "Job Juggler",
    "Best Friends",
    "Giving Guru",
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          height: "200px",
          borderRadius: "8px",
          padding: "10px",
          display: "flex",
        }}
      >
        <Box sx={{ padding: "10px", width: "50%" }}>
          <Avatar
            alt="Profile Photo"
            variant="rounded"
            sx={{ height: "50px", width: "50px" }}
          />
          <Box>
            <Typography
              sx={{
                color: "#a99ed1",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              Name
            </Typography>
            <Box sx={{ display: "flex" }}>
              <PlaceOutlinedIcon sx={{ color: "black" }} />
              <Typography
                sx={{
                  color: "#a99ed1",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                }}
              >
                Location
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {profileAttributes.map((status, i) => {
            return (
              <Box
                key={i}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                  borderColor: "black",
                  border: "0.1px solid #000",
                  paddingLeft: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#9eb9d1",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                    padding: "2px",
                  }}
                >
                  {status}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default ProfileCard;
