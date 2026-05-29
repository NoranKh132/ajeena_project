import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useLang } from '../context/LanguageContext.jsx';

export default function ProductCard({product}){
  const { addItem } = useCart();
  const { lang, t } = useLang();
  const name = lang === 'ar' ? product.name_ar : product.name_en;
  const size = lang === 'ar' ? product.size_ar : product.size_en;
  return <div className="product-card h-100">
    <Link to={`/products/${product.id}`} className="product-art text-decoration-none">
      {product.image_url ? <img src={product.image_url} alt={name} /> : <div className="bread-illustration"><span></span></div>}
    </Link>
    <div className="product-body">
      <div className="category-chip">{lang === 'ar' ? product.category?.name_ar : product.category?.name_en}</div>
      <Link to={`/products/${product.id}`} className="product-name">{name}</Link>
      <p className="small text-muted mb-2">{t.size}: {size}</p>
      <div className="d-flex justify-content-between align-items-center gap-2">
        <strong className="price">{Number(product.price).toFixed(0)} EGP</strong>
        <button className="add-btn" onClick={() => addItem(product)}>{t.add}</button>
      </div>
    </div>
  </div>
}
