import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <h1 className="flex justify-center text-black font-semibold text-4xl ">Login</h1>
    <div className="flex justify-center mt-[200px]">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="seu endereço de email"
        />

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Senha:
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="sua senha..."
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Log In
        </button>
        <Link 
        className="mx-2 underline"
        to="/create-account">
          Não tem uma conta ? clique aqui para criar uma
        </Link>
      </form>
    </div>
  </>
  )
}

export default Login;