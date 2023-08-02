import "./index.scss";

import child from "../../assets/child.png";

const Card = () => {
  return (
    <div class="flex-card card-margin background-white">
      <div class="image-container">
        <img src={child} alt="this is a person" />
      </div>
      <div>
        <h2>Heading</h2>
        <p>content</p>
        <p>read more</p>
      </div>
    </div>
  );
};

export default Card;
