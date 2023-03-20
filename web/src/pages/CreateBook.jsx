import { useState, useRef } from "react";

import { api } from "../../lib/axios";

function CreateBook() {
  const [status, setStatus] = useState({
    type: "",
    mensagem: ""
  });

  const [formValues, setFormValues] = useState({
    title: "",
    image: "",
    description: "",
    price: ""
  });

  const [formErrors, setFormErrors] = useState({
    title: "",
    image: "",
    description: "",
    price: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {};

    if (!formValues.title) {
      errors.title = "O campo título é obrigatório";
    }

    if (!formValues.image) {
      errors.image = "O campo imagem é obrigatório";
    }

    if (!formValues.description) {
      errors.description = "O campo de descrição é obrigatório";
    }

    if (!formValues.price) {
      errors.price = "O campo preço é obrigatório";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await api.post("/cadastrar-livro", formValues);
        setStatus({
          type: "success",
          mensagem: response.data.mensagem
        });
      } catch (error) {
        setStatus({
          type: "erro",
          mensagem: "Livro não cadastrado com sucesso, tente mais tarde!"
        });
      }
    }
  };

  return (
    <div className="h-screen">
      <h1 className="text-black mt-[90px] flex justify-center py-4">
        Formulário de cadastramento de livros
      </h1>

      {status.type === "erro" ? (
        <p className="bg-red-300 text-red-700 text-center">{status.mensagem}</p>
      ) : (
        ""
      )}
      {status.type === "success" ? (
        <p className="bg-green-300 text-green-700">{status.mensagem}</p>
      ) : (
        ""
      )}

      <div className="flex justify-center">
        <form
          className="flex flex-col mt-[90px] gap-1 shadouw-md"
          onSubmit={handleSubmit}
        >
          <label className="text-black" htmlFor="title">
            Nome:
          </label>
          <input
            className="bg-yellow-200 w-[550px] h-[45px] rounded flex justify-center placeholder:text-gray-800"
            type="text"
            id="title"
            placeholder="O gato preto"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
          {formErrors.title && (
            <div>
              <p className="text-red-700">{formErrors.title}</p>
            </div>
          )}

          <label className="text-black" htmlFor="image">
            Imagem:
          </label>
          <input
            className="bg-yellow-200 w-[550px] h-[45px] rounded placeholder:text-gray-800"
            type="text"
            id="image"
            placeholder="./src/assets/book-1.png"
            name="image"
            value={formValues.image}
            onChange={handleInputChange}
          />
          {formErrors.image && (
            <div>
              <p className="text-red-700">{formErrors.image}</p>
            </div>
          )}

          <label className="text-black" htmlFor="image">
            Descrição:
          </label>
          <input
            className="bg-yellow-200 w-[550px] h-[45px] rounded placeholder:text-gray-800"
            type="text"
            id="description"
            placeholder="livro sobre ação, terror ou comédia ..."
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
          />
          {formErrors.description && (
            <div>
              <p className="text-red-700">{formErrors.description}</p>
            </div>
          )}

          <label className="text-black" htmlFor="image">
            Preço:
          </label>

          <input
            className="bg-yellow-200 w-[550px] h-[45px] rounded placeholder:text-gray-800"
            type="number"
            id="price"
            placeholder="23"
            name="price"
            value={formValues.price}
            onChange={handleInputChange}
          />
          {formErrors.description && (
            <div>
              <p className="text-red-700">{formErrors.description}</p>
            </div>
          )}

          <button
            className="bg-gray-700 hover:bg-green-500 rounded text-white w-full h-[45px] mt-2 cursor-pointer"
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
