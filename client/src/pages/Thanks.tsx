import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

/*
 * /thanks — 荷物に同梱する「クエストカード」の QR の行き先（英語・1ページ）。
 * このページだけ、ドット絵のレトロゲーム風。絵はすべて自作（SVG の四角の並び）。外部の画像・他社のキャラクター・ロゴは使わない。
 * 検索に出さない（noindex）。サイトのメニューには載せない。【要確認】の印は、代表の確認が済むまで残す。
 */
const DISCORD_URL = "https://discord.gg/dKGgz2Ba9e"; // 出典: org knowledge/references/company-basics.md
const WHATSAPP_URL = "https://wa.me/817091267304"; // 出典: org 過去のチケット返信。載せるかは代表に確認中
const INSTAGRAM_HANDLE = "@pokemon_mart_jpn"; // 出典: org knowledge/references/customer-facing-basics.md
const INSTAGRAM_URL = "https://www.instagram.com/pokemon_mart_jpn";
const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/295270259354777";
const FB_MENTIONS = ["@jotaro kawase", "@US Pokémon Card Collectors' Marketplace- Buy & Sell Direct from Japan"];
const TBC = "【要確認】";

// 最初の画面の切り替え: "card" = 代表の元のカードの絵（そのまま）／ "pixel" = 自作のドット絵
const HERO: "card" | "pixel" = "card";
const CARD_IMG = "/images/thanks-quest-card.jpg";
const CARD_ALT = "NEW LOOT ACQUIRED!! Real cards from Japan, now in your hands. ありがとう！ Thank you for collecting with us.";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Yuji+Boku&text=%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%EF%BC%81&display=swap";
const FONT_DOT_HREF = "https://fonts.googleapis.com/css2?family=DotGothic16&display=swap";

const css = `
.q-dot{font-family:'DotGothic16','Hiragino Kaku Gothic ProN','Noto Sans JP',monospace}
.q-brush{font-family:'Yuji Boku','Hiragino Mincho ProN',serif}
.q-px{image-rendering:pixelated;shape-rendering:crispEdges}
.q-title{position:relative;display:inline-block;font-weight:900;font-style:italic;letter-spacing:.02em;line-height:1.02;transform:skewX(-6deg)}
.q-title::before{content:attr(data-text);position:absolute;inset:0;-webkit-text-stroke:.28em #3B1B8F;z-index:0;text-shadow:0 .08em 0 #3B1B8F}
.q-title>span{position:relative;z-index:1;background:linear-gradient(180deg,#E9FBFF 0%,#7FDFFF 35%,#8FA8FF 65%,#B07BFF 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.q-win{background:#FFFDF0;color:#1F2340;border:4px solid #1F2A6B;box-shadow:0 6px 0 #1F2A6B;clip-path:polygon(0 8px,8px 8px,8px 0,calc(100% - 8px) 0,calc(100% - 8px) 8px,100% 8px,100% calc(100% - 8px),calc(100% - 8px) calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,8px calc(100% - 8px),0 calc(100% - 8px))}
.q-btn{display:inline-flex;min-height:48px;width:100%;align-items:center;justify-content:center;gap:8px;padding:12px 20px;font-weight:700;font-size:15px;border:3px solid #1F2A6B;box-shadow:0 4px 0 #1F2A6B;text-decoration:none;transition:transform .08s}
.q-btn:active{transform:translateY(3px);box-shadow:0 1px 0 #1F2A6B}
.q-btn:focus-visible{outline:3px solid #7A3FE0;outline-offset:3px}
@media(min-width:640px){.q-btn{width:auto}}
.q-btn-main{background:#F6C23E;color:#1F2340}
.q-btn-sub{background:#fff;color:#1F2A6B}
@keyframes q-fall{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(10px) rotate(25deg)}}
@keyframes q-glow{0%,100%{opacity:.75;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
.q-conf{animation:q-fall 3.4s ease-in-out infinite}
.q-glow{animation:q-glow 2.6s ease-in-out infinite}
@media(prefers-reduced-motion:reduce){.q-conf,.q-glow{animation:none}}
`;

type Rows = string[];
function Pixels({ rows, pal, className, style }: { rows: Rows; pal: Record<string, string>; className?: string; style?: React.CSSProperties }) {
  const rects: React.ReactNode[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      let e = x;
      while (e < row.length && row[e] === c) e++;
      if (c !== "." && pal[c]) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={e - x} height={1} fill={pal[c]} />);
      x = e;
    }
  });
  const w = Math.max(...rows.map((r) => r.length));
  return (
    <svg viewBox={`0 0 ${w} ${rows.length}`} className={`q-px ${className ?? ""}`} style={style} aria-hidden="true" focusable="false">
      {rects}
    </svg>
  );
}

const CHEST: Rows = [
  "...oooooooooo...",
  "..obbbbbbbbbbo..",
  ".obddddddddddbo.",
  ".obbbbbbbbbbbbo.",
  "oyllllllllllllyo",
  "oylyylllllllyllo",
  "oyllllllllllllyo",
  "ogggggggggggggco",
  "obbbbbbkkbbbbbbo",
  "obbbbbkkkkbbbbbo",
  "ogbbbbbkkbbbbbgo",
  "obbbbbbbbbbbbbbo",
  "obddddddddddddbo",
  "oooooooooooooooo",
];
const CHEST_PAL = { o: "#3B2412", b: "#B87333", d: "#8A5223", g: "#F6C23E", c: "#C98F12", y: "#FFE58A", l: "#FFF6B8", k: "#E0A81C" };
const CLOUD: Rows = ["....wwww......", "..wwwwwwww.ww.", ".wwwwwwwwwwwww", "wwwwwwwwwwwwww", ".wwwwwwwwwwww."];
const COIN: Rows = [".oo.", "oyyo", "oyko", ".oo."];
const STAR: Rows = ["..y..", "..y..", "yyyyy", ".yyy.", ".y.y."];

function Scene() {
  const mountains: React.ReactNode[] = [];
  const hills: React.ReactNode[] = [];
  for (let x = 0; x < 160; x++) {
    const h = Math.round(18 + 9 * Math.sin(x / 13 + 1) + 5 * Math.sin(x / 4.7));
    mountains.push(<rect key={`m${x}`} x={x} y={34 - h} width={1} height={h} fill="#6F8FD8" />);
    const t = Math.round(7 + 4 * Math.sin(x / 9 + 3) + 2 * Math.sin(x / 3.1));
    hills.push(<rect key={`h${x}`} x={x} y={36 - t} width={1} height={t} fill="#3FAE4E" />);
  }
  const tufts: React.ReactNode[] = [];
  for (let x = 2; x < 160; x += 7) tufts.push(<rect key={`t${x}`} x={x + (x % 3)} y={36 + (x % 4)} width={2} height={1} fill="#7BE05B" />);
  return (
    <svg viewBox="0 0 160 44" preserveAspectRatio="xMidYMax slice" className="q-px absolute inset-x-0 bottom-0 h-[150px] w-full md:h-[200px]" aria-hidden="true" focusable="false">
      {mountains}
      {hills}
      <rect x="0" y="36" width="160" height="8" fill="#4FBF4A" />
      <rect x="0" y="40" width="160" height="4" fill="#2F9A3A" />
      {tufts}
    </svg>
  );
}

const confetti = [
  ["8%", "30%", "#FF5E8A"], ["16%", "58%", "#F6C23E"], ["27%", "22%", "#7FDFFF"], ["38%", "62%", "#B07BFF"],
  ["62%", "20%", "#F6C23E"], ["72%", "55%", "#FF5E8A"], ["84%", "28%", "#7FDFFF"], ["92%", "60%", "#B07BFF"],
  ["48%", "12%", "#FF5E8A"], ["5%", "74%", "#7FDFFF"], ["95%", "80%", "#F6C23E"],
];

function Tbc({ children }: { children: React.ReactNode }) {
  return (
    <span>
      <mark className="px-1 font-bold text-[#1A1A1A]" style={{ background: "#FFE45C", outline: "2px solid #1F2A6B" }}>{TBC}</mark> {children}
    </span>
  );
}

function Quest({ label, reward, title, children }: { label: string; reward: string; title: string; children: React.ReactNode }) {
  return (
    <article className="q-win">
      <div className="q-dot flex items-center justify-between gap-2 px-4 py-2 text-sm text-white md:px-6" style={{ background: "#4B2FB8" }}>
        <span className="text-base tracking-wider">{label}</span>
        <span className="px-2 py-1 text-[#1F2340]" style={{ background: "#F6C23E", border: "2px solid #1F2A6B" }}>REWARD: {reward}</span>
      </div>
      <div className="p-5 md:p-7">
        <h2 className="q-dot text-xl font-bold md:text-2xl">{title}</h2>
        <div className="mt-3 text-[15px] leading-7">{children}</div>
      </div>
    </article>
  );
}

export default function Thanks() {
  useEffect(() => {
    document.title = "Thank you for your order | AiGIVE";
    const links = [FONT_HREF, FONT_DOT_HREF].map((href) => {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      document.head.appendChild(l);
      return l;
    });
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const prev = meta?.content;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    meta.content = "noindex, nofollow";
    return () => {
      links.forEach((l) => l.remove());
      if (meta) meta.content = prev ?? "index, follow";
    };
  }, []);

  const faq = [
    { q: "When can I use my coupon?", a: <>On your next order, after we send it to you. <Tbc>Expiry date is not decided.</Tbc></> },
    { q: "Which orders does it work for?", a: <><Tbc>Which stores (our online store, or wholesale quotes) accept it is not decided. Minimum purchase amount is not decided.</Tbc></> },
    { q: "Can I use it with other discounts?", a: <><Tbc>Provisional: the coupon is for you only and cannot be combined with other discounts.</Tbc></> },
  ];

  return (
    <div className="min-h-screen font-sans" style={{ background: "#BFE6FF", color: "#1F2340" }}>
      <style>{css}</style>

      {HERO === "card" ? (
        <header style={{ background: "linear-gradient(180deg,#52BEFA 0%,#7FD3FF 55%,#5DBB4A 100%)" }}>
          <h1 className="sr-only">Thank you for your order</h1>
          <img src={CARD_IMG} alt={CARD_ALT} width={1051} height={1051} className="mx-auto block aspect-square w-full max-w-[560px]" />
          <div style={{ height: 14, background: "#4FBF4A", borderBottom: "6px solid #2F9A3A" }} aria-hidden="true" />
        </header>
      ) : (
      <header className="relative overflow-hidden text-center" style={{ background: "linear-gradient(180deg,#3FA9F5 0%,#8FD3FF 55%,#CDEEFF 100%)" }}>
        {confetti.map(([l, t, c], i) => (
          <span key={i} className="q-conf absolute block h-2 w-2" style={{ left: l, top: t, background: c, animationDelay: `${i * 0.27}s` }} aria-hidden="true" />
        ))}
        <Pixels rows={CLOUD} pal={{ w: "#FFFFFF" }} className="absolute left-[-14px] top-[22px] w-[110px] opacity-95" />
        <Pixels rows={CLOUD} pal={{ w: "#FFFFFF" }} className="absolute right-[-20px] top-[120px] w-[130px] opacity-90" />
        <Pixels rows={CLOUD} pal={{ w: "#E8F6FF" }} className="absolute right-[16%] top-[14px] hidden w-[90px] md:block" />
        <Scene />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 pb-32 pt-8 md:pt-12">
          <Pixels rows={STAR} pal={{ y: "#FFE45C" }} className="mb-1 h-5 w-5" />
          <h1 className="q-dot q-title text-[38px] md:text-7xl" data-text="NEW LOOT ACQUIRED!!">
            <span>NEW LOOT ACQUIRED!!</span>
          </h1>
          <p className="q-brush mt-4 text-5xl md:text-6xl" style={{ color: "#fff", textShadow: "3px 3px 0 #1F2A6B, -2px -2px 0 #1F2A6B, 2px -2px 0 #1F2A6B, -2px 2px 0 #1F2A6B" }}>
            ありがとう！
          </p>
          <div className="relative mt-3">
            <div className="q-glow absolute left-1/2 top-[-18px] h-[150px] w-[210px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(circle,#FFF6B8 0%,rgba(255,246,184,.55) 45%,rgba(255,246,184,0) 72%)" }} aria-hidden="true" />
            <Pixels rows={CHEST} pal={CHEST_PAL} className="relative w-[176px] md:w-[230px]" />
            <Pixels rows={COIN} pal={{ o: "#3B2412", y: "#FFE58A", k: "#E0A81C" }} className="q-conf absolute left-[-34px] top-[40px] w-[26px]" />
            <Pixels rows={COIN} pal={{ o: "#3B2412", y: "#FFE58A", k: "#E0A81C" }} className="q-conf absolute right-[-30px] top-[18px] w-[22px]" />
            <Pixels rows={STAR} pal={{ y: "#FFFFFF" }} className="q-conf absolute right-[-8px] top-[-22px] w-[18px]" />
          </div>
          <p className="q-dot relative mt-4 px-3 py-1 text-[15px] md:text-lg" style={{ background: "rgba(31,42,107,.88)", color: "#fff" }}>
            Real cards from Japan, now in your hands.
          </p>
        </div>
      </header>
      )}

      <main className={`mx-auto max-w-3xl px-4 pb-14 ${HERO === "card" ? "mt-6" : "-mt-10 md:-mt-14"}`}>
        <section className="q-win relative z-10 p-5 md:p-7">
          <p className="q-dot text-sm tracking-wider text-[#4B2FB8]">QUEST CARD</p>
          <p className="mt-2 text-base leading-8">
            Complete our 3 quests, step by step, and get up to <strong>¥9,000 OFF</strong> your next order. Do one, two or all three:
            each quest earns its own discount.
          </p>
          <div className="mt-4 p-4 text-[15px] leading-7" style={{ background: "#FFF0B8", border: "3px solid #1F2A6B" }}>
            <p className="q-dot font-bold">RULES — for every quest</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Show <strong>both your item and the Quest Card</strong> in the photo.</li>
              <li>Add <strong>a short comment</strong> about your order.</li>
            </ul>
          </div>
        </section>

        <div className="mt-8 space-y-7">
          <Quest label="QUEST 1" reward="¥3,000 OFF" title="Arrival report on Discord">
            <p>Post a photo and a comment in the <strong>#arrival-report</strong> channel on our Discord.</p>
            <div className="mt-4"><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-main">Join our Discord <ExternalLink className="h-4 w-4" /></a></div>
          </Quest>
          <Quest label="QUEST 2" reward="+¥3,000 OFF" title="Instagram post or Stories">
            <p>Post a photo on Instagram, as a post or in Stories, and mention <strong>{INSTAGRAM_HANDLE}</strong>.</p>
            <p className="mt-3 p-3 font-bold" style={{ background: "#FFE9E9", border: "2px solid #B3261E" }}>
              Stories disappear after 24 hours, so please be sure to mention us. If we cannot find it, we may ask you to post again.
            </p>
            <div className="mt-4"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-sub">Open our Instagram <ExternalLink className="h-4 w-4" /></a></div>
          </Quest>
          <Quest label="QUEST 3" reward="+¥3,000 OFF" title="Post in our Facebook group">
            <p>Post a photo and a comment in our Facebook group, and mention both names below. Facebook matters to us too.</p>
            <ul className="mt-3 space-y-2">
              {FB_MENTIONS.map((m) => (
                <li key={m} className="select-all break-words px-3 py-2 font-bold" style={{ background: "#EEF1FF", border: "2px solid #1F2A6B" }}>{m}</li>
              ))}
            </ul>
            <div className="mt-4"><a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-main">Open the Facebook group <ExternalLink className="h-4 w-4" /></a></div>
          </Quest>

          <article className="q-win">
            <div className="q-dot flex items-center gap-2 px-4 py-2 text-base text-white md:px-6" style={{ background: "#2F8F3F" }}>
              <Pixels rows={STAR} pal={{ y: "#FFE45C" }} className="h-5 w-5" />
              <span className="tracking-wider">CLEAR! YOUR COUPON</span>
            </div>
            <div className="p-5 text-[15px] leading-7 md:p-7">
              <p>Once we have checked your posts, we will give you a coupon you can use on your next order.</p>
              <p className="mt-3">One coupon per customer every <strong>3 months</strong>. After 3 months, you can do the quests again.</p>
              <p className="mt-3">
                We cannot receive direct messages on Discord. <strong>Please open a ticket</strong> on our Discord and we will send your
                coupon there. It can take a few days.
              </p>
              <p className="mt-3"><Tbc>How to receive the coupon if you only did the Instagram or Facebook quest is not decided.</Tbc></p>
            </div>
          </article>

          <article className="q-win p-5 md:p-7">
            <h2 className="q-dot text-xl font-bold">Not on Discord?</h2>
            <p className="mt-2 text-[15px] leading-7">Do the Instagram or Facebook quest, or message us on WhatsApp.</p>
            <div className="mt-4"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-sub">Message us on WhatsApp <ExternalLink className="h-4 w-4" /></a></div>
          </article>

          <article className="q-win p-5 md:p-7">
            <h2 className="q-dot text-xl font-bold">FAQ</h2>
            <dl className="mt-3 divide-y-2 divide-[#C9D2F5]">
              {faq.map((f) => (
                <div key={f.q} className="py-4">
                  <dt className="font-bold">{f.q}</dt>
                  <dd className="mt-1 text-[15px] leading-7">{f.a}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>

        <p className="q-dot mt-10 text-center text-lg" style={{ color: "#1F2A6B" }}>Thank you for collecting with us.</p>
      </main>

      <footer className="py-6 text-center text-xs" style={{ background: "#2F9A3A", color: "#fff", borderTop: "6px solid #4FBF4A" }}>
        AiGIVE CO., LTD. / Nagaoka, Niigata, Japan
      </footer>
    </div>
  );
}
