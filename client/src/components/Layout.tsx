import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  const navItems = [
    { href: "/", label: t('nav.home') },
    { href: "/services", label: t('nav.services') },
    { href: "/company", label: t('nav.company') },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-heading font-bold text-2xl text-indigo-700 hover:opacity-80 transition-opacity">
              <span className="bg-indigo-600 text-white w-8 h-8 flex items-center justify-center rounded-lg">A</span>
              AiGIVE
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  location === item.href ? "text-indigo-600 font-bold" : "text-slate-600"
                )}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="ml-4 rounded-full w-10 h-10 p-0 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Switch Language</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="rounded-full w-10 h-10 p-0 text-slate-600"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a 
                    className={cn(
                      "block py-2 text-base font-medium transition-colors hover:text-indigo-600",
                      location === item.href ? "text-indigo-600 font-bold" : "text-slate-600"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/">
                <a className="font-heading font-bold text-xl text-indigo-700 mb-4 block">AiGIVE</a>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                {t('hero.title')}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-4">{t('nav.services')}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="/services"><a className="hover:text-indigo-600">{t('services.b2c.title')}</a></Link></li>
                <li><Link href="/services"><a className="hover:text-indigo-600">{t('services.b2b.title')}</a></Link></li>
                <li><Link href="/services"><a className="hover:text-indigo-600">{t('services.sns.title')}</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-4">{t('nav.company')}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="/company"><a className="hover:text-indigo-600">{t('nav.company')}</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-indigo-600">{t('nav.contact')}</a></Link></li>
                <li><Link href="/privacy"><a className="hover:text-indigo-600">{t('footer.privacy')}</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
            <div className="mb-2 flex flex-col md:flex-row justify-center gap-2 md:gap-4">
              <span>{t('company.license_auth_value')} {t('company.license_value')}</span>
            </div>
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
}
