import { React, useState, useEffect } from "react";

import NewsComponent from "../newsComponent";

const NewsBar = () => {
  const [newsPost, setNewsPost] = useState([]);

  const getNews = async () => {
    fetch(`http://localhost:3001/news`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setNewsPost(json))
      .catch((error) => {
        console.log(
          `failure to get JSON data for NewsBar Component : ${error}`
        );
      });
  };

  //Render only on component render
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      {newsPost.slice(0, 4).map(({ _id, heading, urlLink, picturePath }) => (
        <NewsComponent
          key={_id}
          heading={heading}
          urlLink={urlLink}
          picturePath={picturePath}
        />
      ))}
    </>
  );
};

export default NewsBar;
