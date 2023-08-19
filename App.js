import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Cart from './components/Cart'
import AllProducts from './components/AllProducts'
import About from './components/About';
import ContactUs from './components/ContactUs';
import Selling from './components/Selling';
import EditProduct from './components/EditProduct';
import { useState } from 'react';

function App() {

  const [cart,setCart] =  useState([])

  var login = false;
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element= {<Home/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route exact path="/all" element={<AllProducts cart={cart} setCart={setCart}/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact-us" element={<ContactUs/>} />
        <Route exact path="/selling" element={<Selling/>} />
        <Route exact path="/edit" element={<EditProduct/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
