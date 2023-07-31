import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className={showNav ? "mobile-show" : ""}>
      <Link to="/" onClick={() => setShowNav(false)}>
        hello
      </Link>
      <NavLink to="/statistics" onClick={() => setShowNav(false)}>
        hello
      </NavLink>
    </nav>
  );
};

export default Navbar;
