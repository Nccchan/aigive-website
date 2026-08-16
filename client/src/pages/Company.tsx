import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 企業情報。
 *
 * 2026-08-16 外部レビュー: 「アイコン付きの大きなカードUIをやめる。法人担当者が見たいのは
 * かっこいい会社概要ではなく、必要な情報をすぐ確認できる会社概要」。
 * 白地＋横罫線の表にした。アイコンは情報を足していないので落とす。
 */

const ROWS: Array<{ label: string; value: string }> = [
  { label: "company.name", value: "company.name_value" },
  { label: "company.rep", value: "company.rep_value" },
  { label: "company.address", value: "company.address_value" },
  { label: "company.est", value: "company.est_value" },
  { label: "company.capital", value: "company.capital_value" },
  { label: "company.business", value: "company.business_value" },
  { label: "company.corporate_number", value: "company.corporate_number_value" },
  { label: "company.invoice_number", value: "company.invoice_number_value" },
  { label: "company.email", value: "company.email_value" },
];

export default function Company() {
  const { t } = useLanguage();

  return (
    <div className="pb-20" style={{ color: "#1A1A1A" }}>
      <div className="py-16 mb-12" style={{ background: "#F2F2F2" }}>
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-heading font-bold">{t("company.title")}</h1>
        </div>
      </div>

      <div className="container max-w-4xl">
        <h2 className="text-xl font-heading font-bold">{t("company.profile_title")}</h2>

        <div className="mt-6 border bg-white" style={{ borderColor: "#D6D6D6" }}>
          <table className="w-full text-left text-sm">
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label} className="border-b last:border-b-0" style={{ borderColor: "#D6D6D6" }}>
                  <th
                    className="w-1/3 px-6 py-4 align-top font-bold md:w-1/4"
                    style={{ background: "#F2F2F2" }}
                  >
                    {t(r.label)}
                  </th>
                  <td className="px-6 py-4" style={{ color: "#626262" }}>
                    {t(r.value)}
                  </td>
                </tr>
              ))}
              {/* 許認可は行を分けず1行に。番号と公安委員会は必ずセットで見せる */}
              <tr>
                <th className="px-6 py-4 align-top font-bold" style={{ background: "#F2F2F2" }}>
                  {t("company.license")}
                </th>
                <td className="px-6 py-4" style={{ color: "#626262" }}>
                  {t("company.license_value")}
                  <br />
                  {t("company.license_auth_value")}／{t("company.license_date_value")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 border" style={{ borderColor: "#D6D6D6" }}>
          <iframe
            title={t("company.address")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.666874868684!2d138.8516!3d37.4456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5a9b0a0a0a0a1%3A0x0!2z5paw5r2f55yM6ZW35bKh5biC5aSn5omL6YCa77yS5LiB55uu77yS4oiS77yW!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
