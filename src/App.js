
import "./index.css"
//import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import FAQS from "./components/FAQS";
import TAC from "./components/TAC";
import PP from "./components/PP";
import Blog from "./components/Blog";
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/terms-and-conditions" element={<TAC />}/>
        <Route path="/faqs" element={<FAQS />}/>
        <Route path="/privacy-policy" element={<PP />}/>
        <Route path="*" element={<Notfound />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </div>
  );
}
export default App;