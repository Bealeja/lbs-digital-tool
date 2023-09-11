import { Link } from "react-router-dom";
import "../../../App.scss";

const ActiveFundraiser = ({ heading, content, picturePath }) => {
  return (
    <div class="card-flex card-margin card-border background-white black-link">
      <Link to="/fundraiserpage">
        <img
          src={`http://localhost:3001/assets/${picturePath}`}
          alt="fundraiser display"
        />
        <h2>{heading}</h2>
        <p>{content}</p>
      </Link>
    </div>
  );
};

export default ActiveFundraiser;
