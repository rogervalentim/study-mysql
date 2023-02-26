import React from "react";

import { Card, CarouselSection } from "../components";

import { data, images } from "../constants";


const Home = () => {
  return (
    <section className="mt-[70px] bg-black">
      <CarouselSection />
      <h1 className="text-gray-200 text-2xl saturate-200 font-semibold mx-9 mt-[50px]">Os Mais vendidos</h1>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
      {data.booksBestSelling.map(
        (book) => <Card key={book.title} book={book} />
      )}
      </div>
    </section>
  );
};

export default Home;
