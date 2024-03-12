import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Allproduct from "./Components/Allproduct";
import Addproduct from "./Components/Addproduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Allproduct />} />
        <Route path="/add" element={<Addproduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
