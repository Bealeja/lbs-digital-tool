import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import {
  Table,
  NewsBar,
  ActiveFundraiserBar,
  Donations,
  RadioButtons,
} from "../../../components/Widget";
import "../../../App.scss";
import { Navbar, Banner, Footer } from "../../../components/Core";
import {
  Container,
  Box,
  Grid,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import HorizontalBar from "../../../components/Widget/BarChart/BarChart";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Container fixed sx={{ bgcolor: "#ffffff" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Box component="section" sx={{ p: 0 }}>
              <Box
                sx={{
                  fontSize: "h2.fontSize",
                  m: 1,
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Who we are
              </Box>
              <Box
                sx={{ fontSize: "h6.fontSize", m: 1, fontFamily: "poppins" }}
              >
                At Little Big Steps, we're commited to supporting those children
                in need of physical excersise to battle the effects of ongoing
                cancer treatment.
              </Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#805ec5",
                  m: 1,
                  fontFamily: "Poppins",
                  fontSize: "h6.fontSize",
                }}
              >
                Learn More
              </Button>
            </Box>
            <Box component="section" sx={{ p: 0 }}>
              <Box
                sx={{
                  fontSize: "h2.fontSize",
                  m: 1,
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Donate
              </Box>
              <RadioButtons />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#805ec5",
                  m: 1,
                  fontFamily: "Poppins",
                  fontSize: "h6.fontSize",
                }}
              >
                Donate
              </Button>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <HorizontalBar />
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
              Active Fundraisers
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
      </Container>

      {/* !----Active Fundraisers----! */}
      <div class="grid-container background-purple">
        <div class="grid-row-str-1">
          <div class="flex-row spread-items">
            <div class="search-box">
              <button class="btn-search">
                <FontAwesomeIcon icon={faInstagram} class="search-icon" />
              </button>
              <input
                type="text"
                class="input-search"
                placeholder="Type to Search..."
              />
            </div>
          </div>
        </div>
        <div class="grid-row-str-1">
          <ActiveFundraiserBar />
        </div>
      </div>

      <div class="grid-container background-green margin">
        <div class="grid-row-str-1">
          <h2>Lastest News</h2>
        </div>
        <div class="grid-row-str-1">
          <NewsBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
