import "../../App.scss";

const NewsComponent = ({ heading, urlLink, picturePath }) => {
  return (
    <>
      <div class="news-image center-items">
        <a href={urlLink}>
          <h3 class="flex-item">{heading}</h3>
        </a>

        <img src={picturePath} alt="child" />
      </div>
    </>
  );
};

export default NewsComponent;
