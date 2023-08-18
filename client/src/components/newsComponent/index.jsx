import "../../App.scss";

const NewsComponent = ({ heading, urlLink, picturePath }) => {
  return (
    <>
      <div class="card-flex card-margin center-items image-filter white-link">
        <h3>
          <a href={urlLink}>{heading}</a>
        </h3>
        <img src={`http://localhost:3001/assets/${picturePath}`} alt="child" />
      </div>
    </>
  );
};

export default NewsComponent;
