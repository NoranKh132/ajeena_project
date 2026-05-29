import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);
const KEY = 'ajeena_cart';

function readCart(){
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
}

export function CartProvider({children}) {
  const [items, setItems] = useState(readCart());
  const save = (next) => { setItems(next); localStorage.setItem(KEY, JSON.stringify(next)); };
  const addItem = (product, quantity = 1) => {
    const next = [...items];
    const existing = next.find(x => x.id === product.id);
    if (existing) existing.quantity += quantity;
    else next.push({ id: product.id, name_en: product.name_en, name_ar: product.name_ar, price: Number(product.price), quantity, image_url: product.image_url, size_en: product.size_en, size_ar: product.size_ar });
    save(next);
  };
  const updateQty = (id, qty) => {
    if (qty <= 0) return removeItem(id);
    save(items.map(x => x.id === id ? {...x, quantity: qty} : x));
  };
  const removeItem = (id) => save(items.filter(x => x.id !== id));
  const clearCart = () => save([]);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const value = useMemo(() => ({items, addItem, updateQty, removeItem, clearCart, subtotal, count}), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
