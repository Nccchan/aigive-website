import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const { language, t } = useLanguage();
  const isJa = language === "ja";
  const [state, handleSubmit] = useForm("xwvvpnej");

  if (state.succeeded) {
    return (
      <div className="bg-white">
        <section className="border-b border-[#D6D6D6] bg-[#F2F2F2]">
          <div className="container py-16 md:py-20">
            <p className="text-sm font-bold text-[#0017C1]">CONTACT</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">{t("contact.title")}</h1>
          </div>
        </section>
        <section className="container py-20 md:py-24">
          <div className="mx-auto max-w-2xl border border-[#D6D6D6] p-8 text-center md:p-12">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[#0017C1]" />
            <h2 className="mt-6 text-2xl font-bold">{t("contact.thanks.title")}</h2>
            <p className="mt-4 text-base leading-8 text-[#626262]">{t("contact.thanks.body")}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md border border-[#0017C1] px-6 py-3 text-sm font-bold text-[#0017C1] hover:bg-[#EBF0FF]"
            >
              {t("contact.back")}
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#1A1A1A]">
      <section className="border-b border-[#D6D6D6] bg-[#F2F2F2]">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-bold text-[#0017C1]">CONTACT</p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] md:text-5xl">{t("contact.title")}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#4B4B4B]">
            {isJa
              ? "卸売・法人取引をはじめ、各事業についてのご相談を承ります。取扱商品や数量が決まっていない段階でも、お気軽にお問い合わせください。"
              : "Contact us about wholesale, business transactions, or any of our services. You are welcome to get in touch even before your product requirements are finalized."}
          </p>
          <a href="mailto:info@aigive.jp" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0017C1] hover:underline">
            <Mail className="h-4 w-4" />
            info@aigive.jp
          </a>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <aside>
            <h2 className="text-xl font-bold">{isJa ? "法人のお客様へ" : "For business customers"}</h2>
            <p className="mt-4 text-sm leading-7 text-[#626262]">
              {isJa
                ? "お問い合わせ種別で「B2B取引について」を選択してください。商品名、希望数量、希望納期、販売地域などが分かる範囲でご記入いただくと、よりスムーズにご案内できます。"
                : "Choose “B2B Transaction” as the inquiry type. If available, include product names, quantities, required delivery timing and target market so we can respond more efficiently."}
            </p>
            <div className="mt-8 border-t border-[#D6D6D6] pt-6 text-sm leading-7 text-[#626262]">
              <div className="font-bold text-[#1A1A1A]">株式会社AiGIVE</div>
              <div className="mt-2">〒940-0062<br />新潟県長岡市大手通2-2-6</div>
            </div>
          </aside>

          <div className="border border-[#D6D6D6] p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="font-bold">{t("contact.company")}</Label>
                <Input id="company" name="company" placeholder={t("contact.ph.company")} className="min-h-12 rounded-md border-[#D6D6D6] bg-white" />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="font-bold">{t("contact.name")} <span className="text-[#EC0000]">*</span></Label>
                <Input id="name" name="name" required placeholder={t("contact.ph.name")} className="min-h-12 rounded-md border-[#D6D6D6] bg-white" />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold">{t("contact.email")} <span className="text-[#EC0000]">*</span></Label>
                <Input id="email" type="email" name="email" required placeholder="name@example.com" className="min-h-12 rounded-md border-[#D6D6D6] bg-white" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type" className="font-bold">{t("contact.type")}</Label>
                <Select name="type" defaultValue="b2b">
                  <SelectTrigger className="min-h-12 rounded-md border-[#D6D6D6] bg-white">
                    <SelectValue placeholder={t("contact.ph.type")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="b2b">{t("contact.type.b2b")}</SelectItem>
                    <SelectItem value="buying">{t("contact.type.buying")}</SelectItem>
                    <SelectItem value="consulting">{t("contact.type.consulting")}</SelectItem>
                    <SelectItem value="other">{t("contact.type.other")}</SelectItem>
                  </SelectContent>
                </Select>
                <ValidationError prefix="Type" field="type" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-bold">{t("contact.message")} <span className="text-[#EC0000]">*</span></Label>
                <Textarea id="message" name="message" required placeholder={t("contact.ph.message")} className="min-h-[180px] rounded-md border-[#D6D6D6] bg-white" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0017C1] px-6 py-3 text-sm font-bold text-white hover:bg-[#00119B] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? t("contact.sending") : t("contact.submit")}
                {!state.submitting && <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
