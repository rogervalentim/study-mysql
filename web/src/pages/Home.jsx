import { useState, useEffect } from "react";
import { api } from "../../lib/axios";

import { Card, CarouselSection } from "../components";
import { data, images } from "../constants";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await api
        .get("/livros")
        .then((response) => {
          setBooks(response.data.books);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  // console.log(books)

  return (
    <section className="mt-[70px] bg-black">
      <CarouselSection />
      <h1 className="text-gray-200 text-2xl saturate-200 font-semibold mx-9 mt-[50px]">
        Os Mais vendidos
      </h1>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {books.map((book) => (
          <Card 
          key={book.title}
          title={book.title}
          image={book.image}
          description={book.description}
          price={book.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
