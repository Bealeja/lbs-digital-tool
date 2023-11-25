import "../../../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Container, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer>
      <Container fixed sx={{ bgcolor: "#ffffff", borderRadius: "4px;" }}>
        <Box sx={{ display: "flex", justifyContent: "center", height: "3em" }}>
          <Typography
            sx={{
              fontSize: "h4.fontSize",
              m: 1,
              fontFamily: "poppins",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: "h8.fontSize",
              m: 2,
              fontFamily: "poppins",
              fontWeight: "bold",
            }}
          >
            hello@littlebigsteps.org.au
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FacebookIcon sx={{ fontSize: "50px", margin: "10px" }} />
          <InstagramIcon sx={{ fontSize: "50px", margin: "10px" }} />
          <TwitterIcon sx={{ fontSize: "50px", margin: "10px" }} />
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
