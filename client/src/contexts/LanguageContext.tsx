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
    'services.subtitle': '物販、卸売、マーケティング、そして買取。お客様に喜びと価値を届けるための包括的なソリューションを提供します。',
    'services.b2c.title': '物販事業 (B2C)',
    'services.b2c.desc': 'Amazon、楽天市場、Yahoo!ショッピングなど、主要ECモールを通じて、お客様に直接商品をお届けします。安全性とスピードを重視し、快適なショッピング体験を提供します。',
    'services.b2b.title': '卸売事業 (B2B)',
    'services.b2b.desc': '国内のトレカショップ、玩具店、小売業者様へ、各種商材をご提案します。独自のネットワークを活かし、人気商品や希少なアイテムを安定供給いたします。',
    'services.b2b.list1': 'トレーディングカード・ホビー商品',
    'services.b2b.list2': '知育玩具',
    'services.b2b.list3': '日用品',
    'services.sns.title': 'SNSマーケティング支援',
    'services.sns.desc': '独自に培ったSNS販売戦略に基づく、実践的なコンサルティングをご提供します。理論だけでなく、私たちが実際に成果を出した「売れる」ためのノウハウを共有します。',
    'services.sns.expertise.title': '私たちの強み',
    'services.sns.expertise.desc': 'コンテンツ制作からコミュニティ運営まで、Instagram、X (Twitter)、TikTokなどのプラットフォームで顧客とエンゲージメントを築くための詳細なガイドを行います。',
    'services.buying.title': '買取事業',
    'services.buying.desc': '古物商許可に基づき、対面・非対面（宅配）での買取を行っております。大切なお品物を丁寧に査定いたします。',
    'services.buying.in_person.title': '対面買取',
    'services.buying.in_person.desc': '店舗に直接お持ち込みいただき、その場で査定・買取いたします。',
    'services.buying.mail_in.title': '宅配買取',
    'services.buying.mail_in.desc': '全国どこからでも郵送で買取可能です。簡単・便利にご利用いただけます。',
    'feature.title': '日本の品質を世界へ',
    'feature.desc': 'AiGIVEは「遊び」の力を信じています。私たちの使命は、安全で高品質な日本の玩具を世界中の子供たちや家族に届けることです。広範なネットワークとマーケティングの専門知識を通じて、日本の職人技と世界の喜びをつなぐ架け橋となります。',
    'company.title': '企業情報',
    'company.profile_title': '会社概要',
    'company.name': '会社名',
    'company.name_value': '株式会社AiGIVE',
    'company.rep': '代表者',
    'company.rep_value': '内藤 夏樹',
    'company.address': '所在地',
    'company.address_value': '〒940-0062 新潟県長岡市大手通2-2-6',
    'company.est': '設立',
    'company.est_value': '2024年6月',
    'company.capital': '資本金',
    'company.capital_value': '500万円',
    'company.business': '事業概要',
    'company.business_value': '玩具・日用品の卸売・販売、マーケティング支援',
    'company.license': '古物商許可番号',
    'company.license_value': '第461350000709号',
    'company.license_auth': '公安委員会',
    'company.license_auth_value': '新潟県公安委員会',
    'company.license_date': '許可年月日',
    'company.license_date_value': '令和6年（2024年）7月25日',
    'company.corporate_number': '法人番号',
    'company.corporate_number_value': '5110001038461',
    'company.invoice_number': '適格請求書発行事業者',
    'company.invoice_number_value': 'T5110001038461',
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'ご質問やご相談がございましたら、お気軽にお問い合わせください。',
    'contact.name': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.type': 'お問い合わせ種別',
    'contact.type.b2b': 'B2B取引について',
    'contact.type.consulting': 'コンサルティング依頼',
    'contact.type.buying': '買取について',
    'contact.type.other': 'その他',
    'contact.message': 'お問い合わせ内容',
    'contact.submit': '送信する',
    'footer.privacy': 'プライバシーポリシー',
    'footer.copyright': '© 2024 AiGIVE CO.,LTD. All Rights Reserved.',
    'privacy.title': 'プライバシーポリシー',
    'privacy.section1.title': '1. 個人情報の利用目的',
    'privacy.section1.content': '当社は、お問い合わせフォーム等を通じて取得した個人情報を、以下の目的のために利用します。',
    'privacy.section1.list1': 'お問い合わせへの回答および連絡',
    'privacy.section1.list2': '当社のサービス・商品のご案内',
    'privacy.section1.list3': 'サービスの改善および向上',
    'privacy.section2.title': '2. 個人情報の第三者提供',
    'privacy.section2.content': '当社は、法令に基づく場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供することはありません。',
    'privacy.section3.title': '3. 個人情報の管理',
    'privacy.section3.content': '当社は、個人情報の漏洩、滅失または毀損の防止その他個人情報の安全管理のために、必要かつ適切な措置を講じます。',
    'privacy.section4.title': '4. お問い合わせ窓口',
    'privacy.section4.content': '本ポリシーに関するお問い合わせは、お問い合わせフォームよりお願いいたします。',
    'common.learn_more': '詳細を見る',
    'common.contact_us': 'お問い合わせ',
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
    'services.subtitle': 'Retail, Wholesale, Marketing, and Buying. We provide comprehensive solutions to deliver joy and value to our customers.',
    'services.b2c.title': 'Retail (B2C)',
    'services.b2c.desc': 'We deliver products directly to customers through major EC malls such as Amazon, Rakuten, and Yahoo! Shopping. We prioritize safety and speed to ensure a delightful shopping experience.',
    'services.b2b.title': 'Wholesale (B2B)',
    'services.b2b.desc': 'We propose various products to domestic trading card shops, toy stores, and retailers. Leveraging our unique network, we provide a stable supply of popular and rare items.',
    'services.b2b.list1': 'Trading Cards & Hobby Goods',
    'services.b2b.list2': 'Educational Toys',
    'services.b2b.list3': 'Daily Necessities',
    'services.sns.title': 'SNS Marketing Consulting',
    'services.sns.desc': 'We provide practical consulting based on our unique SNS sales strategies. We share not just theory, but the know-how to "sell" that has actually produced results for us.',
    'services.sns.expertise.title': 'Our Expertise',
    'services.sns.expertise.desc': 'From content creation to community management, we guide you through the nuances of engaging customers on platforms like Instagram, X (Twitter), and TikTok.',
    'services.buying.title': 'Buying Service',
    'services.buying.desc': 'Based on our antique dealer license, we offer both in-person and non-face-to-face (mail-in) buying services. We carefully appraise your valuable items.',
    'services.buying.in_person.title': 'In-Person',
    'services.buying.in_person.desc': 'Bring your items directly to our shop for immediate appraisal.',
    'services.buying.mail_in.title': 'Mail-In',
    'services.buying.mail_in.desc': 'Send your items from anywhere in Japan. Easy and convenient.',
    'feature.title': 'Connecting Japan\'s Quality to the World',
    'feature.desc': 'At AiGIVE, we believe in the power of play. Our mission is to deliver safe, high-quality Japanese toys that bring smiles to children and families worldwide. Through our extensive network and marketing expertise, we bridge the gap between Japanese craftsmanship and global joy.',
    'company.title': 'Company Info',
    'company.profile_title': 'Corporate Profile',
    'company.name': 'Company Name',
    'company.name_value': 'AiGIVE CO.,LTD.',
    'company.rep': 'Representative',
    'company.rep_value': 'Natsuki Naito',
    'company.address': 'Address',
    'company.address_value': '2-2-6 Otedori, Nagaoka City, Niigata Pref. 940-0062',
    'company.est': 'Established',
    'company.est_value': 'June 2024',
    'company.capital': 'Capital',
    'company.capital_value': '5 Million JPY',
    'company.business': 'Business Overview',
    'company.business_value': 'Wholesale/Retail of Toys & Daily Goods, Marketing Support',
    'company.license': 'Antique Dealer License No.',
    'company.license_value': 'No. 461350000709',
    'company.license_auth': 'Public Safety Commission',
    'company.license_auth_value': 'Niigata Prefectural Public Safety Commission',
    'company.license_date': 'Date of Permit',
    'company.license_date_value': 'July 25, 2024',
    'company.corporate_number': 'Corporate Number',
    'company.corporate_number_value': '5110001038461',
    'company.invoice_number': 'Invoice Registration Number',
    'company.invoice_number_value': 'T5110001038461',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'d love to hear from you. Please fill out the form below.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.type': 'Inquiry Type',
    'contact.type.b2b': 'B2B Transaction',
    'contact.type.consulting': 'Consulting Request',
    'contact.type.buying': 'Buying Service',
    'contact.type.other': 'Other',
    'contact.message': 'Message',
    'contact.submit': 'Send',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2024 AiGIVE CO.,LTD. All Rights Reserved.',
    'privacy.title': 'Privacy Policy',
    'privacy.section1.title': '1. Purpose of Use of Personal Information',
    'privacy.section1.content': 'We use personal information obtained through inquiry forms, etc., for the following purposes:',
    'privacy.section1.list1': 'To respond to inquiries and contact you',
    'privacy.section1.list2': 'To provide information about our services and products',
    'privacy.section1.list3': 'To improve and enhance our services',
    'privacy.section2.title': '2. Provision of Personal Information to Third Parties',
    'privacy.section2.content': 'We will not provide personal information to third parties without obtaining the prior consent of the individual, except as required by law.',
    'privacy.section3.title': '3. Management of Personal Information',
    'privacy.section3.content': 'We will take necessary and appropriate measures to prevent the leakage, loss, or damage of personal information and to otherwise safely manage personal information.',
    'privacy.section4.title': '4. Contact for Inquiries',
    'privacy.section4.content': 'Please contact us via the inquiry form regarding this policy.',
    'common.learn_more': 'Learn More',
    'common.contact_us': 'Contact Us',
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
