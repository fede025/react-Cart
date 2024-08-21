import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Searchitem from './components/Searchitem'
import Cart from './components/Cart'
import { items } from './components/data'


const App = () => {
  const [data, setdata] = useState([...items])
  const [cart, setcart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setdata={setdata}/>
    <Routes>
      <Route path="/" element={<Product cart={cart} setcart={setcart} items={data} />}/>
      <Route path="/product/:id" element={<ProductDetail cart={cart} setcart={setcart}/>}/>
      <Route path="/search/:term" element={<Searchitem cart={cart} setcart={setcart}/>}/>
      <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}/>
    </Routes>  
   
    </Router>
    </>
    
  )
}

export default App