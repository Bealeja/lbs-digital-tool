import "./index.scss";

import Banner from "../../../components/bannerComponent";
import Card from "../../../components/cardComponent";
import Footer from "../../../components/footerComponent";

const ActiveFundraiserPage = () => {
  return (
    <div>
      <Banner />
      <div class="margin background-grey">
        <h2>In Person Event</h2>
        <form>
          <input type="text" placeholder="Search..." class="seach-bar" />
          <button>Search</button>
        </form>
        <div class="card-container">
          <Card />
          <Card />
        </div>
      </div>
      <div class="margin background-grey">
        <h2>Online Events</h2>
        <div class="card-container">
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActiveFundraiserPage;
