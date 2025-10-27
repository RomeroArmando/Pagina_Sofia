import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { cart, removeFromCart, clearCart, updateTalle } = useCart();
  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Tu carrito</h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>No hay productos en el carrito</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, idx) => (
  <li
    key={idx}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      marginBottom: "10px",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}
  >
    <div>
      <strong>{item.nombre}</strong> - ${item.precio} x {item.cantidad}
      {item.talle && <span> (Talle: {item.talle})</span>}
    </div>

    {/* Selector de talle siempre visible */}
    <select
      value={item.talle}
      onChange={(e) => updateTalle(item.id, item.talle, e.target.value)}
    >
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
    </select>

    <button
      onClick={() => removeFromCart(item.id, item.talle)}
      style={{ backgroundColor: "#dc3545", color: "white", padding: "5px 10px" }}
    >
      Quitar
    </button>
  </li>
))}
          </ul>

          <h2 style={{ textAlign: "center" }}>Total: ${total}</h2>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={clearCart}
              style={{ backgroundColor: "#6c757d", color: "white", padding: "10px 15px", marginRight: "10px" }}
            >
              Vaciar carrito
            </button>
            <Link
              to="/finalizar"
              style={{ backgroundColor: "#007bff", color: "white", padding: "10px 15px" }}
            >
              Finalizar compra
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
