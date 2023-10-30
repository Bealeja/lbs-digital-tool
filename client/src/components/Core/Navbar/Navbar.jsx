import { Link } from "react-router-dom";
import "../../../App.scss";
import Button from "@mui/material/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div id="navbar">
      <Button id="basic-button">
        <Link to="/">HOME</Link>
      </Button>
      <Button id="basic-button">
        <Link to="/statistics">STATISTICS</Link>
      </Button>
      <Button id="basic-button">
        <Link to="/donations">DONATIONS</Link>
      </Button>
      <Button id="basic-button">
        <Link to="/login">LOGIN</Link>
      </Button>
    </div>
  );
};

export default Navbar;
