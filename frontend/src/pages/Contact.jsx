import { useLang } from '../context/LanguageContext.jsx';

const instagramUrl = 'https://www.instagram.com/aagena.eg?igsh=MXd1YjJicnZpN25uYg==';
const facebookUrl = 'https://www.facebook.com/share/1CXARJbJPr/?mibextid=wwXIfr';

export default function Contact(){
  const {t, lang}=useLang();
  return <main className="page-section">
    <div className="container">
      <div className="contact-card">
        <h1>{t.contact}</h1>
        <p>{lang==='ar'?'للطلبات والاستفسارات تابعينا على انستجرام أو فيس بوك.':'For orders and questions, reach us on Instagram or Facebook.'}</p>
        <a className="contact-line" href={instagramUrl} target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i> @aagena.eg</a>
        <a className="contact-line" href={facebookUrl} target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i> Facebook</a>
      </div>
    </div>
  </main>
}
