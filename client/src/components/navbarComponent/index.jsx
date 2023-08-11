import { Link } from "react-router-dom";
import "../../App.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div id="navbar">
      <ul>
        <li>
          <Link class="navbar-link" to="/">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link class="navbar-link" to="/statistics">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
              Statistics
            </span>
          </Link>
        </li>
        <li>
          <Link class="navbar-link" to="/donations">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
              Donations
            </span>
          </Link>
        </li>
        <li>
          <Link class="navbar-link" to="/activefundraiser">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
              fundraisers
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
