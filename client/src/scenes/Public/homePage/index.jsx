import Banner from "../../../components/bannerComponent";
import Navbar from "../../../components/navbarComponent";
import Table from "../../../components/tableComponent";
import Footer from "../../../components/footerComponent";
import "../../../App.scss";

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
            </section>
          </div>
        </div>

        {/* !----Our Goals----! */}

        <div class="flex-column spacer-vertical">
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
          <h2>Active Fundraisers</h2>
        </div>
      </div>
      <Footer />
      {/* //Banner

    //Who we are

    //Donate

    //Our Goals

    //Active Fundraisers

    //Latest News

    //Footer */}
    </div>
  );
};

export default HomePage;
