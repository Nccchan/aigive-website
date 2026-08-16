import { useLanguage } from "@/contexts/LanguageContext";

export default function Company() {
  const { language, t } = useLanguage();
  const isJa = language === "ja";

  const companyData = [
    { label: t("company.name"), value: t("company.name_value") },
    { label: t("company.rep"), value: t("company.rep_value") },
    { label: t("company.address"), value: t("company.address_value") },
    { label: t("company.est"), value: t("company.est_value") },
    { label: t("company.capital"), value: t("company.capital_value") },
    { label: t("company.business"), value: t("company.business_value") },
    { label: t("company.corporate_number"), value: t("company.corporate_number_value") },
    { label: t("company.invoice_number"), value: t("company.invoice_number_value") },
    { label: t("company.license"), value: `${t("company.license_value")} (${t("company.license_auth_value")})` },
    { label: t("company.email"), value: t("company.email_value") },
  ];

  return (
    <div className="bg-white text-[#1A1A1A]">
      <section className="border-b border-[#D6D6D6] bg-[#F2F2F2]">
        <div className="container py-16 md:py-20">
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] md:text-5xl">{t("company.title")}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#4B4B4B]">
            {isJa
              ? "法人のお客様がお取引前に確認いただける、株式会社AiGIVEの基本情報です。"
              : "Core company information for customers and business partners conducting due diligence on AiGIVE Co., Ltd."}
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold">{t("company.profile_title")}</h2>
            <p className="mt-4 text-sm leading-7 text-[#626262]">
              {isJa
                ? "登記・許認可に関する情報を含め、取引判断に必要な基本事項を掲載しています。"
                : "This profile includes registration and licensing information relevant to business transactions."}
            </p>
          </div>

          <dl className="border-t border-[#D6D6D6]">
            {companyData.map((item) => (
              <div key={item.label} className="grid gap-2 border-b border-[#D6D6D6] py-5 md:grid-cols-[220px_1fr] md:gap-8">
                <dt className="text-sm font-bold text-[#626262]">{item.label}</dt>
                <dd className="text-sm font-medium leading-7 text-[#1A1A1A]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-[#D6D6D6] bg-[#F2F2F2]">
        <div className="container py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
            <div>
              <p className="text-sm font-bold text-[#0017C1]">LOCATION</p>
              <h2 className="mt-4 text-2xl font-bold">{isJa ? "所在地" : "Location"}</h2>
              <p className="mt-4 text-sm leading-7 text-[#626262]">{t("company.address_value")}</p>
            </div>
            <div className="h-[320px] overflow-hidden border border-[#D6D6D6] bg-white md:h-[380px]">
              <iframe
                title={isJa ? "株式会社AiGIVE 所在地" : "AiGIVE location"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.666874868684!2d138.8516!3d37.4456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5a9b0a0a0a0a1%3A0x0!2z5paw5r2f55yM6ZW35bKh5biC5aSn5omL6YCa77yS5LiB55uu77yS4oiS77yW!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
