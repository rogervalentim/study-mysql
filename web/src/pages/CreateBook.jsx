import { useState, useRef } from "react";

import { api } from "../../lib/axios";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [status, setStatus] = useState({
    type: "",
    mensagem: ""
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("O campo título é obrigatório"),
    image: Yup.string().required("O campo imagem é obrigatório"),
    description: Yup.string().required("O campo de descrição é obrigatório"),
    price: Yup.number().required("O campo preço é obrigatório")
  });

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
        <Formik
          initialValues={{
            title: "",
            image: "",
            description: "",
            price: ""
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
        >
          {(formik) => (
            <form className="flex flex-col mt-[90px] gap-1 shadouw-md">
              <label className="text-black" htmlFor="title">
                Nome:
              </label>
              <Field
                className="bg-yellow-200 w-[550px] h-[45px] rounded flex justify-center placeholder:text-gray-800"
                type="text"
                id="text"
                placeholder="O gato preto"
                name="title"
              />
              {formik.errors.title && formik.touched.title && (
                <div>
                  <p className="text-red-700">{formik.errors.title}</p>
                </div>
              )}

              <label className="text-black" htmlFor="image">
                Imagem:
              </label>
              <Field
                className="bg-yellow-200 w-[550px] h-[45px] rounded placeholder:text-gray-800"
                type="text"
                id="image"
                placeholder="./src/assets/book-1.png"
                name="image"
              />
              {formik.errors.image && formik.touched.image && (
                <div>
                  <p className="text-red-700">{formik.errors.image}</p>
                </div>
              )}

              <label className="text-black" htmlFor="description">
                Descrição:
              </label>
              <Field
                className="bg-yellow-200 w-[550px] h-[45px] rounded placeholder:text-gray-800"
                type="text"
                id="description"
                placeholder="livro sobre suspense, romance , comédia ..."
                name="description"
                required
              />

              {formik.errors.description && formik.touched.description && (
                <div>
                  <p className="text-red-700">{formik.errors.description}</p>
                </div>
              )}

              <label className="text-black" htmlFor="price">
                Preço:
              </label>
              <Field
                className="bg-yellow-200 w-[550px] h-[45px] rounded placeholder:text-gray-800"
                type="text"
                id="price"
                placeholder="23"
                name="price"
                required
              />

              {formik.errors.price && formik.touched.price && (
                <div>
                  <p className="text-red-700">{formik.errors.price}</p>
                </div>
              )}

              <button
                className="bg-gray-700 hover:bg-green-500 rounded text-white w-full h-[45px] mt-2 cursor-pointer"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                required
              >
                Cadastrar
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateBook;
