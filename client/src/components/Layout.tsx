import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => setLanguage(language === "ja" ? "en" : "ja");
  const isJa = language === "ja";

  const navItems = [
    { href: "/services", label: t("nav.services") },
    { href: "/company", label: t("nav.company") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1A1A1A]">
      <header className="sticky top-0 z-50 w-full border-b border-[#D6D6D6] bg-white/95 backdrop-blur">
        <div className="container flex h-[72px] items-center justify-between gap-6">
          <Link href="/">
            <a className="text-lg font-bold tracking-[-0.01em] text-[#1A1A1A] hover:text-[#0017C1] md:text-xl">
              株式会社AiGIVE
            </a>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "border-b-2 border-transparent py-2 text-sm font-bold transition-colors hover:text-[#0017C1]",
                  location === item.href ? "border-[#0017C1] text-[#0017C1]" : "text-[#4B4B4B]"
                )}>
                  {item.label}
                </a>
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-[#D6D6D6] px-3 text-sm font-bold text-[#4B4B4B] hover:border-[#0017C1] hover:text-[#0017C1]"
              aria-label={isJa ? "Switch to English" : "日本語に切り替える"}
            >
              <Globe className="h-4 w-4" />
              <span>{isJa ? "EN" : "JA"}</span>
            </button>
            <Link href="/contact">
              <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0017C1] px-5 text-sm font-bold text-white hover:bg-[#00119B]">
                {isJa ? "法人取引のご相談" : "B2B inquiry"}
              </a>
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex h-11 min-w-11 items-center justify-center gap-1 rounded-md border border-[#D6D6D6] px-2 text-xs font-bold"
              aria-label={isJa ? "Switch to English" : "日本語に切り替える"}
            >
              <Globe className="h-4 w-4" />
              {isJa ? "EN" : "JA"}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#D6D6D6]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[#D6D6D6] bg-white md:hidden">
            <div className="container flex flex-col py-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={cn(
                      "border-b border-[#E8E8E8] py-4 text-base font-bold",
                      location === item.href ? "text-[#0017C1]" : "text-[#1A1A1A]"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <a
                  className="mt-4 inline-flex min-h-12 items-center justify-center rounded-md bg-[#0017C1] px-5 text-sm font-bold text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isJa ? "法人取引について相談する" : "Discuss B2B business"}
                </a>
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-[#D6D6D6] bg-[#F2F2F2] py-12">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <Link href="/">
                <a className="text-lg font-bold">株式会社AiGIVE</a>
              </Link>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#626262]">
                {isJa
                  ? "玩具・ホビーの法人向け卸売を中心に、小売・買取・マーケティング支援を行っています。"
                  : "Toy and hobby wholesaler serving business customers, supported by retail, buying and marketing operations."}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold">{t("nav.services")}</h4>
              <ul className="mt-4 space-y-3 text-sm text-[#626262]">
                <li><Link href="/services"><a className="hover:text-[#0017C1]">{t("services.b2b.title")}</a></Link></li>
                <li><Link href="/services"><a className="hover:text-[#0017C1]">{t("services.b2c.title")}</a></Link></li>
                <li><Link href="/services"><a className="hover:text-[#0017C1]">{t("services.buying.title")}</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold">{t("nav.company")}</h4>
              <ul className="mt-4 space-y-3 text-sm text-[#626262]">
                <li><Link href="/company"><a className="hover:text-[#0017C1]">{t("nav.company")}</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-[#0017C1]">{t("nav.contact")}</a></Link></li>
                <li><Link href="/privacy"><a className="hover:text-[#0017C1]">{t("footer.privacy")}</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-[#D6D6D6] pt-6 text-xs leading-6 text-[#626262] md:flex md:items-center md:justify-between">
            <div>{isJa ? "新潟県公安委員会 古物商許可 第461350000709号" : "Secondhand Dealer License No. 461350000709 / Niigata Prefectural Public Safety Commission"}</div>
            <div className="mt-2 md:mt-0">{t("footer.copyright")}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
