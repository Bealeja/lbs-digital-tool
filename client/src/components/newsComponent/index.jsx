import "../../App.scss";

const NewsComponent = ({ heading, urlLink, picturePath }) => {
  return (
    <>
      <div class="news-image center-items">
        <h3 class="flex-item">
          <a href={urlLink}>{heading}</a>
        </h3>
        <img src={`http://localhost:3001/assets/${picturePath}`} alt="child" />
      </div>
    </>
  );
};

export default NewsComponent;
