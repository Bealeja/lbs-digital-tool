import "../../App.scss";

import child from "../../assets/child.png";

const Card = () => {
  return (
    <div class="flex-card card-margin background-white">
      <div class="image-container">
        <img src={child} alt="this is a person" />
      </div>
      <div class="spread-items">
        <h2>Heading</h2>
        <p>content</p>
        <h3>Read More</h3>
      </div>
    </div>
  );
};

export default Card;
