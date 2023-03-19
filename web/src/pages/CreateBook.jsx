import { useState, useRef } from "react";

import { api } from "../../lib/axios";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault();

    await api
      .post("/cadastrar-livro", {
        title,
        image,
        description,
        price
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson === erro) {
          setStatus({
            type: "erro",
            mensagem: responseJson.mensagem
          });
        } else {
          setStatus({
            type: "success",
            mensagem: responseJson.mensagem
          });
        }
      })
      .catch(() => {
        setStatus({
          type: "erro",
          mensagem: "Livro não cadastrado com sucesso, tente mais tarde!"
        });
      });
  };


  return (
    <div className="h-screen">
      <h1 className="text-black mt-[90px] flex justify-center py-4">
        Formulário de cadastramento de livros
      </h1>

      
      {status.type === 'erro' ? <p className="bg-red-300 text-red-700 text-center">{status.mensagem}</p> : ""}
      {status.type === 'success' ? <p className="bg-green-300 text-green-700">{status.mensagem}</p> : ""}


      <div className="flex justify-center">
        <form className="flex flex-col mt-[90px] gap-1" onSubmit={handleSubmit}>
          <label className="text-black" htmlFor="title">
            Nome:
          </label>
          <input
            className="bg-yellow-200 w-[550px] h-[45px] rounded flex justify-center placeholder:text-gray-800"
            type="text"
            id="title"
            placeholder="O gato preto"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="text-black" htmlFor="image">Imagem:</label>
          <input
            className="bg-yellow-200 w-[550px] h-[45px] rounded placeholder:text-gray-800"
            type="text"
            id="image"
            placeholder="./src/assets/book-1.png"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <label className="text-black" htmlFor="description">Descrição:</label>
          <input
            className="bg-yellow-200 w-[550px] h-[45px] rounded placeholder:text-gray-800"
            type="text"
            id="description"
            placeholder="livro sobre suspense, romance , comédia ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className="text-black" htmlFor="price">Preço:</label>
          <input
            className="bg-yellow-200 w-[550px] h-[45px] rounded placeholder:text-gray-800"
            type="text"
            id="price"
            value={price}
            placeholder="23"
            onChange={(e) => setPrice(e.target.value)}
          />

          <button
            className="bg-gray-700 hover:bg-green-500 rounded text-white w-full h-[45px] mt-2"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBook;
