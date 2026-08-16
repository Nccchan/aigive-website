import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, CheckCircle2, Package, ShoppingBag, Smartphone } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const { language, t } = useLanguage();
  const isJa = language === "ja";

  return (
    <div className="bg-white text-[#1A1A1A]">
      <section className="border-b border-[#D6D6D6] bg-[#F2F2F2]">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-bold text-[#0017C1]">BUSINESS</p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] md:text-5xl">{t("services.title")}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#4B4B4B] md:text-lg">{t("services.subtitle")}</p>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">{t("services.b2b.title")}</h2>
            <p className="mt-3 text-sm font-bold text-[#626262]">B2B WHOLESALE</p>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#4B4B4B]">{t("services.b2b.desc")}</p>
            <div className="mt-8 grid gap-px border border-[#D6D6D6] bg-[#D6D6D6] sm:grid-cols-3">
              {[t("services.b2b.list1"), t("services.b2b.list2"), t("services.b2b.list3")].map((item) => (
                <div key={item} className="bg-white p-5">
                  <CheckCircle2 className="h-5 w-5 text-[#0017C1]" />
                  <p className="mt-3 text-sm font-bold leading-6">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-l-2 border-[#0017C1] pl-5 text-sm leading-7 text-[#4B4B4B]">
              {isJa
                ? "小売店・法人のお客様を対象に、数量・納期・支払条件など個別にご相談を承ります。海外向け取引についてもお問い合わせください。"
                : "We work with retailers and business customers on quantities, lead times and commercial terms. International and export transactions are also welcome."}
            </div>
            <Link href="/contact">
              <a className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#0017C1] px-6 py-3 text-sm font-bold text-white hover:bg-[#00119B]">
                {isJa ? "法人取引について相談する" : "Discuss B2B business"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D6D6D6] bg-[#F2F2F2]">
        <div className="container py-20 md:py-24">
          <div className="max-w-2xl">
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">{isJa ? "その他の事業" : "Other businesses"}</h2>
          </div>

          <div className="mt-10 divide-y divide-[#D6D6D6] border-y border-[#D6D6D6]">
            <article className="grid gap-6 py-8 md:grid-cols-[220px_1fr] md:gap-12">
              <div className="flex items-start gap-3">
                <ShoppingBag className="mt-0.5 h-5 w-5 text-[#0017C1]" />
                <div>
                  <p className="text-xs font-bold text-[#626262]">RETAIL</p>
                  <h3 className="mt-1 text-xl font-bold">{t("services.b2c.title")}</h3>
                </div>
              </div>
              <div>
                <p className="max-w-3xl text-base leading-8 text-[#4B4B4B]">{t("services.b2c.desc")}</p>
                <a
                  href="https://www.amazon.co.jp/b?node=26286483051&ie=UTF8&marketplaceID=A1VC38T7YXB528&me=A20GZZNLS2BAB2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0017C1] underline-offset-4 hover:underline"
                >
                  Amazon <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            <article className="grid gap-6 py-8 md:grid-cols-[220px_1fr] md:gap-12">
              <div className="flex items-start gap-3">
                <Package className="mt-0.5 h-5 w-5 text-[#0017C1]" />
                <div>
                  <p className="text-xs font-bold text-[#626262]">BUYING</p>
                  <h3 className="mt-1 text-xl font-bold">{t("services.buying.title")}</h3>
                </div>
              </div>
              <div>
                <p className="max-w-3xl text-base leading-8 text-[#4B4B4B]">{t("services.buying.desc")}</p>
                <p className="mt-4 text-sm leading-7 text-[#626262]">{t("services.buying.commitment")}</p>
                <a
                  href="https://x.com/niko_kaitori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0017C1] underline-offset-4 hover:underline"
                >
                  @niko_kaitori <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            <article className="grid gap-6 py-8 md:grid-cols-[220px_1fr] md:gap-12">
              <div className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-5 w-5 text-[#0017C1]" />
                <div>
                  <p className="text-xs font-bold text-[#626262]">MARKETING</p>
                  <h3 className="mt-1 text-xl font-bold">{t("services.sns.title")}</h3>
                </div>
              </div>
              <div>
                <p className="max-w-3xl text-base leading-8 text-[#4B4B4B]">{t("services.sns.desc")}</p>
                <p className="mt-4 text-sm leading-7 text-[#626262]">{t("services.sns.expertise.desc")}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="grid gap-8 border border-[#D6D6D6] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{isJa ? "卸売・法人取引について" : "Wholesale and business transactions"}</h2>
            <p className="mt-3 text-sm leading-7 text-[#626262]">{isJa ? "取扱商品や条件が決まっていない段階でも構いません。お問い合わせ内容に応じてご案内します。" : "You are welcome to contact us even before your product requirements or commercial terms are finalized."}</p>
          </div>
          <Link href="/contact">
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#0017C1] px-6 py-3 text-sm font-bold text-white hover:bg-[#00119B]">
              {t("common.contact_us")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
