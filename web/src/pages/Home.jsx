import { useState, useEffect } from "react";
import { api } from "../../lib/axios";
import { Link } from "react-router-dom";

import { Card, CarouselSection } from "../components";

import Offer1 from "../assets/offer-1.png";
import Offer2 from "../assets/offer-2.png";

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

  return (
    <section className="mt-[70px]">
      <CarouselSection />
      <h1 className="text-gray-200 text-2xl saturate-200 font-semibold mx-9 mt-[50px]">
        Os Mais vendidos
      </h1>
      <div className="mx-4 grid sm:grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-4 ">
        {books.map((book, index) => (
          <Link key={book.image} className="no-underline text-gray-400 hover:text-gray-600" to={"/livro/" + book.id}>
          <Card 
          key={index}
          title={book.title}
          image={book.image}
          description={book.description}
          price={book.price}
          />
        </Link>
        ))}
      </div>
      <div className="sm:block lg:flex justify-around mt-[100px]">
        <img className="sm:w-[150px] md:w-full  lg:w-[550px] h-[250px]" src={Offer1}  />
        <img className="sm:w-[150px] md:w-full lg:w-[550px] h-[250px]" src={Offer2}  />
      </div>
    </section>
  );
};

export default Home;
