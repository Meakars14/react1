import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Component/CartContext";
import Home from "./Component/Home";
import Shop from "./Component/Shop";
import ViewProduct from "./Component/ViewProduct";
import Cart from "./Component/Cart";
import EcommerceNavbar from "./Component/EcommerceNavbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <EcommerceNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ViewProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
