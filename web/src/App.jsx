import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./styles/global.css";

function App() {
  return (
    <div className="bg-blue">
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
