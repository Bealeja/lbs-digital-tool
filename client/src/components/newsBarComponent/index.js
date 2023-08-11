import { React, useState, useEffect } from "react";

import NewsComponent from "../newsComponent";

const NewsBar = () => {
  const [newsPost, setNewsPost] = useState([]);

  const getNews = async () => {
    fetch(`http://localhost:3001/news`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setNewsPost(json));
  };

  //Render only on component render
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      {newsPost.map(({ heading, urlLink, picturePath }) => (
        <NewsComponent
          heading={heading}
          urlLink={urlLink}
          picturePath={picturePath}
        />
      ))}
    </>
  );
};

export default NewsBar;
