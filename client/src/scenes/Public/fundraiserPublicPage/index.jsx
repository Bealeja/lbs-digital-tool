import "./index.scss";
import DemoCarousel from "../../../components/carouselComponent";
import Footer from "../../../components/footerComponent";
import Navbar from "../../../components/navbarComponent";
import Banner from "../../../components/bannerComponent";

const FundraiserPublicPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div class="margin">
        <section class="flex-row spread-items background-white section-spacer">
          <div class="container">
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
            <div class="flex-column">
              <h2>Donate</h2>
              <form class="radio-button-form">
                <div class="label-container">
                  <input type="radio" id="5" name="money" value="5" />
                  <label>$5</label>
                </div>
                <div class="label-container">
                  <input type="radio" id="10" name="money" value="10" />
                  <label>$10</label>
                </div>
                <div class="label-container">
                  <input type="radio" id="20" name="money" value="20" />
                  <label>$20</label>
                </div>
                <button class="button-purple">Donate</button>
              </form>
            </div>
          </div>
          <aside class="container">
            <h2>Milestones</h2>
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
              <h5>Milestone 1</h5>
            </label>
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
              <h5>Milestone 2</h5>
            </label>
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
              <h5>Milestone 3</h5>
            </label>
          </aside>
        </section>
        <div class="background-white section-spacer">
          <h2>Event Photos</h2>
          <div class="carousel-container">
            <DemoCarousel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FundraiserPublicPage;
