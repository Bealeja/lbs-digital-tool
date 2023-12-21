import {
  Button,
  Avatar,
  Box,
  Divider,
  Grid,
  Typography,
  LinearProgress,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import Carousel from "../../../components/Widget/Carousel/Carousel";
import { LineChart } from "@mui/x-charts/LineChart";

const ActiveFundraiserPage = () => {
  const { state } = useLocation(); // Use useLocation to get the state

  // Destructure the props from the state
  const {
    id,
    eventname,
    description,
    photo,
    members,
    jobs,
    suburb,
    owner,
    goal,
    moneyraised,
    date,
  } = state;

  const slides = [
    {
      src: "https://picsum.photos/seed/img1/600/400",
      alt: "Image 1 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img2/600/400",
      alt: "Image 2 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel",
    },
  ];
  const sumProgressBar = (moneyraised / goal) * 100;
  return (
    <>
      <Grid container spacing={3}>
        <Grid
          item
          sx={{
            width: "70%",
            height: "88vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "50%",
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              borderRadius: "8pt",
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(http://localhost:3001/assets/eventcoverphotos/${photo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "50%",
                width: "100%",
                borderRadius: "8pt 8pt 0pt 0pt",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                padding: "20px",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(http://localhost:3001/assets/eventcoverphotos/${photo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8pt",
                  width: "12%",
                  height: "18%",
                  alignSelf: "center",
                  position: "absolute",
                  top: "22%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                }}
              ></Box>

              {/* Owner */}
              <Box sx={{ paddingTop: "90px", width: "25%", height: "100%" }}>
                <Avatar
                  src={`http://localhost:3001/assets/eventcoverphotos/${photo}`}
                  alt="Profile Photo"
                  variant="rounded"
                  sx={{ height: "50px", width: "50px" }}
                ></Avatar>
                <Typography
                  sx={{
                    color: "#b2b2b2",
                    fontSize: "15pt",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    marginRight: "10px",
                    textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Host: {owner}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "70%",
                  height: "100%",
                  paddingRight: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingLeft: "20px",
                }}
              >
                <Box>
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
                <Box sx={{ width: "100%", height: "fit-content" }}>
                  <LinearProgress
                    value={sumProgressBar}
                    variant="determinate"
                    sx={{
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#a99ed1",
                        border: "black 1px solid",
                      },
                      border: "black 1px solid",
                      boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.5)",
                      height: "20px",
                      borderRadius: "5px",
                      backgroundColor: "white",
                      marginBottom: "10px",
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ width: "20%" }}>
                <Typography
                  sx={{
                    color: "#b2b2b2",
                    fontSize: "18pt",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    marginRight: "10px",
                    textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Raised: ${moneyraised}
                </Typography>
                <Divider
                  sx={{
                    borderColor: "#9eb9d1",
                    borderWidth: "2px",
                    borderRadius: "8px",
                  }}
                />
                <Typography
                  sx={{
                    color: "#9ed1a9",
                    fontSize: "18pt",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    marginRight: "10px",
                    textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Goal: ${goal}
                </Typography>
                <Button
                  sx={{
                    marginTop: "10px",
                    borderRadius: "8pt",
                    width: "fit-content",
                    height: "20px",
                    alignSelf: "center",
                    padding: "20px",
                    backgroundColor: "#a99ed1",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      fontSize: "18pt",
                      padding: "10px",
                      textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Donate
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "50%",
              width: "100%",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                marginRight: "10px",
              }}
            >
              <Carousel data={slides} />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
              }}
            >
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: false,
                  },
                ]}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item sx={{ width: "30%", height: "88vh" }}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              height: "50%",
              borderRadius: "8px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
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
              Members
            </Typography>
            <Box
              sx={{
                height: "fit-content",
                width: "100%",
                marginTop: "10px",
              }}
            >
              {members?.map((member, i) => (
                <Box
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                    height: "fit-content",
                    borderRadius: "8px",
                    padding: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
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
                      {member}
                    </Typography>
                  </Box>
                  <Box>
                    <Avatar
                      src={`http://localhost:3001/assets/eventcoverphotos/${photo}`}
                      alt="Profile Photo"
                      variant="rounded"
                      sx={{ height: "50px", width: "50px" }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Jobs */}
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              height: "50%",
              borderRadius: "8px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
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
              Jobs
            </Typography>
            <Box
              sx={{
                height: "fit-content",
                width: "100%",
                marginTop: "10px",
              }}
            >
              {Object.keys(jobs)?.map((job, i) => (
                <Box
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                    height: "fit-content",
                    borderRadius: "8px",
                    padding: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
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
                      {job}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#9eb9d1",
                        fontSize: "10pt",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                        marginRight: "10px",
                        textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Assigned To: {jobs[job] ? jobs[job] : "N/A"}
                    </Typography>
                  </Box>
                  <Box>
                    <Avatar
                      src={
                        jobs[job]
                          ? `http://localhost:3001/assets/eventcoverphotos/${photo}`
                          : ""
                      }
                      alt="Profile Photo"
                      variant="rounded"
                      sx={{ height: "50px", width: "50px" }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ActiveFundraiserPage;
