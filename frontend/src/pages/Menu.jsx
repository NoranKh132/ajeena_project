import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../services/api.js';
import { fallbackCategories, fallbackProducts } from '../data/fallbackProducts.js';
import ProductCard from '../components/ProductCard.jsx';
import { useLang } from '../context/LanguageContext.jsx';

export default function Menu(){
  const { lang, t } = useLang();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'all';
  const searchFromUrl = (searchParams.get('search') || '').toLowerCase();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(categoryFromUrl);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.getCategories(), api.getProducts()])
      .then(([cats, prods]) => { setCategories(cats); setProducts(prods); })
      .catch(() => { setCategories(fallbackCategories); setProducts(fallbackProducts); })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setActive(categoryFromUrl);
  }, [categoryFromUrl]);

  const changeCategory = (slug) => {
    setActive(slug);
    if (slug === 'all') setSearchParams({});
    else setSearchParams({ category: slug });
  };

  const filtered = useMemo(() => {
    const byCategory = active === 'all' ? products : products.filter(p => p.category?.slug === active);
    if (!searchFromUrl) return byCategory;
    return byCategory.filter(p => {
      const text = `${p.name_ar || ''} ${p.name_en || ''} ${p.description_ar || ''} ${p.description_en || ''}`.toLowerCase();
      return text.includes(searchFromUrl) || (searchFromUrl === 'diet' && (text.includes('دايت') || text.includes('sugar free')));
    });
  }, [active, products, searchFromUrl]);
  return <main className="page-section">
    <div className="container">
      <div className="page-head"><span>Bread Without Crumbs</span><h1>{t.categories}</h1><p>{lang === 'ar' ? 'اختاري من مخبوزات عجينة الطازة.' : 'Choose from Ajeena’s fresh warm bakes.'}</p></div>
      <div className="filter-tabs">
        <button onClick={() => changeCategory('all')} className={active==='all'?'active':''}>{t.all}</button>
        {categories.map(c => <button key={c.id} onClick={() => changeCategory(c.slug)} className={active===c.slug?'active':''}>{lang === 'ar' ? c.name_ar : c.name_en}</button>)}
      </div>
      {loading ? <p>{t.loading}</p> : <div className="row g-4">{filtered.map(p => <div className="col-md-6 col-lg-4" key={p.id}><ProductCard product={p} /></div>)}</div>}
    </div>
  </main>
}
