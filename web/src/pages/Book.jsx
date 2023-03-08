import { useState, useEffect } from "react";
import { api } from "../../lib/axios";
import { Card } from "../components";

import { useParams } from "react-router-dom";

const Book = ({ title, image, description, price }) => {
  const [books, setBooks] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      await api
        .get(`/livro/${id}`)
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
    <div>
      <p>{title}</p>
      <p>olá </p>
    </div>
  );
};

export default Book;
