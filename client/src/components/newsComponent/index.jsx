import "../../App.scss";
import Child from "../../assets/child.png";
import React from "react";
import { useState, useEffect } from "react";

const NewsComponent = () => {
  const [newsPost, setNewsPost] = useState(0);

  const getNews = async () => {
    const response = await fetch(`http://localhost:3001/news`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setNewsPost(json));
  };

  useEffect(() => {
    if (true) {
      getNews();
    }
  }, []);

  return (
    <>
      <div class="news-image center-items">
        <h3 class="flex-item">{JSON.stringify(newsPost[1].heading)}</h3>

        <img src={Child} alt="child" />
      </div>
    </>
  );
};

export default NewsComponent;
