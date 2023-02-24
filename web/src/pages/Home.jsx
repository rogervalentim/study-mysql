import React from "react";

import { Card, CarouselSection } from "../components";

import { data, images } from "../constants";


const Home = () => {
  return (
    <section className="mt-[70px]">
      <CarouselSection />
      <h1 className="text-black text-2xl saturate-200 font-semibold mx-9 mt-[50px]">Os Mais vendidos</h1>
      <div className="md:grid grid-cols-2 lg:flex justify-around">
      {data.booksBestSelling.map(
        (book) => <Card key={book.title} book={book} />
      )}
      </div>
    </section>
  );
};

export default Home;
