import Navbar from "../../../components/navbarComponent";
import "./index.scss";
import Form from "../../../components/formComponent";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div class="grid-container">
        <div class="grid-row-str-1">
          <div class="flex-row center-items">
            <div class="main">
              <input type="checkbox" id="chk" aria-hidden="true" />
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
