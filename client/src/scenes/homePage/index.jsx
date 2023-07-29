import Banner from "../../components/bannerComponent";
import Table from "../../components/tableComponent";
import Footer from "../../components/footerComponent";
import "./index.scss";

const HomePage = () => {
  return (
    <div id="home-page">
      <Banner />
      <div class="margin">
        <div class="flex-row">
          <div class="flex-column">
            <section class="container">
              <h2>Who we are</h2>
              <p>
                At Little Big Steps, we're commited to supporting those children
                in need of physical excersise to battle the effects of ongoing
                cancer treatment.
              </p>
              <button class="button-purple">Find Out More</button>
            </section>
            <section class="container">
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
          <div class="flex-column">
            <section class="container">
              <h2>Our Goals</h2>
              <Table />
            </section>
          </div>
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
