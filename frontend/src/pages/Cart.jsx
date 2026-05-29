import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { api } from '../services/api.js';

export default function Cart(){
  const { items, updateQty, removeItem, clearCart, subtotal } = useCart();
  const { lang, t } = useLang();
  const [form, setForm] = useState({customer_name:'', phone:'', address:'', notes:''});
  const [message, setMessage] = useState('');
  const delivery = items.length ? 25 : 0;
  const total = subtotal + delivery;
  const submit = async (e) => {
    e.preventDefault();
    const payload = {...form, items: items.map(x => ({product_id: x.id, quantity: x.quantity}))};
    try { await api.createOrder(payload); setMessage(t.orderSuccess); clearCart(); }
    catch { setMessage(lang === 'ar' ? 'تعذر إرسال الطلب، تأكدي من تشغيل السيرفر.' : 'Could not submit order. Make sure backend is running.'); }
  };
  return <main className="page-section">
    <div className="container">
      <div className="page-head"><h1>{t.cart}</h1></div>
      {items.length === 0 ? <div className="empty-card"><p>{message || t.empty}</p><Link to="/menu" className="primary-btn">{t.menu}</Link></div> : <div className="row g-4">
        <div className="col-lg-7"><div className="cart-list">{items.map(item => <div className="cart-row" key={item.id}><div className="mini-bread"></div><div className="flex-grow-1"><h5>{lang === 'ar' ? item.name_ar : item.name_en}</h5><p>{t.size}: {lang === 'ar' ? item.size_ar : item.size_en}</p><strong>{item.price} EGP</strong></div><div className="qty-control small"><button onClick={()=>updateQty(item.id,item.quantity-1)}>-</button><span>{item.quantity}</span><button onClick={()=>updateQty(item.id,item.quantity+1)}>+</button></div><button className="delete-btn" onClick={()=>removeItem(item.id)}><i className="bi bi-trash"></i></button></div>)}</div></div>
        <div className="col-lg-5"><div className="checkout-card"><h3>{t.checkout}</h3><div className="summary-line"><span>{t.subtotal}</span><b>{subtotal.toFixed(0)} EGP</b></div><div className="summary-line"><span>Delivery</span><b>{delivery} EGP</b></div><div className="summary-line total"><span>{t.total}</span><b>{total.toFixed(0)} EGP</b></div><form onSubmit={submit} className="order-form"><input required placeholder={t.name} value={form.customer_name} onChange={e=>setForm({...form, customer_name:e.target.value})}/><input required placeholder={t.phone} value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/><textarea placeholder={t.address} value={form.address} onChange={e=>setForm({...form, address:e.target.value})}></textarea><textarea placeholder={t.notes} value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})}></textarea><button className="primary-btn w-100">{t.send}</button></form>{message && <p className="mt-3">{message}</p>}</div></div>
      </div>}
    </div>
  </main>
}
