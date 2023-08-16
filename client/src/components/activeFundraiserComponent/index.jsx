import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../App.scss";

const ActiveFundraiserComponent = ({ heading, content, picturePath }) => {
  return (
    <div class="card-flex card-margin background-white card-container">
      <div class="image-container">
        <img
          src={`http://localhost:3001/assets/${picturePath}`}
          alt="fundraiser display"
        />
      </div>
      <div class="spread-items">
        <h2>{heading}</h2>
        <p>{content}</p>
        <Link to="/fundraiserpage">
          <h3>Read More</h3>
        </Link>
      </div>
    </div>
  );
};

export default ActiveFundraiserComponent;
