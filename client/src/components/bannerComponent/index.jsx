import banner from "../../assets/banner.png";

import "./index.scss";

const Banner = () => {
  return (
    <header id="banner">
      <img
        src={banner}
        alt="banner with quote helping kids with cancer to get moving"
      />
    </header>
  );
};

export default Banner;
