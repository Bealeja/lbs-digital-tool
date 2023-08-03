import { Link } from "react-router-dom";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/statistics">About</Link>
        </li>
        <li>
          <Link to="/donations">Donate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
