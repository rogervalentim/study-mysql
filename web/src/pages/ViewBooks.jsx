import { useState, useEffect } from "react";
import { api } from "../../lib/axios";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

import ConfirmModal from "../components/ConfirmModal";

const ViewBooks = () => {
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState({
    type: "",
    mensagem: ""
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

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

  const deleteBook = async (bookId) => {
    try {
      const response = await api.delete(`deletar-livro/${bookId}`);
      setBooks(books.filter((book) => book.id !== bookId));
      setStatus({
        type: "success",
        mensagem: response.data.mensagem
      });
    } catch (error) {
      console.log(error);
      setStatus({
        type: "error",
        mensagem: "ocorreu um erro ao tentar deletar o livro !"
      });
    }
  };

  return (
    <>
      <div className="flex justify-around mt-[100px]">
        <h1 className="text-black font-bold text-4xl">Tabela de cadastro de livros</h1>
        
        <Link to="/cadastrar-livro">
        <button className="bg-gray-700 hover:bg-green-600 w-[100px] h-[40px] text-white rounded">Cadastrar</button>
        </Link>
      </div>
 
      {status.type === "erro" ? (
        <p className="bg-red-300 text-red-700 text-center">{status.mensagem}</p>
      ) : (
        ""
      )}
      {status.type === "success" ? (
        <p className="bg-green-300 text-green-700 text-center">{status.mensagem}</p>
      ) : (
        ""
      )}

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
                      onClick={() => {
                        setBookToDelete(book);
                        setShowConfirmModal(true);
                      }}
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
      {showConfirmModal && (
        <ConfirmModal
          book={bookToDelete}
          onClose={() => setShowConfirmModal(false)}
          onDelete={() => {
            deleteBook(bookToDelete.id);
            setShowConfirmModal(false);
          }}
        />
      )}
    </>
  );
};

export default ViewBooks;
