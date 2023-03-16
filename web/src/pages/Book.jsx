import { useState, useEffect } from "react";
import { api } from "../../lib/axios";

import { useParams } from "react-router-dom";


const Book = () => {
  const [book, setBook] = useState({});
 
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      await api
        .get(`/livro/${id}`)
          .then((responseJson) => {
            setBook(responseJson.data.book);
          })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, [id]);

  return (
    <div className="mt-[70px] h-screen">
      <h1>{book.title}</h1>
      <img src={book.image} alt="" />
    </div>
  );
};

export default Book;
