import DonationComponent from "../../../components/donationComponent";
import Footer from "../../../components/footerComponent";
import Navbar from "../../../components/navbarComponent";
import ProgressBar from "../../../widgets/progressBarComponent";
import "../../../App.scss";

const DonationsPage = () => {
  return (
    <>
      <Navbar />
      <div class="grid-container grid-container-padding header-spacing">
        {/* Fundraising */}
        <div class="background-white">
          <section>
            <h2>Fundraising</h2>
            <p>
              Join our community to help fundraise money for the charity as a
              whole or donate to a specific cause. Make your next event
              meaningful and help children with cancer.
            </p>
            <button class="button-purple">Find out more</button>
          </section>
        </div>
        <div class="background-white">
          {/* Donate */}
          <DonationComponent />
        </div>

        {/* Our Goals */}
        <section class="grid-row-str-1 background-white">
          <h2>Our Goals</h2>
          <ProgressBar />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DonationsPage;
