import { useState, useEffect } from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

const ProfileCard = ({ username, badges, photo, location }) => {
  const displayBadges = [
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
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            padding: "10px",
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            src={`http://localhost:3001/assets/userprofilephotos/${photo}`}
            alt="Profile Photo"
            variant="rounded"
            sx={{
              height: "60%",
              width: "fit-content",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
              justifySelf: "centre",
              alignSelf: "center",
              border: "0.1px solid #000",
            }}
          />
          <Box
            sx={{
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              border: "0.1px solid #000",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <BadgeOutlinedIcon />
              <Typography
                sx={{
                  color: "#a99ed1",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                  paddingLeft: "5px",
                }}
              >
                {username}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <PlaceOutlinedIcon sx={{ color: "black" }} />
              <Typography
                sx={{
                  color: "#a99ed1",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                  paddingLeft: "5px",
                }}
              >
                {location}
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
          {displayBadges?.map((badge, i) =>
            badges?.includes(badge) ? (
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
                  {badge}
                </Typography>
              </Box>
            ) : (
              <Box
                key={i}
                sx={{
                  width: "100%",
                  backgroundColor: "lightgrey",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                  borderColor: "black",
                  border: "0.1px solid #000",
                  paddingLeft: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "grey",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                    padding: "2px",
                  }}
                >
                  {badge}
                </Typography>
              </Box>
            )
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProfileCard;
