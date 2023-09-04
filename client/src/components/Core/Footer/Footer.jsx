import "../../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div class="background-white center-items flex-column margin">
        <h2>Contact Us</h2>
        <h3>hello@littlebigsteps.org.au</h3>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} class="anchor-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} class="anchor-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} class="anchor-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
