import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../services/api.js';
import { fallbackProducts } from '../data/fallbackProducts.js';
import { useCart } from '../context/CartContext.jsx';
import { useLang } from '../context/LanguageContext.jsx';

export default function ProductDetails(){
  const { id } = useParams();
  const { addItem } = useCart();
  const { lang, t } = useLang();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  useEffect(() => { api.getProduct(id).then(setProduct).catch(() => setProduct(fallbackProducts.find(p => p.id === Number(id)))); }, [id]);
  if(!product) return <main className="page-section"><div className="container">{t.loading}</div></main>;
  const name = lang === 'ar' ? product.name_ar : product.name_en;
  const desc = lang === 'ar' ? product.description_ar : product.description_en;
  const size = lang === 'ar' ? product.size_ar : product.size_en;
  return <main className="page-section product-details">
    <div className="container">
      <div className="breadcrumb-soft"><Link to="/menu">{t.menu}</Link> / {name}</div>
      <div className="row g-5 align-items-center">
        <div className="col-lg-6"><div className="detail-art">{product.image_url ? <img src={product.image_url} alt={name}/> : <div className="big-bread"><span></span></div>}</div></div>
        <div className="col-lg-6"><div className="category-chip mb-3">{lang === 'ar' ? product.category?.name_ar : product.category?.name_en}</div><h1>{name}</h1><p className="lead-soft">{desc}</p><p className="detail-meta">{t.size}: {size}</p><div className="detail-price">{Number(product.price).toFixed(0)} EGP</div><div className="qty-control"><button onClick={()=>setQty(Math.max(1, qty-1))}>-</button><span>{qty}</span><button onClick={()=>setQty(qty+1)}>+</button></div><button className="primary-btn mt-4" onClick={()=>addItem(product, qty)}>{t.add}</button></div>
      </div>
    </div>
  </main>
}
