import { Navbar } from "../../../components/Core/index";
import "./loginPage.scss";
import LoginForm from "../../../components/Forms/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div class="grid-container">
        <div class="grid-row-str-1">
          <div class="flex-row center-items">
            <div class="main">
              <input type="checkbox" id="chk" aria-hidden="true" />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
