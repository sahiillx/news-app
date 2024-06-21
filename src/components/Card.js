// src/components/Card.js
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ news, index }) => {
  if (!news) {
    return null;
  }

  const { urlToImage, title, description } = news;

  return (
    <div className="w-[350px] p-4 m-1 bg-black rounded-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <Link to={`/news/${index}`}>
      <div className="relative">
        {urlToImage && <img src={urlToImage} alt={title} className="w-full h-auto" />}
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{title}</p>
        <p className="mt-2 text-white">
          {description && (description.length > 100 ? `${description.substr(0, 100)}...` : description)}
        </p>
      </div>
    </Link>
  </div>
  );
};

export default Card;
