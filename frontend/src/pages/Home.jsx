import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import menuOriginal from '../assets/menu-original.png';
import { api } from '../services/api.js';
import { fallbackProducts } from '../data/fallbackProducts.js';
import ProductCard from '../components/ProductCard.jsx';
import { useLang } from '../context/LanguageContext.jsx';

export default function Home(){
  const { lang, t } = useLang();
  const [products, setProducts] = useState([]);
  useEffect(() => { api.getProducts('?featured=true').then(setProducts).catch(() => setProducts(fallbackProducts.filter(p=>p.is_featured))); }, []);
  return <main>
    <section className="hero-section sent-hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="sent-logo-arch"><img src={logo} alt="Ajeena" /></div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-copy">
              <div className="eyebrow">Bread Without Crumbs</div>
              <h1>{t.heroTitle}</h1>
              <p>{t.heroText}</p>
              <div className="d-flex gap-3 flex-wrap justify-content-lg-start justify-content-center">
                <Link to="/menu" className="primary-btn">{t.exploreMenu}</Link>
                <Link to="/about" className="secondary-btn">{lang === 'ar' ? 'اعرفي أكتر' : 'Learn more'}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="container">
        <div className="section-title"><span>{t.featured}</span><h2>{lang === 'ar' ? 'الأكثر طلبًا' : 'Best sellers'}</h2></div>
        <div className="row g-4">{products.slice(0,4).map(p => <div className="col-md-6 col-lg-3" key={p.id}><ProductCard product={p} /></div>)}</div>
      </div>
    </section>

    <section className="about-band">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6"><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><Link to="/about" className="text-link">{lang === 'ar' ? 'اعرفي أكتر' : 'Learn more'}</Link></div>
          <div className="col-lg-6"><div className="menu-preview"><img src={logo} alt="Ajeena menu" /></div></div>
        </div>
      </div>
    </section>
  </main>
}
