import {
  Container,
  Grid,
  Box,
  Typography,
  Avatar,
  LinearProgress,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DropDown from "../../../components/Widget/DropDown/DropDown";
import BannerImage from "../../../assets/banner.png";
import DonationPhoto from "../../../assets/child.png";

const EventsPage = () => {
  const profileAttributes = ["Make It Rain", "Shindig sorcerer", "Job Juggler"];

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ width: "70%" }}>
          <Box
            sx={{
              backgroundImage: `url(${BannerImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              height: "200px",
              borderRadius: "8px",
            }}
          ></Box>

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

            {/* Fundraiser */}

            <Box
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                height: "200px",
                width: "100%",
                borderRadius: "8px",
                padding: "10px",
                display: "flex",
                marginTop: "10px",
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
                  backgroundImage: `url(${DonationPhoto})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "4pt",
                  width: "25%",
                  height: "100%",
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
                  Heading
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
                  In a whimsical world of vibrant ideas and kaleidoscopic
                  creativity, our protagonist, the maestro of jubilant
                  occasions, orchestrates events that transcend the ordinary.
                  With a dash of flair and a sprinkle of magic, they transform
                  mundane moments into epic celebrations.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Menu Filter */}
        <Grid item sx={{ width: "30%" }}>
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
            {profileAttributes.map((status) => {
              return (
                <Box>
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

          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              height: "fit-content",
              borderRadius: "8px",
              marginTop: "20px",
              padding: "20px",
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
            <Box
              sx={{
                top: "100px",
                right: "10px",
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
                24th Nov 2024
              </Typography>
            </Box>
            <Box
              sx={{
                height: "fit-content",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Box sx={{ display: "flex", paddingBottom: "10px" }}>
                <Avatar
                  src={DonationPhoto}
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
                  Heading
                </Typography>
              </Box>

              <LinearProgress
                value="20"
                variant="determinate"
                sx={{
                  height: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#b2b2b2",
                }}
              />
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default EventsPage;
