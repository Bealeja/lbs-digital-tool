import Banner from "../../../components/bannerComponent";
import Table from "../../../components/tableComponent";
import Footer from "../../../components/footerComponent";

import "./index.scss";

import Photo1 from "../../../assets/child.png";

const StatisticsPage = () => {
  return (
    <div>
      <Banner />
      <div class="flex-row center-items background-white margin">
        <div class="flex-column">
          <section class="container-statistics">
            <h2>How you have helped</h2>
            <p>
              Jessica was provided with fifteen sessions of physio therapy due
              to a fundraiser created by our beloved community.
              <img class="card-image" src={Photo1} alt="excersise treatment" />
            </p>
          </section>
        </div>
        <div class="container-statistics">
          <h2>Children Helped</h2>
          <Table />
        </div>
      </div>
      <div class="flex-column background-purple ">
        <div class="margin">
          <h2>Follow the money trail</h2>
          <p>
            At Little Big Steps we are completely transparent with your
            donations and assure that you’re hard earned cash is going to the
            children who need it most. Whether it’s treatment, physio sessions,
            or even a new fitbit every dollar is recorded.
          </p>
          <div class="flex-row center-items">
            <div class="container-statistics">
              <h2>Children Helped</h2>
              <Table />
            </div>
            <div class="container-statistics">
              <h2>Children Helped</h2>
              <Table />
            </div>
          </div>

          <div class="background-white">
            <div class="flex-row center-items">
              <div class="flex-column">
                <section class="container-statistics">
                  <h2>Distribution of Donations</h2>
                  <p>
                    At Little Big Steps we are completely transparent with your
                    donations and assure that you’re hard earned cash is going
                    to the children who need it most. Whether it’s treatment,
                    physio sessions, or even a new fitbit every dollar is
                    recorded.
                  </p>
                  <button>Donate</button>
                  <button>Fundraise</button>
                </section>
              </div>
              <div class="container-statistics">
                <Table />
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
