import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Banner from "../../../components/bannerComponent";
import Navbar from "../../../components/navbarComponent";
import Table from "../../../components/tableComponent";
import Footer from "../../../components/footerComponent";
import "../../../App.scss";
import NewsBar from "../../../components/newsBarComponent";
import ActiveFundraiserBar from "../../../components/activeFundraiserBarComponent";
import DonationComponent from "../../../components/donationComponent";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div class="grid-container background-white">
        {/* !----Who We Are----! */}
        <div class="grid-item">
          <section>
            <h2>Who we are</h2>
            <p>
              At Little Big Steps, we're commited to supporting those children
              in need of physical excersise to battle the effects of ongoing
              cancer treatment.
            </p>
            <button class="button-purple">
              <a href="https://littlebigsteps.org.au/our-how/">Find Out More</a>
            </button>
          </section>
        </div>

        {/* !----Our Goals----! */}
        <div class="grid-item grid-table">
          <section>
            <h2>Our Goals</h2>
            <Table />
          </section>
        </div>

        {/* !----Donate----! */}
        <div class="grid-item">
          <DonationComponent />
        </div>
      </div>

      {/* !----Active Fundraisers----! */}
      <div id="active-fundraisers">
        <div class="background-purple margin">
          <div class="flex-row spread-items">
            <h2>Active Fundraisers</h2>
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

          <div class="flex-row flex-wrap">
            <ActiveFundraiserBar />
          </div>
        </div>

        {/* !----Latest News----! */}
        <div id="Latest News">
          <div class="background-purple margin">
            <div class="background-green container section-spacer">
              <h2>Lastest News</h2>
              <div class="flex-row spread-items">
                <NewsBar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
