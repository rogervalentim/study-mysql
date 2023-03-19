import { useState, useEffect } from "react";
import { api } from "../../lib/axios";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

const ViewBooks = () => {
  const [books, setBooks] = useState([]);

  const { id } = useParams();

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

  const deleteBook = async () => {
    await api
      .delete(`deletar-livro/${id}`)
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="mt-[100px] text-white">Tabela de cadastro de livros</h1>
      </div>
      <section className="flex justify-center">
        <table className="table-fixed mt-[50px] border-spacing-0 ">
          <thead>
            <tr className="bg-blue-200 text-center">
              <th className="border border-black w-[70px]">Id</th>
              <th className="border border-black ">Titulo</th>
              <th className="border border-black">Descrição</th>
              <th className="border border-black">Preço</th>
              <th className="border border-black">Imagem</th>
              <th className="border border-black">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-yellow-200">
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
                    <button
                      type="button"
                      className="bg-red-500 text-white rounded w-[100px] h-[40px] mx-1"
                      onClick={deleteBook}
                    >
                      Deletar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ViewBooks;
