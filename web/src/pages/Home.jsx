import React from "react";
import Banner1 from "../assets/banner.png";

import Card from "../components/card";

import { data, images } from "../constants";

const Home = () => {
  return (
    <div className="mt-[80px]">
      <img className="w-full" src={Banner1} alt="books" />
      {data.booksBestSelling.map(
        (book) => <Card key={book.title} book={book} />
      )}
    </div>
  );
};

export default Home;
