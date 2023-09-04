import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Banner from "../../../components/Banner/Banner";
import Navbar from "../../../components/navbarComponent";
import Table from "../../../components/tableComponent";
import Footer from "../../../components/footerComponent";
import "../../../App.scss";
import NewsBar from "../../../components/newsBarComponent";
import ActiveFundraiserBar from "../../../components/ActiveFundraiserBar/ActiveFundraiserBar";
import DonationComponent from "../../../components/donationComponent";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div class="grid-container background-white">
        {/* !----Who We Are----! */}
        <div>
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

        {/* !----Donate----! */}
        <div>
          <DonationComponent />
        </div>

        {/* !----Our Goals----! */}
        <div class="grid-col-str-2">
          <section>
            <h2>Our Goals</h2>
            <Table />
          </section>
        </div>
      </div>

      {/* !----Active Fundraisers----! */}
      <div class="grid-container background-purple">
        <div class="grid-row-str-1">
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
