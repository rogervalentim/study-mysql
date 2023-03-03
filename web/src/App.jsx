import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";

import { Home, Books, Login, Register, ViewBooks } from "./pages";

import "./styles/global.css";

function App() {
  return (
    <div>
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/livros" element={<Books />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/cadastrar-livros" element={<ViewBooks />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
