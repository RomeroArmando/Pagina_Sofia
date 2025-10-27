import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img 
          src="/logo.jpeg" 
          alt="Logo" 
          style={{ width: "100px", height: "70px", marginRight: "10px" }} 
        />
        <Link to="/"><strong>🛍️ Tienda Local</strong></Link>
      </div>
      <div>
        <Link to="/">Catálogo</Link>
        <Link to="/carrito">Carrito ({totalItems})</Link>
      </div>
    </nav>
  );
}
