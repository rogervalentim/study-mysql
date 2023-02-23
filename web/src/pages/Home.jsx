import React from "react";
import Banner1 from "../assets/banner.png";

import { Card } from "../components/card";

import { data, images } from "../constants";

const Home = () => {
  return (
    <section className="mt-[80px]">
      <img className="w-full" src={Banner1} alt="books" />
      <h1 className="text-black text-2xl saturate-200 font-semibold mx-9 mt-[50px]">Os Mais vendidos</h1>
      <div className="sm:grid grid-cols-2 md:grid grid-cols-2 lg:flex justify-around">
      {data.booksBestSelling.map(
        (book) => <Card key={book.title} book={book} />
      )}
      </div>
    </section>
  );
};

export default Home;
