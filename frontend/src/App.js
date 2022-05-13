import React from 'react'
import { Routes, Route } from "react-router-dom";
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';



function App() {
  return (
    <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">amazona</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
        </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
  );
}

export default App;
