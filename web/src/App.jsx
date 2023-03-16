import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Home, Books, Book, Login, Register, ViewBooks, CreateBook } from "./pages";

import "./styles/global.css";
import "./App.css";

function App() {
  return (
    <div className="app">
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/livros" element={<Books />} />
      <Route path="/livro/:id" element={<Book />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/listar" element={<ViewBooks />} />
      <Route path="/Cadastrar-livro" element={<CreateBook />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
