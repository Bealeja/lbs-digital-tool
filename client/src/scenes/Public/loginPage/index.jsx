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
              <div class="signup">
                <Form />
                {/* <form>
                  <label for="chk" aria-hidden="true">
                    Sign up
                  </label>
                  <input
                    type="text"
                    name="txt"
                    placeholder="User name"
                    required=""
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                  <input
                    type="password"
                    name="pswd"
                    placeholder="Password"
                    required=""
                  />
                  <button>Sign up</button>
                </form>
              </div>

              <div class="login">
                <form>
                  <label for="chk" aria-hidden="true">
                    Login
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                  <input
                    type="password"
                    name="pswd"
                    placeholder="Password"
                    required=""
                  />
                  <button>Login</button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
