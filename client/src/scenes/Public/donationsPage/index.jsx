import Navbar from "../../../components/navbarComponent";
import "./index.scss";

const DonationsPage = () => {
  return (
    <div class="background-purple">
      <Navbar />
      <div class="margin background-white">
        <div class="flex-row center-items">
          <div class="donations-container">
            <h2>Fundraising</h2>
            <p>
              Join our community to help fundraise money for the charity as a
              whole or donate to a specific cause. Make your next event
              meaningful and help children with cancer.
            </p>
            <button>Find out more</button>
          </div>
          <div class="vl"></div>
          <div class="donations-container">
            <h2>Donate</h2>
            <form class="radio-button-form">
              <input type="radio" id="$5" name="money" value="5" />
              <label for="$5">$5</label>
              <br />

              <input type="radio" id="$10" name="money" value="10" />
              <label for="$10">$10</label>
              <br />

              <input type="radio" id="20" name="money" value="20" />
              <label for="$20">$20</label>
              <br />
            </form>
            <button class="button-purple">Donate</button>
          </div>
        </div>
      </div>
      <div class="margin background-white">
        <h2>Our Goals</h2>
        <div class="flex-row center-items">
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
        <div class="flex-row center-items margin">
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
  );
};

export default DonationsPage;
