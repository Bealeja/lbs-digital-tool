import Banner from "../../../components/bannerComponent";
import Footer from "../../../components/footerComponent";
import Navbar from "../../../components/navbarComponent";
import "./index.scss";

const DonationsPage = () => {
  return (
    <div class="background-purple">
      <Navbar />
      <Banner />
      <div class="margin background-white">
        <div class="flex-row section-spacer spread-items">
          {/* Fundraising */}

          <section class="container spacer-vertical">
            <h2>Fundraising</h2>
            <p>
              Join our community to help fundraise money for the charity as a
              whole or donate to a specific cause. Make your next event
              meaningful and help children with cancer.
            </p>
            <button class="button-purple">Find out more</button>
          </section>

          {/* Divider */}

          <div class="divider"></div>

          {/* Donate */}

          <div class="container spacer-vertical">
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
            <div class="flex-row spread-items">
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
          </div>
        </div>
      </div>

      {/* Our Goals */}

      <div class="margin background-white">
        <div class="section-spacer">
          <h2>Our Goals</h2>
          <div class="flex-row space-items">
            <div class="progress-container-before">
              <h3>$100,000 Donated</h3>
              <ul>
                <li>100 Watches given to children</li>
                <li>50 Physio Sessions Provided</li>
                <li>$100,000 used for research</li>
              </ul>
            </div>
            <div class="progress-container-before">
              <h3>$300,000 Donated</h3>
              <ul>
                <li>100 Watches given to children</li>
                <li>50 Physio Sessions Provided</li>
                <li>$100,000 used for research</li>
              </ul>
            </div>
            <div class="progress-container-before">
              <h3>$500,000 Donated</h3>
              <ul>
                <li>100 Watches given to children</li>
                <li>50 Physio Sessions Provided</li>
                <li>$100,000 used for research</li>
              </ul>
            </div>
          </div>
          <div class="flex-row center-items">
            <h3 class="progress-bar">2023</h3>
          </div>
          <div class="flex-row space-items margin">
            <div class="progress-container-after">
              <h3>$200,000 Donated</h3>
              <ul>
                <li>100 Watches given to children</li>
                <li>50 Physio Sessions Provided</li>
                <li>$100,000 used for research</li>
              </ul>
            </div>
            <div class="progress-container-after">
              <h3>$400,000 Donated</h3>
              <ul>
                <li>100 Watches given to children</li>
                <li>50 Physio Sessions Provided</li>
                <li>$100,000 used for research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonationsPage;
