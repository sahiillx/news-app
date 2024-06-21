// src/data.js
export const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API}`;

export const filterData = [
  { id: "1", title: "Technology" },
  { id: "2", title: "Business" },
  { id: "3", title: "Health" },
  { id: "4", title: "Entertainment" },
  { id: "5", title: "Sports" },
  { id: "6", title: "Science" },
];
