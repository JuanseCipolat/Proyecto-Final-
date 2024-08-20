import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Noticias from "./pages/Noticias";
import Retro from "./pages/Retro";
import Reviews from "./pages/Reviews";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header /> {}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/retro" element={<Retro />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
