import Banner from "../../components/bannerComponent";
import Footer from "../../components/footerComponent";
import "./index.scss";

const HostApplication = () => {
  return (
    <div>
      <Banner />
      <br></br>
      <div class="margin background-white">
        <div class="host-application-container">
          <h2>Lets get your application started</h2>
          <p>
            This application is to create a fundraiser for your next idea! Fill
            out the content below and select the fundraiser you would like to
            create. Post it with friends and family on social media to notify
            them of the event and raise money to help cancer kids keep moving.
          </p>
        </div>
      </div>
      <br></br>
      <div class="background-white margin">
        <div class="host-application-container">
          <form class="form">
            <div class="flex-row center-items">
              <div class="flex-column">
                <label>
                  <span>First Name:</span>
                  <input required placeholders="" type="text" class="input" />
                </label>
                <label>
                  <span>Tell us a bit about yourself:</span>
                  <input required placeholders="" type="text" class="input" />
                </label>
                <label>
                  <span>Fundraiser Type:</span>
                  <select name="my-menu" id="my-menu">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </label>
              </div>
              <div class="flex-column">
                <label>
                  <span>Anticipated Event Date:</span>
                  <input required placeholders="" type="date" class="input" />
                </label>
                <label>
                  <span>Supporting Documents:</span>
                  <input required placeholders="" type="file" class="input" />
                </label>
                <button>Send Application:</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="margin">
        <Footer />
      </div>
    </div>
  );
};

export default HostApplication;
