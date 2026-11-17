import { useEffect } from "react";
import { ExternalLink, Gift, MessageCircle, Camera, Ticket } from "lucide-react";

/*
 * /thanks — 荷物に同梱するお礼カードの QR の行き先（英語・1ページ）。
 * 検索に出さない（noindex）・サイトのメニューには載せない。
 * 下書き: 【要確認】の印は、代表の確認が済むまで残す。
 * 案の切り替え: 既定は PLAN。見本用に ?plan=A / ?plan=B でも切り替えられる。
 */
const PLAN: "A" | "B" = "A";

const DISCORD_URL = "https://discord.gg/dKGgz2Ba9e"; // 出典: org knowledge/references/company-basics.md
const WHATSAPP_URL = "https://wa.me/817091267304"; // 出典: org 過去のチケット返信（B2B の窓口）
const PRICE_LIST_URL = "https://www.niko-kaitori.jp/public/sales";
const TBC = "【要確認】";

function usePlan(): "A" | "B" {
  if (typeof window === "undefined") return PLAN;
  const q = new URLSearchParams(window.location.search).get("plan");
  return q === "A" || q === "B" ? q : PLAN;
}

function Tbc({ children }: { children: React.ReactNode }) {
  return (
    <span>
      <mark className="rounded bg-[#FFF1C2] px-1 font-bold text-[#1A1A1A]">{TBC}</mark> {children}
    </span>
  );
}

const btn =
  "mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0017C1] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#00119B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0017C1] sm:w-auto";
const btnSub =
  "mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-[#0017C1] bg-white px-6 py-3 text-sm font-bold text-[#0017C1] transition-colors hover:bg-[#EBF0FF] sm:w-auto";

function Step({ n, icon: Icon, title, children }: { n: number; icon: typeof Camera; title: string; children: React.ReactNode }) {
  return (
    <article className="bg-white p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0017C1] text-sm font-bold text-white">{n}</span>
        <Icon className="h-5 w-5 text-[#0017C1]" />
      </div>
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <div className="mt-3 text-sm leading-7 text-[#4B4B4B]">{children}</div>
    </article>
  );
}

function PlanA() {
  return (
    <>
      <Step n={1} icon={Camera} title="Tell us your order arrived">
        <p>
          Post one photo of your package in the <strong>#arrival-report</strong> channel on our Discord. It helps us know it
          reached you safely.
        </p>
        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={btn}>
          Join our Discord <ExternalLink className="h-4 w-4" />
        </a>
      </Step>
      <Step n={2} icon={Gift} title="Get ¥3,000 OFF your next order">
        <p>
          Once we have seen your post, we will give you a personal discount code for <strong>¥3,000 OFF</strong> your next order.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>One code per customer, used once, for you only.</li>
          <li>Cannot be combined with other discounts.</li>
          <li>It can take a few days for us to issue the code.</li>
        </ul>
        <p className="mt-4">
          We cannot receive direct messages on Discord. <strong>Please open a ticket</strong> in the ticket channel and we will send
          your code there.
        </p>
      </Step>
      <Step n={3} icon={MessageCircle} title="Not on Discord?">
        <p>You can still get the code. Choose either way:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Message us on WhatsApp with your order number and a photo of your package.</li>
          <li>Or see our price list below and ask us for a quote.</li>
        </ul>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btn}>
            Message us on WhatsApp <ExternalLink className="h-4 w-4" />
          </a>
          <a href={PRICE_LIST_URL} target="_blank" rel="noopener noreferrer" className={btnSub}>
            View our price list <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </Step>
    </>
  );
}

function PlanB() {
  const missions = [
    { title: "Post on Discord", body: "Share a photo of your package in #arrival-report on our Discord.", href: DISCORD_URL, label: "Join our Discord" },
    { title: "Post on Instagram", body: "Share a photo of your package on Instagram and tag us.", note: "Instagram account name" },
    { title: "Join our Facebook group", body: "Join our community group on Facebook.", note: "Facebook group link" },
  ];
  return (
    <>
      <Step n={1} icon={Gift} title="Complete up to 3 missions: ¥3,000 OFF each">
        <p>Each mission you complete earns <strong>¥3,000 OFF</strong> your next order, up to <strong>¥9,000 OFF</strong> in total.</p>
        <ul className="mt-4 space-y-3">
          {missions.map((m) => (
            <li key={m.title} className="border border-[#D6D6D6] p-4">
              <p className="font-bold text-[#1A1A1A]">{m.title} — ¥3,000 OFF</p>
              <p className="mt-1">{m.body}</p>
              {m.href ? (
                <a href={m.href} target="_blank" rel="noopener noreferrer" className={btn}>
                  {m.label} <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <p className="mt-2">
                  <Tbc>{m.note} is not decided yet.</Tbc>
                </p>
              )}
            </li>
          ))}
        </ul>
      </Step>
      <Step n={2} icon={Ticket} title="Claim your code by ticket">
        <p>
          We check your posts and send a personal code in a <strong>ticket</strong>. We cannot receive direct messages on Discord, so
          please open a ticket there.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>One code per customer, for you only. Cannot be combined with other discounts.</li>
          <li>It can take a few days for us to issue the code.</li>
          <li>
            <Tbc>Repeat use every 3 months (as on the old card) is not confirmed.</Tbc>
          </li>
        </ul>
      </Step>
      <Step n={3} icon={MessageCircle} title="Not on Discord?">
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btn}>
            Message us on WhatsApp <ExternalLink className="h-4 w-4" />
          </a>
          <a href={PRICE_LIST_URL} target="_blank" rel="noopener noreferrer" className={btnSub}>
            View our price list <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </Step>
    </>
  );
}

export default function Thanks() {
  const plan = usePlan();
  const max = plan === "A" ? "¥3,000" : "up to ¥9,000";

  useEffect(() => {
    document.title = "Thank you for your order | AiGIVE";
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const prev = meta?.content;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    meta.content = "noindex, nofollow";
    return () => {
      if (meta) meta.content = prev ?? "index, follow";
    };
  }, []);

  const faq = [
    { q: "When can I use my code?", a: <>On your next order, after we send you the code. <Tbc>Expiry date is not decided.</Tbc></> },
    { q: "Which orders does it work for?", a: <><Tbc>Which stores (our online store, or wholesale quotes) accept the code is not decided. Minimum purchase amount is not decided.</Tbc></> },
    { q: "Can I use it with other discounts?", a: <>No. The code cannot be combined with other discounts, and it is for one use per customer.</> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      <header className="border-b border-[#D6D6D6]">
        <div className="container flex h-16 items-center">
          <span className="text-lg font-bold tracking-[-0.01em]">AiGIVE</span>
        </div>
      </header>
      <main className="container max-w-3xl py-10 md:py-14">
        <p className="text-sm font-bold text-[#0017C1]">Thank you</p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">Thank you for your order</h1>
        <p className="mt-4 text-base leading-8 text-[#4B4B4B]">
          Thank you for choosing AiGIVE. Tell us your package arrived, and get <strong>{max} OFF</strong> your next order.
        </p>
        <div className="mt-8 grid gap-px border border-[#D6D6D6] bg-[#D6D6D6]">{plan === "A" ? <PlanA /> : <PlanB />}</div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <dl className="mt-5 divide-y divide-[#D6D6D6] border-y border-[#D6D6D6]">
            {faq.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-bold">{f.q}</dt>
                <dd className="mt-2 text-sm leading-7 text-[#4B4B4B]">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <footer className="border-t border-[#D6D6D6] bg-[#F2F2F2] py-8">
        <div className="container max-w-3xl text-xs leading-6 text-[#626262]">AiGIVE CO., LTD. / Nagaoka, Niigata, Japan</div>
      </footer>
    </div>
  );
}
