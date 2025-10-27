import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Carrito from "./pages/Carrito";
import FinalizarCompra from "./pages/FinalizarCompra";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/finalizar" element={<FinalizarCompra />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
