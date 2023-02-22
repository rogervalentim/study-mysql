import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex justify-between  bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-yellow-600 text-black mr-1 pt-2">
            <ion-icon name="book-outline"></ion-icon>
          </span>
          LIVROS
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <GrClose /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7 ">
            <Link
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 ">
            <Link
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/livros"
            >
              Livros
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 ">
            <Link
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 ">
            <Link
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/registrar"
            >
              Registrar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
