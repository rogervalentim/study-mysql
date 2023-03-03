import { useState, useEffect } from "react";
import { api } from "../../lib/axios";

import { Link } from "react-router-dom";

const ViewBooks = () => {
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
    <>
      <div className="mt-[100px] flex justify-center">
        <h1>Tabela de cadastro de livros</h1>
      </div>
      <section className="flex justify-center">
       
        <table className="table-fixed mt-[200px] border-spacing-0 ">
          <thead>
            <tr className="bg-blue-200 text-center">
              <th className="border border-slate-600 w-[70px]">Id</th>
              <th className="border border-slate-600">Titulo</th>
              <th className="border border-slate-600">Descrição</th>
              <th className="border border-slate-600">Preço</th>
              <th className="border border-slate-600">Imagem</th>
              <th className="border border-slate-600">Ações</th>,.
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="text-center">
                <td className="border border-black">{book.id}</td>
                <td className="border border-black">{book.title}</td>
                <td className="border border-black">{book.description}</td>
                <td className="border border-black">{book.price}</td>
                <td className="border border-black">{book.image}</td>
                <td className="border border-black">
                  <div className="mx-2">
                    <Link to={`/visualizar-livro/` + book.id}>
                    <button
                      type="button"
                      className="bg-blue-500 text-white rounded w-[100px] h-[40px]"
                    >
                      Visualizar
                    </button>
                    </Link>
                    <Link to={`/editar-livro/`+ book.id}>
                    <button
                      type="button"
                      className="bg-green-500 text-white rounded w-[100px] h-[40px] mx-1"
                    >
                      Editar
                    </button>
                    </Link>
                  </div>
                </td>
                <td className="border border-black"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ViewBooks;
