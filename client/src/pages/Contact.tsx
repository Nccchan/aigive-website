import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const { t } = useLanguage();
  // Replace 'YOUR_FORM_ID' with your actual Formspree Form ID
  const [state, handleSubmit] = useForm("xwvvpnej");

  if (state.succeeded) {
    return (
      <div className="pb-20">
        <div className="bg-orange-50 py-16 mb-12">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">{t('contact.title')}</h1>
          </div>
        </div>
        <div className="container max-w-2xl">
          <Card className="border-none shadow-xl soft-shadow">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Thank You!</h2>
              <p className="text-slate-600 text-lg mb-8">
                お問い合わせありがとうございます。<br />
                内容を確認次第、担当者よりご連絡させていただきます。
              </p>
              <Button 
                onClick={() => window.location.reload()} 
                variant="outline"
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              >
                フォームに戻る
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="bg-orange-50 py-16 mb-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">{t('contact.title')}</h1>
          <p className="text-slate-600 mt-4">{t('contact.subtitle')}</p>
        </div>
      </div>

      <div className="container max-w-2xl">
        <Card className="border-none shadow-xl soft-shadow">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company">{t('company.name')}</Label>
                <Input 
                  id="company" 
                  name="company"
                  placeholder="Your Company Name" 
                  className="bg-slate-50 border-slate-200 focus:ring-indigo-500" 
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.name')} <span className="text-red-500">*</span></Label>
                <Input 
                  id="name" 
                  name="name"
                  required 
                  placeholder="Your Name" 
                  className="bg-slate-50 border-slate-200 focus:ring-indigo-500" 
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.email')} <span className="text-red-500">*</span></Label>
                <Input 
                  id="email" 
                  type="email" 
                  name="email"
                  required 
                  placeholder="name@example.com" 
                  className="bg-slate-50 border-slate-200 focus:ring-indigo-500" 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">{t('contact.type')}</Label>
                <Select name="type">
                  <SelectTrigger className="bg-slate-50 border-slate-200 focus:ring-indigo-500">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="b2b">{t('contact.type.b2b')}</SelectItem>
                    <SelectItem value="consulting">{t('contact.type.consulting')}</SelectItem>
                    <SelectItem value="buying">{t('contact.type.buying')}</SelectItem>
                    <SelectItem value="other">{t('contact.type.other')}</SelectItem>
                  </SelectContent>
                </Select>
                <ValidationError prefix="Type" field="type" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.message')} <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="message" 
                  name="message"
                  required 
                  placeholder="How can we help you?" 
                  className="min-h-[150px] bg-slate-50 border-slate-200 focus:ring-indigo-500" 
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all"
              >
                {state.submitting ? 'Sending...' : t('contact.submit')} 
                {!state.submitting && <Send className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
