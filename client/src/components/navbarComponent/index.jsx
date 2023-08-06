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
              <rect width={256} height={256} fill="none" />
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link class="navbar-link" to="/statistics">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
              <rect width={256} height={256} fill="none" />
              Statistics
            </span>
          </Link>
        </li>
        <li>
          <Link class="navbar-link" to="/donations">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
              <rect width={256} height={256} fill="none" />
              Donations
            </span>
          </Link>
        </li>
        <li>
          <Link class="navbar-link" to="/activefundraiser">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
              <rect width={256} height={256} fill="none" />
              fundraisers
            </span>
          </Link>
        </li>
      </ul>
    </div>

    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/statistics">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/donations">Donate</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
