import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Banner from "../../../components/bannerComponent";
import Navbar from "../../../components/navbarComponent";
import Table from "../../../components/tableComponent";
import Footer from "../../../components/footerComponent";
import "../../../App.scss";
import Card from "../../../components/cardComponent";
import NewsComponent from "../../../components/newsComponent";

const HomePage = () => {
  return (
    <div id="home-page">
      <Navbar />
      <Banner />
      <div class="margin flex-row spread-items">
        <div class="flex-column spacer-vertical spread-items">
          {/* !----Who We Are----! */}

          <div class="container">
            <section>
              <h2>Who we are</h2>
              <p>
                At Little Big Steps, we're commited to supporting those children
                in need of physical excersise to battle the effects of ongoing
                cancer treatment.
              </p>
              <button class="button-purple">Find Out More</button>
            </section>
          </div>

          {/* !----Donate----! */}

          <div class="container">
            <section>
              <h2>Donate</h2>
              <form class="radio-button-form">
                <div class="label-container">
                  <input type="radio" id="5" name="money" value="5" />
                  <label for="5">$5</label>
                </div>
                <div class="label-container">
                  <input type="radio" id="10" name="money" value="10" />
                  <label for="10">$10</label>
                </div>
                <div class="label-container">
                  <input type="radio" id="20" name="money" value="20" />
                  <label for="20">$20</label>
                </div>
              </form>

              <div class="flex-row spread-items center-items">
                <label class="mcui-checkbox">
                  <input type="checkbox" />
                  <div>
                    <svg
                      class="mcui-check"
                      viewBox="-2 -2 35 35"
                      aria-hidden="true"
                    >
                      <title>checkmark-circle</title>
                      <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                    </svg>
                  </div>
                  <h5>Every Month</h5>
                </label>
                <button class="button-purple">Donate</button>
              </div>
            </section>
          </div>
        </div>

        {/* !----Our Goals----! */}

        <div class="flex-column spacer-vertical center-items">
          <div class="container">
            <section>
              <h2>Our Goals</h2>
              <Table />
            </section>
          </div>
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

          <div class="flex-row">
            <div class="flex-column container">
              <Card />
              <Card />
            </div>
            <div class="flex-column container">
              <Card />
              <Card />
            </div>
          </div>
        </div>

        {/* !----Latest News----! */}
        <div id="Latest News">
          <div class="background-purple margin">
            <div class="background-green container section-spacer">
              <h2>Lastest News</h2>
              <div class="flex-row spread-items">
                <NewsComponent />
                <NewsComponent />
                <NewsComponent />
                <NewsComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;