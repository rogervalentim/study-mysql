import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";

import { Home, Books, Login, Register } from "./pages";

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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
