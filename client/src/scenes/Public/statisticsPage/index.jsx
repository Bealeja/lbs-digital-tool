import Banner from "../../../components/bannerComponent";
import Footer from "../../../components/footerComponent";
import Navbar from "../../../components/navbarComponent";
import Table from "../../../components/tableComponent";

import "../../../App.scss";

import Photo1 from "../../../assets/child.png";
import HorizontalTable from "../../../components/horizontalTableComponent";

const StatisticsPage = () => {
  return (
    <div id="statistics">
      <Navbar />
      <Banner />
      <div class="margin flex-row spread-items">
        {/* How you have helped */}

        <div class="flex-column spacer-vertical spread-items">
          <section class="container">
            <h2>How you have helped</h2>
            <p>
              Jessica was provided with fifteen sessions of physio therapy due
              to a fundraiser created by our beloved community.
            </p>
            <img class="card-image" src={Photo1} alt="excersise treatment" />
          </section>
        </div>

        {/* Children Helped */}
        <div class="flex-column spacer-vertical spread-items">
          <section class="container">
            <h2>Your Contributions</h2>
            <p>
              Here at Little Big Steps we strive to achieve better outcomes for
              our foundation every year while remaining completly transparent
              with our supporters
            </p>
            <HorizontalTable />
          </section>
        </div>
      </div>

      {/* Follow the Money Trail */}

      <div class="flex-column background-purple">
        <div class="margin">
          <h2>Follow the money trail</h2>
          <p>
            At Little Big Steps we are completely transparent with your
            donations and assure that you’re hard earned cash is going to the
            children who need it most. Whether it’s treatment, physio sessions,
            or even a new fitbit every dollar is recorded.
          </p>
          <div class="flex-row center-items spread-items">
            <div class="container spacer-vertical">
              <h2>Past Achievements</h2>
              <Table />
            </div>
            <div class="container spacer-vertical">
              <h2>Current Statistics</h2>
              <Table />
            </div>
          </div>

          {/* Distribution of Donations */}

          <div class="background-white section-spacer">
            <div class="flex-row center-items">
              <div class="flex-column spacer-vertical">
                <section class="container">
                  <h2>Distribution of Donations</h2>
                  <p>
                    At Little Big Steps we are completely transparent with your
                    donations and assure that you’re hard earned cash is going
                    to the children who need it most. Whether it’s treatment,
                    physio sessions, or even a new fitbit every dollar is
                    recorded.
                  </p>
                  <button class="button-purple">Donate</button>
                  <button class="button-purple">Fundraise</button>
                </section>
              </div>
              <div class="flex-column spacer-vertical">
                <div class="container">
                  <Table />
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="background-white">
            <Footer />
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
