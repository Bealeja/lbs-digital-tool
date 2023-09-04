import "../../../App.scss";
import DemoCarousel from "../../../components/carouselComponent";
import Footer from "../../../components/footerComponent";
import Navbar from "../../../components/navbarComponent";
import DonationComponent from "../../../components/donationComponent";
import MilestoneListComponent from "../../../components/milestoneListComponent";
import Banner from "../../../components/Banner/Banner";

const FundraiserPublicPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div class="grid-container margin">
        <div class="background-white">
          <h2>Sarah's Fundraiser Gala</h2>
          <h3>Event Date: 12/6/2023</h3>
          <h3>Signup cut off: 12/6/2023</h3>
          <p>
            Good evening and welcome to Sarah’s fundraiser gala dinner! We are
            delighted to have you here tonight to support this wonderful cause.
            This event is a celebration of the hard work and dedication of Sarah
            and her team, who have worked tirelessly to make a difference in the
            lives of those in need. Tonight, we come together to enjoy good
            food, great company, and fantastic entertainment, all while raising
            funds for this important cause. So sit back, relax, and enjoy the
            evening. Thank you for being here and for your generous support.
          </p>
        </div>
        <div class="background-white">
          <MilestoneListComponent />
          <DonationComponent />
        </div>
        <div class="background-white grid-row-str-1">
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
