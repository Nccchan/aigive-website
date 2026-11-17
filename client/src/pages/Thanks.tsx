import { useEffect } from "react";
import { ExternalLink, MessageCircle, Camera, Ticket, Instagram, Users } from "lucide-react";

/*
 * /thanks — 荷物に同梱するお礼カードの QR の行き先（英語・1ページ）。
 * 検索に出さない（noindex）・サイトのメニューには載せない。
 * 下書き: 【要確認】の印は、代表の確認が済むまで残す。
 */
const DISCORD_URL = "https://discord.gg/dKGgz2Ba9e"; // 出典: org knowledge/references/company-basics.md
const WHATSAPP_URL = "https://wa.me/817091267304"; // 出典: org 過去のチケット返信。載せるかは代表に確認中
const INSTAGRAM_HANDLE = "@pokemon_mart_jpn"; // 出典: org knowledge/references/customer-facing-basics.md
const INSTAGRAM_URL = "https://www.instagram.com/pokemon_mart_jpn";
const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/295270259354777";
const FB_MENTIONS = ["@jotaro kawase", "@US Pokémon Card Collectors' Marketplace- Buy & Sell Direct from Japan"];
const TBC = "【要確認】";

function Tbc({ children }: { children: React.ReactNode }) {
  return (
    <span>
      <mark className="rounded bg-[#FFF1C2] px-1 font-bold text-[#1A1A1A]">{TBC}</mark> {children}
    </span>
  );
}

const btn =
  "mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0017C1] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#00119B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0017C1] sm:w-auto";
const btnSub =
  "mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-[#0017C1] bg-white px-6 py-3 text-sm font-bold text-[#0017C1] transition-colors hover:bg-[#EBF0FF] sm:w-auto";

function Quest({ n, icon: Icon, title, reward, children }: { n: number; icon: typeof Camera; title: string; reward: string; children: React.ReactNode }) {
  return (
    <article className="bg-white p-6 md:p-8">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0017C1] text-sm font-bold text-white">{n}</span>
          <Icon className="h-5 w-5 text-[#0017C1]" />
        </div>
        <span className="rounded-md bg-[#EBF0FF] px-3 py-1 text-sm font-bold text-[#0017C1]">{reward}</span>
      </div>
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <div className="mt-3 text-sm leading-7 text-[#4B4B4B]">{children}</div>
    </article>
  );
}

export default function Thanks() {
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
    { q: "When can I use my coupon?", a: <>On your next order, after we send it to you. <Tbc>Expiry date is not decided.</Tbc></> },
    { q: "Which orders does it work for?", a: <><Tbc>Which stores (our online store, or wholesale quotes) accept it is not decided. Minimum purchase amount is not decided.</Tbc></> },
    { q: "Can I use it with other discounts?", a: <><Tbc>Provisional: the coupon is for you only and cannot be combined with other discounts.</Tbc></> },
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
          Complete our 3 quests, step by step, and get up to <strong>¥9,000 OFF</strong> your next order. Do one, two or all three:
          each quest earns its own discount.
        </p>

        <div className="mt-6 border-l-4 border-[#0017C1] bg-[#EBF0FF] p-5 text-sm leading-7">
          <p className="font-bold">For every quest:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Show <strong>both your item and the Quest Card</strong> in the photo.</li>
            <li>Add <strong>a short comment</strong> about your order.</li>
          </ul>
        </div>

        <div className="mt-8 grid gap-px border border-[#D6D6D6] bg-[#D6D6D6]">
          <Quest n={1} icon={Camera} title="Arrival report on Discord" reward="¥3,000 OFF">
            <p>Post a photo and a comment in the <strong>#arrival-report</strong> channel on our Discord.</p>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={btn}>
              Join our Discord <ExternalLink className="h-4 w-4" />
            </a>
          </Quest>
          <Quest n={2} icon={Instagram} title="Instagram post or Stories" reward="+¥3,000 OFF">
            <p>
              Post a photo on Instagram, as a post or in Stories, and mention <strong>{INSTAGRAM_HANDLE}</strong>.
            </p>
            <p className="mt-3 font-bold text-[#1A1A1A]">
              Stories disappear after 24 hours, so please be sure to mention us. If we cannot find it, we may ask you to post again.
            </p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={btnSub}>
              Open our Instagram <ExternalLink className="h-4 w-4" />
            </a>
          </Quest>
          <Quest n={3} icon={Users} title="Post in our Facebook group" reward="+¥3,000 OFF">
            <p>Post a photo and a comment in our Facebook group, and mention both names below. Facebook matters to us too.</p>
            <ul className="mt-3 space-y-2">
              {FB_MENTIONS.map((m) => (
                <li key={m} className="select-all break-words rounded border border-[#D6D6D6] bg-[#F2F2F2] px-3 py-2 font-bold text-[#1A1A1A]">{m}</li>
              ))}
            </ul>
            <a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className={btn}>
              Open the Facebook group <ExternalLink className="h-4 w-4" />
            </a>
          </Quest>
          <article className="bg-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Ticket className="h-5 w-5 text-[#0017C1]" />
              <h2 className="text-xl font-bold">Your reward: a coupon</h2>
            </div>
            <div className="mt-3 text-sm leading-7 text-[#4B4B4B]">
              <p>Once we have checked your posts, we will give you a coupon you can use on your next order.</p>
              <p className="mt-3">
                One coupon per customer every <strong>3 months</strong>. After 3 months, you can do the quests again.
              </p>
              <p className="mt-3">
                We cannot receive direct messages on Discord. <strong>Please open a ticket</strong> on our Discord and we will send your
                coupon there. It can take a few days.
              </p>
              <p className="mt-3">
                <Tbc>How to receive the coupon if you only did the Instagram or Facebook quest is not decided.</Tbc>
              </p>
            </div>
          </article>
          <article className="bg-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-[#0017C1]" />
              <h2 className="text-xl font-bold">Not on Discord?</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-[#4B4B4B]">Do the Instagram or Facebook quest, or message us on WhatsApp.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btnSub}>
              Message us on WhatsApp <ExternalLink className="h-4 w-4" />
            </a>
          </article>
        </div>

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
