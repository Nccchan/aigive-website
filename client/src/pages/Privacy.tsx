import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="pb-20">
      <div className="bg-slate-100 py-16 mb-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">{t('footer.privacy')}</h1>
        </div>
      </div>

      <div className="container max-w-3xl prose prose-slate prose-lg">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg soft-shadow">
          <h3>{t('privacy.section1.title')}</h3>
          <p>
            {t('privacy.section1.content')}
          </p>
          <ul>
            <li>{t('privacy.section1.list1')}</li>
            <li>{t('privacy.section1.list2')}</li>
            <li>{t('privacy.section1.list3')}</li>
          </ul>

          <h3>{t('privacy.section2.title')}</h3>
          <p>
            {t('privacy.section2.content')}
          </p>

          <h3>{t('privacy.section3.title')}</h3>
          <p>
            {t('privacy.section3.content')}
          </p>

          <h3>{t('privacy.section4.title')}</h3>
          <p>
            {t('privacy.section4.content')}
          </p>
        </div>
      </div>
    </div>
  );
}
