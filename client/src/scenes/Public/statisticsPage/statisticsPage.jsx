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
