import { useCart } from "../context/CartContext";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [talle, setTalle] = useState("M"); // valor por defecto

  const handleAdd = () => {
    addToCart({ ...product, talle });
    Swal.fire({
      title: "Agregado al carrito!",
      icon: "success",
      timer: 1000,
      showConfirmButton: false
    });
  };

  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p>${product.precio}</p>

      {/* Selector de talle siempre visible */}
      <select value={talle} onChange={(e) => setTalle(e.target.value)}>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>

      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
}
