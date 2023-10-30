import banner from "../../../assets/banner.png";
import Box from "@mui/material/Box";

const Banner = () => {
  return (
    <Box
      component="img"
      sx={{ width: "100vw", height: "30vh" }}
      alt="banner"
      src={banner}
    />
  );
};

export default Banner;
