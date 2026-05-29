export const fallbackCategories = [
  { id: 1, slug: 'sourdough', name_en: 'Sourdough', name_ar: 'الساور دو' },
  { id: 2, slug: 'biscuits', name_en: 'Biscuits', name_ar: 'البسكويت' },
  { id: 3, slug: 'pizza', name_en: 'Pizza', name_ar: 'البيتزا' },
  { id: 4, slug: 'ciabatta', name_en: 'Ciabatta', name_ar: 'شيباتا' },
];

export const fallbackProducts = [
  {id:1, category:fallbackCategories[0], name_en:'Plain white sourdough', name_ar:'ساور دو أبيض سادة', price:'90.00', size_en:'Regular loaf', size_ar:'رغيف', is_featured:true, description_en:'Naturally fermented sourdough loaf.', description_ar:'رغيف ساور دو طبيعي بتخمير بطيء.', image_url:null},
  {id:2, category:fallbackCategories[0], name_en:'Herb sourdough', name_ar:'ساور دو أبيض بالحبوب', price:'100.00', size_en:'Regular loaf', size_ar:'رغيف', is_featured:true, description_en:'Sourdough with aromatic herbs.', description_ar:'ساور دو بالأعشاب العطرية.', image_url:null},
  {id:3, category:fallbackCategories[0], name_en:'Diet sourdough', name_ar:'ساور دو أبيض دايت', price:'110.00', size_en:'Regular loaf', size_ar:'رغيف', is_featured:false, description_en:'White sourdough prepared as a lighter diet option.', description_ar:'ساور دو أبيض دايت خفيف.', image_url:null},
  {id:4, category:fallbackCategories[1], name_en:'Plain oat biscuit', name_ar:'بسكوت شوفان سادة', price:'120.00', size_en:'Half kilo approx.', size_ar:'نصف كيلو تقريبًا', is_featured:true, description_en:'Crunchy oat biscuits.', description_ar:'بسكوت شوفان مقرمش وخفيف.', image_url:null},
  {id:5, category:fallbackCategories[1], name_en:'Sugar free herb oat biscuit', name_ar:'بسكوت شوفان بالحبوب سكر دايت', price:'140.00', size_en:'Half kilo approx.', size_ar:'نصف كيلو تقريبًا', is_featured:true, description_en:'Sugar free oat biscuits with herbs.', description_ar:'بسكوت شوفان دايت بالأعشاب.', image_url:null},
  {id:6, category:fallbackCategories[2], name_en:'Medium pizza dough', name_ar:'عجينة بيتزا وسط', price:'30.00', size_en:'1 piece', size_ar:'قطعة', is_featured:false, description_en:'Ready-to-bake pizza dough.', description_ar:'عجينة بيتزا جاهزة للخبز.', image_url:null},
  {id:7, category:fallbackCategories[3], name_en:'White ciabatta 8 pieces', name_ar:'شيباتا أبيض ٨ قطع', price:'100.00', size_en:'8 pieces', size_ar:'٨ قطع', is_featured:false, description_en:'Soft airy ciabatta.', description_ar:'شيباتا خفيفة وهشة.', image_url:null},
];
