import "../../App.scss";
import Child from "../../assets/child.png";
import React from "react";
import { useState, useEffect } from "react";

const NewsComponent = () => {
  const [newsPost, setNewsPost] = useState(0);

  const getNews = async () => {
    const response = await fetch(`http://localhost:3001/news`, {
      method: "GET",
    });
    const data = await response.json();
    setNewsPost(data);
  };

  useEffect(() => {
    if (true) {
      getNews();
    }
  }, []);

  console.log(newsPost);

  return (
    <div class="news-image center-items">
      <h3 class="flex-item">New Physio's Sign Up with Little Big Steps</h3>

      <img src={Child} alt="child" />
    </div>
  );
};

export default NewsComponent;
