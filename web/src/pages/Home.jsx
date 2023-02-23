import React from "react";
import Banner1 from "../assets/banner.png";

import { Card } from "../components";

import { data, images } from "../constants";

const Home = () => {
  return (
    <section className="mt-[70px] bg-blue-700">
      <img src={Banner1} alt="banner" />
      <h1 className="text-white text-2xl saturate-200 font-semibold mx-9 mt-[50px]">Os Mais vendidos</h1>
      <div className="md:grid grid-cols-2 lg:flex justify-around">
      {data.booksBestSelling.map(
        (book) => <Card key={book.title} book={book} />
      )}
      </div>
    </section>
  );
};

export default Home;
