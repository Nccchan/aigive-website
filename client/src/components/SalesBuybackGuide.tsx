import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, PackageCheck, Store } from "lucide-react";

const AMAZON_STORE_URL = "https://www.amazon.co.jp/sp?seller=A20GZZNLS2BAB2";
const BUYBACK_URL = "https://www.niko-kaitori.jp";

export default function SalesBuybackGuide() {
  const { language } = useLanguage();
  const isJa = language === "ja";

  const items = [
    {
      icon: Store,
      title: isJa ? "中古品の販売" : "Pre-owned items for sale",
      description: isJa
        ? "トレーディングカードなどの中古品を、Amazon のストアで販売しています。"
        : "We sell pre-owned trading cards and related items through our Amazon store (Japan).",
      label: isJa ? "Amazon ストアを見る" : "Visit our Amazon store",
      href: AMAZON_STORE_URL,
    },
    {
      icon: PackageCheck,
      title: isJa ? "買取のお申し込み" : "Sell to us (buyback)",
      description: isJa
        ? "トレーディングカードの買取は、専用の申込ページで受け付けています。"
        : "We accept buyback applications for trading cards on our dedicated application page (Japanese only).",
      label: isJa ? "買取を申し込む" : "Apply for buyback",
      href: BUYBACK_URL,
    },
  ];

  return (
    <section className="container py-16 md:py-20">
      <h2 className="text-3xl font-bold md:text-4xl">{isJa ? "販売・買取のご案内" : "Sales and Buyback"}</h2>
      <div className="mt-10 grid gap-px border border-[#D6D6D6] bg-[#D6D6D6] md:grid-cols-2">
        {items.map(({ icon: Icon, title, description, label, href }) => (
          <article key={href} className="flex flex-col bg-white p-7 md:p-8">
            <Icon className="h-6 w-6 text-[#0017C1]" />
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-[#626262]">{description}</p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#0017C1] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#00119B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0017C1]"
            >
              {label}
              <ExternalLink className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
