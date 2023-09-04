import "../../../App.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Card from "../../../components/Core/Card/Card";
import Footer from "../../../components/Core/Footer/Footer";
import Navbar from "../../../components/Core/Navbar";

const ActiveFundraiserPage = () => {
  return (
    <div id="activefundraisers">
      <Navbar />
      <div class="margin background-grey">
        <div class="section-spacer">
          <section class="container ">
            <div class="flex-row spread-items">
              <h2>In Person Event</h2>
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
            <div class="card-container">
              <Card />
              <Card />
            </div>
          </section>
        </div>
      </div>
      <div class="margin background-grey">
        <div class="section-spacer">
          <section class="container ">
            <div class="flex-row spread-items">
              <h2>Online Events</h2>
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
            <div class="card-container">
              <Card />
              <Card />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActiveFundraiserPage;
