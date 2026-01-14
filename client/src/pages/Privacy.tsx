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
          <h3>1. 個人情報の利用目的</h3>
          <p>
            当社は、お問い合わせフォーム等を通じて取得した個人情報を、以下の目的のために利用します。
          </p>
          <ul>
            <li>お問い合わせへの回答および連絡</li>
            <li>当社のサービス・商品のご案内</li>
            <li>サービスの改善および向上</li>
          </ul>

          <h3>2. 個人情報の第三者提供</h3>
          <p>
            当社は、法令に基づく場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供することはありません。
          </p>

          <h3>3. 個人情報の管理</h3>
          <p>
            当社は、個人情報の漏洩、滅失または毀損の防止その他個人情報の安全管理のために、必要かつ適切な措置を講じます。
          </p>

          <h3>4. お問い合わせ窓口</h3>
          <p>
            本ポリシーに関するお問い合わせは、お問い合わせフォームよりお願いいたします。
          </p>
        </div>
      </div>
    </div>
  );
}
