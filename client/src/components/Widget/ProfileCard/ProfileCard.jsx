import { Box, Typography, Avatar } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const ProfileCard = () => {
  const profileAttributes = ["Make It Rain", "Shindig sorcerer", "Job Juggler"];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          height: "200px",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <Box sx={{ padding: "10px", display: "flex" }}>
          <Avatar
            alt="Profile Photo"
            variant="rounded"
            sx={{ height: "50px", width: "50px" }}
          />
          <Box sx={{ paddingLeft: "10px" }}>
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
        {profileAttributes.map((status, i) => {
          return (
            <Box key={i}>
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
    </>
  );
};

export default ProfileCard;
