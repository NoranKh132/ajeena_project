import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useLang } from '../context/LanguageContext.jsx';

const instagramUrl = 'https://www.instagram.com/aagena.eg?igsh=MXd1YjJicnZpN25uYg==';
const facebookUrl = 'https://www.facebook.com/share/1CXARJbJPr/?mibextid=wwXIfr';

export default function Footer(){
  const { lang, t } = useLang();
  const menuLinks = [
    { to: '/menu?category=sourdough', ar: 'الساور دو', en: 'Sourdough' },
    { to: '/menu?category=biscuits', ar: 'البسكويت', en: 'Biscuits' },
    { to: '/menu?category=biscuits&search=diet', ar: 'بسكويت سكر دايت', en: 'Sugar-free biscuits' },
    { to: '/menu?category=pizza', ar: 'البيتزا', en: 'Pizza' },
    { to: '/menu?category=ciabatta', ar: 'شيباتا', en: 'Ciabatta' },
  ];

  return <footer className="footer-section">
    <div className="container">
      <div className="newsletter-card row align-items-center g-3">
        <div className="col-lg-7">
          <h2>{lang === 'ar' ? 'خلي ريحة العيش توصلك' : 'Let the smell of bread find you'}</h2>
          <p>{lang === 'ar' ? 'تابعنا للمنيو الجديد والطلبات الموسمية.' : 'Follow for new menu drops and seasonal bakes.'}</p>
        </div>
        <div className="col-lg-5">
          <div className="newsletter-input"><i className="bi bi-envelope"></i><input placeholder={lang === 'ar' ? 'ايميلك' : 'Your email'} /><button>{lang === 'ar' ? 'اشترك' : 'Subscribe'}</button></div>
        </div>
      </div>
      <div className="row gy-4 footer-main">
        <div className="col-lg-5">
          <img src={logo} alt="Ajeena" className="footer-logo" />
          <p className="footer-text">{t.aboutText}</p>
          <div className="socials">
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <h5>{t.menu}</h5>
          {menuLinks.map(item => <Link key={item.to} to={item.to} className="footer-link">{lang === 'ar' ? item.ar : item.en}</Link>)}
        </div>
        <div className="col-6 col-lg-2"><h5>{lang === 'ar' ? 'الطلب' : 'Orders'}</h5><Link className="footer-link" to="/cart">{t.checkout}</Link><p>Delivery</p><p>Custom orders</p></div>
        <div className="col-lg-3"><h5>{t.contact}</h5><p>{lang === 'ar' ? 'تابعنا واطلب من ' : 'Follow and order through social media'}</p><p><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram: @aagena.eg</a></p><p><a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a></p></div>
      </div>
      <div className="copyright">© 2026 {lang === 'ar' ? 'عجينة' : 'Ajeena'} — Bread Without Crumbs</div>
    </div>
  </footer>
}
