import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, User, Calendar, Wallet, Briefcase, ShieldCheck } from "lucide-react";

export default function Company() {
  const { t } = useLanguage();

  const companyData = [
    { icon: Building2, label: 'company.name', value: t('company.name_value') },
    { icon: User, label: 'company.rep', value: t('company.rep_value') },
    { icon: MapPin, label: 'company.address', value: t('company.address_value') },
    { icon: Calendar, label: 'company.est', value: t('company.est_value') },
    { icon: Wallet, label: 'company.capital', value: t('company.capital_value') },
    { icon: Briefcase, label: 'company.business', value: t('company.business_value') },
    { icon: ShieldCheck, label: 'company.license', value: t('company.license_value') },
  ];

  return (
    <div className="pb-20">
      <div className="bg-slate-100 py-16 mb-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">{t('company.title')}</h1>
        </div>
      </div>

      <div className="container max-w-4xl">
        <Card className="border-none shadow-xl soft-shadow overflow-hidden">
          <CardHeader className="bg-indigo-600 text-white p-8">
            <CardTitle className="text-2xl font-heading text-center">{t('company.profile_title')}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {companyData.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row p-6 hover:bg-slate-50 transition-colors">
                  <div className="md:w-1/3 flex items-center gap-3 mb-2 md:mb-0 text-slate-500 font-medium">
                    <item.icon className="w-5 h-5 text-indigo-500" />
                    <span>{t(item.label)}</span>
                  </div>
                  <div className="md:w-2/3 text-slate-800 font-medium">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-16">
          <div className="rounded-2xl overflow-hidden h-[400px] shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.666874868684!2d138.8516!3d37.4456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5a9b0a0a0a0a1%3A0x0!2z5paw5r2f55yM6ZW35bKh5biC5aSn5omL6YCa77yS5LiB55uu77yS4oiS77yW!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
