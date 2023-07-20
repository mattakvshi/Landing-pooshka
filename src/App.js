import "./style/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <!----------------------------PAGES----------------------------------------> */}
        <Routes>
          <Route path={["/", "/home"]} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
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
