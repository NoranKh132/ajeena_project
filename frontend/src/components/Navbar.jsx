import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useCart } from '../context/CartContext.jsx';
import { useLang } from '../context/LanguageContext.jsx';

export default function Navbar(){
  const { count } = useCart();
  const { lang, setLang, t } = useLang();
  return <>
    <div className="top-ribbon">{lang === 'ar' ? 'مخبوزات طازة حسب الطلب' : 'Fresh bakes made to order'}</div>
    <nav className="navbar navbar-expand-lg sticky-top ajeena-nav">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt={lang === 'ar' ? 'عجينة' : 'Ajeena'} className="nav-logo" />
          <span className="brand-word">{lang === 'ar' ? 'عجينة' : 'Ajeena'}</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">{t.home}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/menu">{t.menu}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">{t.about}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">{t.contact}</NavLink></li>
          </ul>
          <div className="d-flex align-items-center gap-2">
            <button className="lang-btn" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>{lang === 'ar' ? 'EN' : 'عربي'}</button>
            <Link className="cart-pill" to="/cart"><i className="bi bi-basket2"></i><span>{count}</span></Link>
          </div>
        </div>
      </div>
    </nav>
  </>
}
