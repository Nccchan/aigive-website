import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Building2, CheckCircle2, Globe2, PackageCheck, Store, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { language, t } = useLanguage();
  const isJa = language === "ja";

  const facts = [
    { label: isJa ? "法人番号" : "Corporate No.", value: "5110001038461" },
    { label: isJa ? "古物商許可" : "Secondhand Dealer License", value: "第461350000709号" },
    { label: isJa ? "適格請求書発行事業者" : "Invoice Registration", value: "T5110001038461" },
    { label: isJa ? "所在地" : "Location", value: isJa ? "新潟県長岡市" : "Nagaoka, Niigata, Japan" },
  ];

  const supportingBusinesses = [
    {
      icon: Store,
      title: t("services.b2c.title"),
      description: t("services.b2c.desc"),
    },
    {
      icon: PackageCheck,
      title: t("services.buying.title"),
      description: t("services.buying.desc"),
    },
    {
      icon: Users,
      title: t("services.sns.title"),
      description: t("services.sns.desc"),
    },
  ];

  return (
    <div className="bg-white text-[#1A1A1A]">
      <section className="border-b border-[#D6D6D6]">
        <div className="container py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold tracking-[0.08em] text-[#0017C1]">
              AIGIVE / TOY & HOBBY WHOLESALE
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.25] tracking-[-0.02em] md:text-6xl lg:text-7xl">
              {isJa ? (
                <>玩具・ホビーの卸売を、<br className="hidden sm:block" />長岡から全国・海外へ。</>
              ) : (
                <>Toy and hobby wholesale,<br className="hidden sm:block" />from Nagaoka to Japan and the world.</>
              )}
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-[#4B4B4B] md:text-lg">
              {isJa
                ? "株式会社AiGIVEは、小売店・法人向けの卸売を主力に、小売・買取・マーケティング支援まで手がける新潟県長岡市の会社です。国内だけでなく、海外への輸出にも対応しています。"
                : "AiGIVE Co., Ltd. is a Nagaoka-based company focused on wholesale for retailers and business customers, supported by retail, buying, marketing, and international export operations."}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#0017C1] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#00119B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0017C1]">
                  {isJa ? "法人取引について相談する" : "Discuss B2B business"}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
              <Link href="/services">
                <a className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#0017C1] px-6 py-3 text-sm font-bold text-[#0017C1] transition-colors hover:bg-[#EBF0FF]">
                  {t("hero.cta")}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D6D6D6] bg-[#F2F2F2]">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={`py-6 md:px-6 ${index > 0 ? "border-t border-[#D6D6D6] md:border-t-0 md:border-l" : ""}`}
            >
              <div className="text-xs font-bold text-[#626262]">{fact.label}</div>
              <div className="mt-2 text-sm font-bold leading-6">{fact.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold text-[#0017C1]">CORE BUSINESS</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              {isJa ? "主力は、法人向け卸売です。" : "Wholesale is our core business."}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#4B4B4B]">{t("services.b2b.desc")}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[t("services.b2b.list1"), t("services.b2b.list2"), isJa ? "国内・海外への販売" : "Domestic & international sales"].map((item) => (
                <div key={item} className="flex min-h-24 items-start gap-3 border-t-2 border-[#0017C1] bg-[#F2F2F2] p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0017C1]" />
                  <span className="text-sm font-bold leading-6">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact">
              <a className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0017C1] underline-offset-4 hover:underline">
                {isJa ? "卸売・法人取引のお問い合わせ" : "Wholesale and B2B inquiries"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D6D6D6] bg-[#F2F2F2]">
        <div className="container py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-[#0017C1]">OTHER BUSINESS</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">{isJa ? "流通を支える、その他の事業" : "Businesses supporting our distribution"}</h2>
          </div>
          <div className="mt-10 grid gap-px border border-[#D6D6D6] bg-[#D6D6D6] md:grid-cols-3">
            {supportingBusinesses.map(({ icon: Icon, title, description }) => (
              <article key={title} className="bg-white p-7 md:p-8">
                <Icon className="h-6 w-6 text-[#0017C1]" />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#626262]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex rounded-sm bg-[#0017C1] px-3 py-1 text-xs font-bold text-white">{t("store.badge")}</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              {isJa ? "長岡に、子どもたちが天気を気にせず遊べる場所を。" : "A place in Nagaoka where children can play in any weather."}
            </h2>
          </div>
          <div className="border-l-2 border-[#0017C1] pl-6 md:pl-8">
            <p className="text-lg leading-8">{t("store.lead")}</p>
            <p className="mt-5 text-base leading-8 text-[#4B4B4B]">{t("store.body")}</p>
            <p className="mt-6 text-sm leading-6 text-[#626262]">{t("store.note")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D6D6D6] bg-[#F2F2F2]">
        <div className="container grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex items-center gap-3 text-[#0017C1]">
              <Building2 className="h-6 w-6" />
              <Globe2 className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold md:text-3xl">{isJa ? "取引前に確認いただける会社情報を公開しています。" : "Corporate information is available for your due diligence."}</h2>
            <p className="mt-3 text-sm leading-7 text-[#626262]">{isJa ? "法人番号・古物商許可・適格請求書発行事業者番号などをご確認いただけます。" : "Corporate number, secondhand dealer license, invoice registration and other details are publicly listed."}</p>
          </div>
          <Link href="/company">
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#1A1A1A] px-6 py-3 text-sm font-bold hover:bg-white">
              {isJa ? "会社概要を見る" : "View company profile"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Link>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="bg-[#0017C1] px-6 py-12 text-white md:px-12 md:py-14">
          <p className="text-sm font-bold text-white/80">CONTACT</p>
          <div className="mt-4 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">{isJa ? "法人のお取引・卸売のご相談" : "Wholesale and business inquiries"}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">{isJa ? "取扱商品、数量、納期、海外向け取引など、まずはお問い合わせください。" : "Contact us about products, quantities, lead times, export transactions and other business requirements."}</p>
            </div>
            <Link href="/contact">
              <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#0017C1] hover:bg-[#F2F2F2]">
                {isJa ? "お問い合わせ" : "Contact us"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
