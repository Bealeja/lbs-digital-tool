import { React, useState, useEffect } from "react";

import News from "../News/News";

const NewsBar = () => {
  const [newsPost, setNewsPost] = useState([]);

  const getNews = async () => {
    await fetch(`http://localhost:3001/news`, {
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
    <div class="flex-row">
      {newsPost.slice(0, 4).map(({ _id, heading, urlLink, picturePath }) => (
        <News
          key={_id}
          heading={heading}
          urlLink={urlLink}
          picturePath={picturePath}
        />
      ))}
    </div>
  );
};

export default NewsBar;
