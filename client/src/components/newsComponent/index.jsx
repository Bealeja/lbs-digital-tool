import "../../App.scss";
import Child from "../../assets/child.png";

const NewsComponent = () => {
  return (
    <div class="news-image center-items">
      <h3 class="flex-item">New Physio's Sign Up with Little Big Steps</h3>

      <img src={Child} alt="child" />
    </div>
  );
};

export default NewsComponent;
