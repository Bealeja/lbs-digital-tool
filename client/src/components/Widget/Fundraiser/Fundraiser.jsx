import { Link } from "react-router-dom";
import "../../../App.scss";
import { Typography, Box, Button } from "@mui/material";

const Fundraiser = ({ eventname, description, photo }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        height: "175px",
        width: "100%",
        borderRadius: "16px",
        padding: "16px",
        display: "flex",
        marginTop: "20px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          top: "38.5%",
          left: "-15px",
          width: "80px",
          height: "25%",
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
          24th Nov 2024
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(http://localhost:3001/assets/eventcoverphotos/${photo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "8pt",
          width: "25%",
          height: "100%",
          alignSelf: "center",
        }}
      ></Box>
      <Box sx={{ padding: "20px", width: "70%" }}>
        <Typography
          sx={{
            color: "#b2b2b2",
            fontSize: "20pt",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginRight: "10px",
            textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          {eventname}
        </Typography>
        <Typography
          sx={{
            color: "#b2b2b2",
            fontSize: "10pt",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginRight: "10px",
            textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Button
          sx={{
            backgroundColor: "#a99ed1",
            color: "white",
            fontSize: "8pt",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
            boxShadoow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
            height: "fit-content",
            paddingLeft: "10px",
            paddingRight: "10px",
            width: "fit-content",
            textAlign: "center",
          }}
          component={Link}
          to={`/Fundraiser`}
        >
          View
        </Button>
      </Box>
    </Box>
  );
};

export default Fundraiser;
