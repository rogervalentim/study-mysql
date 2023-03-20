import { useState } from "react";
import { Link } from "react-router-dom";

import { api } from "../../lib/axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    await api.post("cadastrar-usuario", {
      name,
      email,
      password,
    })
    .then((response) => {
      
    })
  }

  return (
    <div className="content-center">
      <h1 className="flex justify-center mt-[150px] text-black font-semibold text-4xl">Criar conta</h1>
      <div className="flex justify-center items-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Seu endereço de email"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Senha:
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="sua senha"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirme sua senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirme sua senha"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Criar conta
          </button>
          <Link 
          className="mx-2 underline"
          to="/login">você já tem uma conta ? clique aqui para logar</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;