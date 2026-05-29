import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);
const dict = {
  en: {
    home:'Home', menu:'Menu', about:'About', cart:'Cart', contact:'Contact', orderNow:'Order Now', exploreMenu:'Explore Menu',
    heroTitle:'Slow, simple, and honest bread.', heroText:'A warm bakery specializing in sourdough and handmade bakes with long fermentation and simple ingredients.',
    featured:'Fresh from the oven', categories:'Our Menu', add:'Add to cart', view:'View details', checkout:'Checkout', total:'Total', subtotal:'Subtotal',
    remove:'Remove', empty:'Your cart is empty.', placeOrder:'Place Order', name:'Name', phone:'Phone', address:'Address', notes:'Notes', send:'Send Order',
    aboutTitle:'Ajeena is slow, simple, and honest.', aboutText:'A warm bakery specializing in sourdough and handmade bakes using simple ingredients and long fermentation.',
    orderSuccess:'Order created successfully.', loading:'Loading menu...', all:'All', size:'Size', price:'Price'
  },
  ar: {
    home:'الرئيسية', menu:'المنيو', about:'عن عجينة', cart:'السلة', contact:'تواصل', orderNow:'اطلبي الآن', exploreMenu:'شوفي المنيو',
    heroTitle:'عجينة بطيئة، بسيطة، وحقيقية.', heroText:'مخبز دافئ متخصص في الساور دو والمخبوزات اليدوية بتخمير طويل ومكونات بسيطة.',
    featured:'طالع من الفرن', categories:'المنيو', add:'أضيفي للسلة', view:'التفاصيل', checkout:'الدفع', total:'الإجمالي', subtotal:'المجموع',
    remove:'حذف', empty:'السلة فاضية.', placeOrder:'تأكيد الطلب', name:'الاسم', phone:'الموبايل', address:'العنوان', notes:'ملاحظات', send:'إرسال الطلب',
    aboutTitle:'عجينة بطيئة، بسيطة، وحقيقية.', aboutText:'مخبز دافئ متخصص في الساور دو والمخبوزات اليدوية بتخمير طويل ومكونات بسيطة.',
    orderSuccess:'تم تسجيل الطلب بنجاح.', loading:'جاري تحميل المنيو...', all:'الكل', size:'الحجم', price:'السعر'
  }
};

export function LanguageProvider({children}) {
  const [lang, setLang] = useState(localStorage.getItem('ajeena_lang') || 'ar');
  useEffect(() => {
    localStorage.setItem('ajeena_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: dict[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
