import React, { useState } from "react";

import { api } from "../../lib/axios";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

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
        if (responseJson.error) {
          setStatus({
            type: "error",
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
          type: "error",
          mensagem: "Livro não cadastrado com sucesso, tente mais tarde!"
        });
      });
  };

  return (
    <div className="h-screen">
      <form className="flex flex-col mt-[150px] items-center" onSubmit={handleSubmit}>
        <label className="text-[#fff]" htmlFor="title">
          Nome:
        </label>
        <input
          className="bg-yellow-200 w-[400px] h-[45px] rounded"
          type="text"
          id="title"
          placeholder="Nome do livro:"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="image">Imagem:</label>
        <input
          className="bg-yellow-200 w-[400px] h-[45px] rounded"
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="description">Descrição:</label>
        <input
          className="bg-yellow-200 w-[400px] h-[45px] rounded"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="price">Preço:</label>
        <input
          className="bg-yellow-200 w-[400px] h-[45px] rounded"
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          className="bg-green-700 rounded text-white w-[100px] h-[45px]"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CreateBook;
