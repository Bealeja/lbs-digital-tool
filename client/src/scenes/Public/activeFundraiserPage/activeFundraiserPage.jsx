import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

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

  return (
    <>
      <Grid container spacing={3}>
        <Grid
          item
          sx={{
            width: "70%",
            height: "fit-content",
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "50vh",
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              borderRadius: "8pt",
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
            <Box sx={{ display: "flex", padding: "20px" }}>
              <Box
                sx={{
                  backgroundImage: `url(http://localhost:3001/assets/eventcoverphotos/${photo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8pt",
                  width: "200px",
                  height: "150px",
                  alignSelf: "center",
                  position: "absolute",
                  top: "220px",

                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                }}
              ></Box>

              <Box sx={{ paddingLeft: "250px" }}>
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
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          sx={{ width: "30%", backgroundColor: "blue", height: "fit-content" }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              height: "100%",
              borderRadius: "8px",
              padding: "10px",
              display: "flex",
              flexDirection: "row",
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
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              height: "fit-content",
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
                height: "200px",
                width: "100%",
              }}
            >
              {jobs?.map((job, i) => (
                <Box
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                    height: "fit-content",
                    borderRadius: "8px",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                >
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
                    {job}
                  </Typography>
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
