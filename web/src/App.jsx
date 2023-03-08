import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Home, Books, Book, Login, Register, ViewBooks } from "./pages";

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
      <Route path="/cadastrar-livros" element={<ViewBooks />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
