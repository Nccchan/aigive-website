import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingBag, Handshake, Smartphone } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663290935878/SiCQxmjUjv3yzqnUjcLmHZ/hero_family_toys_a7749c0e.jpg" 
            alt="Happy family playing with toys" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900/30 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium text-indigo-50 drop-shadow-md">
              {t('hero.subtitle')}
            </p>
            <Link href="/services">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-1">
                {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}></div>
      </section>

      {/* Services Section */}
      <section className="container">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm bg-indigo-50 px-4 py-1 rounded-full">{t('nav.services')}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 text-slate-800">{t('services.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* B2C Card */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group h-full flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663290935878/SiCQxmjUjv3yzqnUjcLmHZ/service_b2b_business_99741851.jpg" 
                alt="B2B Services" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                <div className="bg-indigo-500 p-2 rounded-full">
                  <Handshake className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg">B2B</span>
              </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-slate-800">{t('services.b2b.title')}</h3>
              <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                {t('services.b2b.desc')}
              </p>
              <Link href="/contact">
                <Button className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white mt-auto">
                  {t('common.contact_us')}
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group h-full flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663290935878/SiCQxmjUjv3yzqnUjcLmHZ/service_b2c_toys_b4a1497b.jpg" 
                alt="B2C Services" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                <div className="bg-orange-500 p-2 rounded-full">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg">B2C</span>
              </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-slate-800">{t('services.b2c.title')}</h3>
              <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                {t('services.b2c.desc')}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Button variant="outline" size="sm" className="rounded-full text-xs border-slate-200 bg-slate-50 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200">Amazon</Button>
                <Button variant="outline" size="sm" className="rounded-full text-xs border-slate-200 bg-slate-50 hover:bg-red-50 hover:text-red-600 hover:border-red-200">Rakuten</Button>
                <Button variant="outline" size="sm" className="rounded-full text-xs border-slate-200 bg-slate-50 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200">Yahoo!</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group h-full flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663290935878/SiCQxmjUjv3yzqnUjcLmHZ/service_buying_appraisal_b2388309.jpg" 
                alt="Buying Service" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                <div className="bg-green-500 p-2 rounded-full">
                  <Handshake className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg">Buying</span>
              </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-slate-800">{t('services.buying.title')}</h3>
              <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                {t('services.buying.desc')}
              </p>
              <Link href="/services">
                <Button variant="outline" className="w-full rounded-full border-green-200 text-green-600 hover:bg-green-50 mt-auto">
                  {t('common.learn_more')}
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group h-full flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663290935878/SiCQxmjUjv3yzqnUjcLmHZ/service_sns_marketing_0357ec50.jpg" 
                alt="SNS Marketing" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                <div className="bg-pink-500 p-2 rounded-full">
                  <Smartphone className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg">Consulting</span>
              </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-slate-800">{t('services.sns.title')}</h3>
              <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                {t('services.sns.desc')}
              </p>
              <Link href="/services">
                <Button variant="outline" className="w-full rounded-full border-indigo-200 text-indigo-600 hover:bg-indigo-50 mt-auto">
                  {t('common.learn_more')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Section */}
      {/* 長岡の玩具店舗（計画中）。2026-08-16 なつき: 「遊ぶ場所が少ない長岡に、子どもたちが遊べる場所を。
          夏は暑く冬は雪深い土地柄を活かして、地域貢献の場にしたい」。
          ⚠️ まだ開設していないので、断定しない。「計画中」「準備を進めている」を必ず添える。 */}
      <section className="py-20" style={{ background: "#F2F2F2" }}>
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <span
              className="inline-block text-xs font-bold tracking-wider px-3 py-1 rounded-full"
              style={{ background: "#0017C1", color: "#FFFFFF" }}
            >
              {t('store.badge')}
            </span>
            <h2
              className="text-3xl md:text-4xl font-heading font-bold mt-4 leading-snug"
              style={{ color: "#1A1A1A" }}
            >
              {t('store.title')}
            </h2>
            <p className="text-lg leading-relaxed mt-6" style={{ color: "#1A1A1A" }}>
              {t('store.lead')}
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: "#1A1A1A" }}>
              {t('store.body')}
            </p>
            <p className="text-sm mt-6" style={{ color: "#626262" }}>
              {t('store.note')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 translate-y-1/3"></div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-slate-800 leading-snug">
                {t('feature.title')}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t('feature.desc')}
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl min-w-[100px]">
                  <span className="text-3xl font-bold text-indigo-600">3+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide mt-1">Services</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl min-w-[100px]">
                  <span className="text-3xl font-bold text-orange-500">100%</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide mt-1">Safety</span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663290935878/SiCQxmjUjv3yzqnUjcLmHZ/hero_family_toys_a7749c0e.jpg" alt="Quality Toys" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
