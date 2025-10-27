import { useCart } from "../context/CartContext";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";

export default function FinalizarCompra() {
  const { cart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  const mensaje = cart
    .map((p) => `${p.nombre} - ${p.talle} x${p.cantidad} = $${p.precio * p.cantidad}`)
    .join("%0A");

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  // Número de WhatsApp del dev
  const telefonoDev = "543764635595";

  // Link directo a WhatsApp (para QR y botón)
  const linkWhatsApp = `https://wa.me/${telefonoDev}?text=Hola!%20Quisiera%20comprar:%0A${mensaje}%0ATotal:%20$${total}`;

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Finalizar Compra</h1>

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
            <span>{item.nombre} - {item.talle} x {item.cantidad}</span>
            <span>${item.precio * item.cantidad}</span>
          </li>
        ))}
      </ul>

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Total: ${total}</h2>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <p>Escaneá el QR para enviar tu pedido por WhatsApp:</p>
        {/* QR de LINK directo */}
        <QRCodeCanvas value={linkWhatsApp} size={200} bgColor="#fff" fgColor="#000" />
      </div>

      {/* Botón para PC */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#25D366",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "10px"
          }}
        >
          Enviar por WhatsApp
        </a>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={clearCart}
          style={{ backgroundColor: "#dc3545", color: "white", padding: "10px 20px", borderRadius: "8px" }}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
