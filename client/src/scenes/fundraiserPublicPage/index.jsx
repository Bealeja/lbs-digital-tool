import "./index.scss";

import Banner from "../../components/bannerComponent";
import DemoCarousel from "../../components/carouselComponent";
import Footer from "../../components/footerComponent";

const FundraiserPublicPage = () => {
  return (
    <div>
      <Banner />
      <div class="margin">
        <section class="flex-row center-items background-white">
          <div class="flex-column public-container">
            <h2>Sarah's Fundraiser Gala</h2>
            <h3>Event Date: 12/6/2023</h3>
            <h3>Signup cut off: 12/6/2023</h3>
            <p>
              Good evening and welcome to Sarah’s fundraiser gala dinner! We are
              delighted to have you here tonight to support this wonderful
              cause. This event is a celebration of the hard work and dedication
              of Sarah and her team, who have worked tirelessly to make a
              difference in the lives of those in need. Tonight, we come
              together to enjoy good food, great company, and fantastic
              entertainment, all while raising funds for this important cause.
              So sit back, relax, and enjoy the evening. Thank you for being
              here and for your generous support.
            </p>
          </div>
          <div class="flex-column">
            <aside class="public-container">
              <h2>Milestones</h2>
              <form>
                <label for="option1">Option 1:</label>
                <input type="checkbox" id="option1" name="option1" />
                <br />
                <label for="option2">Option 2:</label>
                <input type="checkbox" id="option2" name="option2" />
                <br />
                <label for="option3">Option 3:</label>
                <input type="checkbox" id="option3" name="option3" />
              </form>
            </aside>
          </div>
        </section>
        <div class="background-white">
          <h2>Event Photos</h2>
          <div class="carousel-container">
            <DemoCarousel />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FundraiserPublicPage;
