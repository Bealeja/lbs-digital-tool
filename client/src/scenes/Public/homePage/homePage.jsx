import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import {
  Table,
  NewsBar,
  ActiveFundraiserBar,
  Donations,
  RadioButtons,
} from "../../../components/Widget";
import { Navbar, Banner, Footer } from "../../../components/Core";
import {
  Container,
  Box,
  Grid,
  Button,
  Autocomplete,
  TextField,
  Typography,
  InputBase,
  FlexEnd,
} from "@mui/material";

import HorizontalBar from "../../../components/Widget/BarChart/BarChart";
const HomePage = () => {
  return (
    <div>
      <Navbar />

      <Container fixed>
        <Grid container spacing={0}>
          <Grid item xs={4.5}>
            <Box
              component="section"
              sx={{
                m: 1,
                p: 2,
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h2.fontSize",
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Who we are
              </Typography>
              <Typography
                sx={{ fontSize: "h6.fontSize", fontFamily: "poppins" }}
              >
                At Little Big Steps, we're commited to supporting those children
                in need of physical excersise to battle the effects of ongoing
                cancer treatment.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#805ec5",
                  fontFamily: "Poppins",
                  fontSize: "h6.fontSize",
                }}
              >
                Learn More
              </Button>
            </Box>
            <Box
              component="section"
              sx={{
                m: 1,
                p: 2,
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h2.fontSize",
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Donate
              </Typography>
              <RadioButtons />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#805ec5",
                  fontFamily: "Poppins",
                  fontSize: "h6.fontSize",
                }}
              >
                Donate
              </Button>
            </Box>
          </Grid>
          <Grid item xs={7.5}>
            <Box
              sx={{ m: 1, p: 2, backgroundColor: "white", borderRadius: "8px" }}
            >
              <Typography
                sx={{
                  fontSize: "h2.fontSize",
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Our Goals
              </Typography>
              <Box>
                <HorizontalBar />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container fixed sx={{ bgcolor: "#805ec5" }}>
        <Grid container spacing={2}>
          <Grid item sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h2.fontSize",
                  m: 1,
                  fontFamily: "poppins",
                  fontWeight: "bold",
                  color: "#ffffff",
                  width: "100%",
                }}
              >
                Active Fundraisers
              </Typography>
              <InputBase
                placeholder="Search for Fundraisers..."
                sx={{
                  width: "30%",
                  color: "black",
                  borderRadius: "1rem",
                  padding: "1rem 2rem",
                  backgroundColor: "white",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <ActiveFundraiserBar />
          </Grid>
        </Grid>
      </Container>

      <Container fixed sx={{ bgcolor: "#805ec5" }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Box
              sx={{
                fontSize: "h2.fontSize",
                m: 1,
                fontFamily: "poppins",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Lastest News
            </Box>
          </Grid>
          <Grid item xs={3}>
            <NewsBar />
          </Grid>
        </Grid>
      </Container>

      <Container fixed sx={{ bgcolor: "#805ec5" }}>
        <Footer />
      </Container>
    </div>
  );
};

export default HomePage;
