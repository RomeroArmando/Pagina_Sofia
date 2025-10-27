import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Añadir producto, por defecto sin talle
  const addToCart = (product) => {
    const exists = cart.find(
      (p) => p.id === product.id && p.talle === product.talle
    );
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === product.id && p.talle === product.talle
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        )
      );
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const removeFromCart = (id, talle) =>
    setCart(cart.filter((p) => !(p.id === id && p.talle === talle)));

  const updateTalle = (id, oldTalle, newTalle) =>
    setCart(
      cart.map((p) =>
        p.id === id && p.talle === oldTalle ? { ...p, talle: newTalle } : p
      )
    );

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateTalle }}
    >
      {children}
    </CartContext.Provider>
  );
};

