import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Handshake, Smartphone, CheckCircle2, User, Package } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/service_b2c_toys.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t('services.title')}</h1>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
            We provide comprehensive solutions in retail, wholesale, and marketing to deliver joy and value.
          </p>
        </div>
      </div>

      <div className="container mt-16 flex flex-col gap-24">
        {/* B2C Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-4">
              <ShoppingBag className="w-4 h-4" />
              <span>B2C Retail</span>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-slate-800">{t('services.b2c.title')}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {t('services.b2c.desc')} We carefully select and deliver high-quality Japanese toys and daily necessities to customers. Our commitment to safety and speed ensures a delightful shopping experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-slate-100 text-slate-700 hover:bg-slate-200">Amazon</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-slate-100 text-slate-700 hover:bg-slate-200">Rakuten</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-slate-100 text-slate-700 hover:bg-slate-200">Yahoo! Shopping</Badge>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="rounded-3xl overflow-hidden shadow-xl soft-shadow">
              <img src="/images/service_b2c_toys.jpg" alt="B2C Retail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* B2B Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="rounded-3xl overflow-hidden shadow-xl soft-shadow">
              <img src="/images/service_b2b_business.jpg" alt="B2B Wholesale" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-4">
              <Handshake className="w-4 h-4" />
              <span>B2B Wholesale</span>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-slate-800">{t('services.b2b.title')}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {t('services.b2b.desc')} We partner with domestic trading card shops, toy stores, and retailers to provide a stable supply of popular and hard-to-find items. Our extensive network allows us to offer competitive pricing and reliable logistics.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Trading Cards & Hobby Goods</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Educational Toys</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Daily Necessities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Buying Service Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-4">
              <Handshake className="w-4 h-4" />
              <span>Buying Service</span>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-slate-800">{t('services.buying.title')}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {t('services.buying.desc')} We offer reliable appraisal and buying services for trading cards, toys, and hobby items. Whether you prefer visiting us in person or sending items via mail, we ensure a smooth and transparent transaction process based on our antique dealer license.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm text-green-600">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">In-Person</h4>
                    <p className="text-sm text-slate-600">Bring your items directly to our shop for immediate appraisal.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm text-green-600">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Mail-In</h4>
                    <p className="text-sm text-slate-600">Send your items from anywhere in Japan. Easy and convenient.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="rounded-3xl overflow-hidden shadow-xl soft-shadow">
              <img src="/images/service_buying_appraisal.jpg" alt="Buying Service" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* SNS Marketing Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-bold mb-4">
              <Smartphone className="w-4 h-4" />
              <span>Consulting</span>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-slate-800">{t('services.sns.title')}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {t('services.sns.desc')} Leveraging our proven track record in domestic and international sales, we offer practical consulting on how to "sell" effectively using social media. We don't just talk theory; we share strategies that have worked for us.
            </p>
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-slate-800 mb-2">Our Expertise</h4>
                <p className="text-sm text-slate-600">
                  From content creation to community management, we guide you through the nuances of engaging customers on platforms like Instagram, X (Twitter), and TikTok.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="rounded-3xl overflow-hidden shadow-xl soft-shadow">
              <img src="/images/service_sns_marketing.jpg" alt="SNS Marketing" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
