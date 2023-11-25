import Footer from "../../../components/Core/Footer/Footer";
import Navbar from "../../../components/Core/Navbar/Navbar";
import Table from "../../../components/Widget/Table/Table";

import "../../../App.scss";

import Photo1 from "../../../assets/child.png";
import HorizontalTable from "../../../components/Widget/HorizontalTable/HorizontalTable";
import Banner from "../../../components/Core/Banner/Banner";
import { Box, Container, Grid, Typography } from "@mui/material";

const StatisticsPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>
        <Grid container spacing={2  } backgroundColor="white">
          <Grid item xs={6}>
            {/* How you have helped */}
            <Box component="section" sx={{ p: 0 }}>
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  m: 1,
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                How you have helped
              </Typography>
              <Typography>
                Jessica was provided with fifteen sessions of physio therapy due
                to a fundraiser created by our beloved community.
              </Typography>
              <img class="card-image" src={Photo1} alt="excersise treatment" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            {/* Children Helped */}
            <Box component="section" sx={{ p: 0 }}>
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  m: 1,
                  fontFamily: "poppins",
                  fontWeight: "bold",
                }}
              >
                Your Contributions
              </Typography>
              <Typography>
                Here at Little Big Steps we strive to achieve better outcomes
                for our foundation every year while remaining completly
                transparent with our supporters
              </Typography>
              <HorizontalTable />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Follow the Money Trail */}

      <div class="grid-container background-purple">
        <div class="grid-row-str-1">
          <h2>Follow the money trail</h2>
          <p>
            At Little Big Steps we are completely transparent with your
            donations and assure that your hard earned cash is going to the
            children who need it most. Whether its treatment, physio sessions,
            or even a new fitbit every dollar is recorded.
          </p>
        </div>
        <div>
          <h2>Past Achievements</h2>
          <Table />
        </div>
        <div>
          <h2>Current Statistics</h2>
          <Table />
        </div>
      </div>

      {/* Distribution of Donations */}
      <div class="grid-container background-white margin">
        <div class="flex-column center-items">
          <section>
            <h2>Distribution of Donations</h2>
            <p>
              At Little Big Steps we are completely transparent with your
              donations and assure that you’re hard earned cash is going to the
              children who need it most. Whether it’s treatment, physio
              sessions, or even a new fitbit every dollar is recorded.
            </p>
            <button class="button-purple">Donate</button>
            <button class="button-purple">Fundraise</button>
          </section>
        </div>
        <div class="background-white">
          <Table />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StatisticsPage;
