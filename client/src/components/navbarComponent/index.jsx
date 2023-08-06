import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="">
            <span>
              <svg
                xmlns="http:www.w3.org/2000/svg"
                width={192}
                height={192}
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width={256} height={256} fill="none" />
                <circle
                  cx={128}
                  cy={128}
                  r={96}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={16}
                />
              </svg>
            </span>
          </a>
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
