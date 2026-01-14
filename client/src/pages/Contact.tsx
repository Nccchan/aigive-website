import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will get back to you soon.");
  };

  return (
    <div className="pb-20">
      <div className="bg-orange-50 py-16 mb-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">{t('contact.title')}</h1>
          <p className="text-slate-600 mt-4">We'd love to hear from you. Please fill out the form below.</p>
        </div>
      </div>

      <div className="container max-w-2xl">
        <Card className="border-none shadow-xl soft-shadow">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company">{t('company.name')}</Label>
                <Input id="company" placeholder="Your Company Name" className="bg-slate-50 border-slate-200 focus:ring-indigo-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.name')} <span className="text-red-500">*</span></Label>
                <Input id="name" required placeholder="Your Name" className="bg-slate-50 border-slate-200 focus:ring-indigo-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.email')} <span className="text-red-500">*</span></Label>
                <Input id="email" type="email" required placeholder="name@example.com" className="bg-slate-50 border-slate-200 focus:ring-indigo-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Inquiry Type</Label>
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-200 focus:ring-indigo-500">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="b2b">B2B Transaction</SelectItem>
                    <SelectItem value="consulting">Consulting Request</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.message')} <span className="text-red-500">*</span></Label>
                <Textarea id="message" required placeholder="How can we help you?" className="min-h-[150px] bg-slate-50 border-slate-200 focus:ring-indigo-500" />
              </div>

              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all">
                {t('contact.submit')} <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
