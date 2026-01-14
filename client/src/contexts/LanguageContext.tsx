import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ja: {
    'nav.home': 'ホーム',
    'nav.services': '事業内容',
    'nav.company': '企業情報',
    'nav.contact': 'お問い合わせ',
    'hero.title': '日本の玩具を安心・安全にお届けします',
    'hero.subtitle': 'その先に待つ「感動」のために。',
    'hero.cta': '事業内容を見る',
    'services.title': '事業紹介',
    'services.b2c.title': '物販事業 (B2C)',
    'services.b2c.desc': 'Amazon、楽天市場、Yahoo!ショッピングなど、主要ECモールを通じて、お客様に直接商品をお届けします。',
    'services.b2b.title': '卸売事業 (B2B)',
    'services.b2b.desc': '国内のトレカショップ、玩具店、小売業者様へ、各種商材をご提案します。',
    'services.sns.title': 'SNSマーケティング支援',
    'services.sns.desc': '独自に培ったSNS販売戦略に基づく、実践的なコンサルティングをご提供します。',
    'services.buying.title': '買取事業',
    'services.buying.desc': '古物商許可に基づき、対面・非対面（宅配）での買取を行っております。大切なお品物を丁寧に査定いたします。',
    'company.title': '企業情報',
    'company.name': '会社名',
    'company.rep': '代表者',
    'company.address': '所在地',
    'company.est': '設立',
    'company.capital': '資本金',
    'company.business': '事業概要',
    'company.license': '古物商許可証',
    'contact.title': 'お問い合わせ',
    'contact.name': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.message': 'お問い合わせ内容',
    'contact.submit': '送信する',
    'footer.privacy': 'プライバシーポリシー',
    'footer.copyright': '© 2024 AiGIVE Inc. All Rights Reserved.',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.company': 'Company',
    'nav.contact': 'Contact',
    'hero.title': 'Delivering Japanese Toys with Safety and Trust',
    'hero.subtitle': 'For the "Excitement" that lies ahead.',
    'hero.cta': 'View Services',
    'services.title': 'Our Services',
    'services.b2c.title': 'Retail (B2C)',
    'services.b2c.desc': 'We deliver products directly to customers through major EC malls such as Amazon, Rakuten, and Yahoo! Shopping.',
    'services.b2b.title': 'Wholesale (B2B)',
    'services.b2b.desc': 'We propose various products to domestic trading card shops, toy stores, and retailers.',
    'services.sns.title': 'SNS Marketing Consulting',
    'services.sns.desc': 'We provide practical consulting based on our unique SNS sales strategies.',
    'services.buying.title': 'Buying Service',
    'services.buying.desc': 'Based on our antique dealer license, we offer both in-person and non-face-to-face (mail-in) buying services. We carefully appraise your valuable items.',
    'company.title': 'Company Info',
    'company.name': 'Company Name',
    'company.rep': 'Representative',
    'company.address': 'Address',
    'company.est': 'Established',
    'company.capital': 'Capital',
    'company.business': 'Business Overview',
    'company.license': 'Antique Dealer License',
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2024 AiGIVE Inc. All Rights Reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['ja']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
