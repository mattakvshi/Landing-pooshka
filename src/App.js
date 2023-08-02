import "./style/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ProductTSH from "./pages/ProductTSH";
import Contacts from "./pages/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        {/* <!----------------------------PAGES----------------------------------------> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/1" element={<ProductTSH />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        {/* <!----------------------------PAGES----------------------------------------> */}
        {/* <!----------------------------FOOTER----------------------------------------> */}
        <Footer />
        {/* <!----------------------------FOOTER----------------------------------------> */}
      </Router>
    </div>
  );
}

export default App;
