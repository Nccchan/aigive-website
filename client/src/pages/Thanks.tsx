import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

/*
 * /thanks — 荷物に同梱する「クエストカード」の QR の行き先（英語・1ページ）。
 * このページだけ、ドット絵のレトロゲーム風。絵はすべて自作（SVG の四角の並び）。外部の画像・他社のキャラクター・ロゴは使わない。
 * 検索に出さない（noindex）。サイトのメニューには載せない。
 */
const DISCORD_URL = "https://discord.gg/dKGgz2Ba9e"; // 出典: org knowledge/references/company-basics.md
const WHATSAPP_URL = "https://wa.me/817091267304"; // 出典: org 過去のチケット返信。載せるかは代表に確認中
const INSTAGRAM_HANDLE = "@pokemon_mart_jpn"; // 出典: org knowledge/references/customer-facing-basics.md
const INSTAGRAM_URL = "https://www.instagram.com/pokemon_mart_jpn";
const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/295270259354777";
const FB_MENTIONS = ["@jotaro kawase", "@US Pokémon Card Collectors' Marketplace- Buy & Sell Direct from Japan"];

// 見出し用のドット書体と筆文字は、使う文字だけの小さな版を読み込む（表示は swap。読めない時は下の代わりの書体）
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=DotGothic16&family=Yuji+Boku&text=%20%21%22%23%24%25%26%27%28%29%2A%2B%2C-./0123456789%3A%3B%3C%3D%3E%3F%40ABCDEFGHIJKLMNOPQRSTUVWXYZ%5B%5C%5D%5E_%60abcdefghijklmnopqrstuvwxyz%7B%7C%7D~%C2%A5%E2%80%94%E2%80%99%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%EF%BC%81&display=swap";
const DISCORD_CHANNEL_URL = "https://discord.com/channels/1409413330681987193/1454524156761604167"; // サーバーID: org output/reports/ticket-reply-2026-09-12-0900.md（顧客サーバー）。チャンネルID: 同 ticket-0541
const PRICE_LIST_URL = "https://www.niko-kaitori.jp/public/sales";

const css = `
.q-dot{font-family:'DotGothic16','Hiragino Kaku Gothic ProN','Noto Sans JP',monospace}
.q-brush{font-family:'Yuji Boku','Hiragino Mincho ProN',serif}
.q-px{image-rendering:pixelated;shape-rendering:crispEdges}
.q-title{position:relative;display:inline-block;font-weight:900;font-style:italic;letter-spacing:.02em;line-height:1.02;transform:skewX(-6deg)}
.q-title::before{content:attr(data-text);position:absolute;inset:0;-webkit-text-stroke:.22em #3B1B8F;z-index:0;text-shadow:0 .08em 0 #3B1B8F}
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

function UrlLine({ url }: { url: string }) {
  return <p className="mt-2 select-all break-all text-xs leading-5 text-[#3A4272]">{url}</p>;
}

function Quest({ label, reward, title, children }: { label: string; reward: string; title: string; children: React.ReactNode }) {
  return (
    <article className="q-win">
      <div className="q-dot flex items-center justify-between gap-2 px-4 py-2 text-[15px] text-white md:px-6" style={{ background: "#4B2FB8" }}>
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
    const links = [FONT_HREF].map((href) => {
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
    { q: "How long is the coupon valid?", a: <>3 months from the day we send it.</> },
    { q: "Where can I use it?", a: <>On wholesale orders placed with us directly (by quote on WhatsApp or a Discord ticket). We take it off your quote total. It cannot be used at our online store checkout.</> },
    { q: "Is there a minimum purchase?", a: <>No.</> },
    { q: "Can I combine it with other discounts?", a: <>No. One coupon per order, for you only.</> },
  ];

  return (
    <div className="min-h-screen font-sans" style={{ background: "#BFE6FF", color: "#1F2340" }}>
      <style>{css}</style>

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

      <main className="mx-auto -mt-10 max-w-3xl px-4 pb-14 md:-mt-14">
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
            <UrlLine url={DISCORD_URL} />
            <p className="mt-4 font-bold">Already a member?</p>
            <div className="mt-2"><a href={DISCORD_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-sub">Go to #arrival-report <ExternalLink className="h-4 w-4" /></a></div>
            <UrlLine url={DISCORD_CHANNEL_URL} />
          </Quest>
          <Quest label="QUEST 2" reward="+¥3,000 OFF" title="Instagram post or Stories">
            <p>Post a photo on Instagram, as a post or in Stories, and mention <strong>{INSTAGRAM_HANDLE}</strong>.</p>
            <p className="mt-3 p-3 font-bold" style={{ background: "#FFE9E9", border: "2px solid #B3261E" }}>
              Stories disappear after 24 hours, so please be sure to mention us. If we cannot find it, we may ask you to post again.
            </p>
            <div className="mt-4"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-main">Open our Instagram <ExternalLink className="h-4 w-4" /></a></div>
            <UrlLine url={INSTAGRAM_URL} />
          </Quest>
          <Quest label="QUEST 3" reward="+¥3,000 OFF" title="Post in our Facebook group">
            <p>Post a photo and a comment in our Facebook group, and mention both names below. Facebook matters to us too.</p>
            <ul className="mt-3 space-y-2">
              {FB_MENTIONS.map((m) => (
                <li key={m} className="select-all break-words px-3 py-2 font-bold" style={{ background: "#EEF1FF", border: "2px solid #1F2A6B" }}>{m}</li>
              ))}
            </ul>
            <div className="mt-4"><a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-main">Open the Facebook group <ExternalLink className="h-4 w-4" /></a></div>
            <UrlLine url={FACEBOOK_GROUP_URL} />
          </Quest>

          <article className="q-win">
            <div className="q-dot flex items-center gap-2 px-4 py-2 text-base text-white md:px-6" style={{ background: "#2F8F3F" }}>
              <Pixels rows={STAR} pal={{ y: "#FFE45C" }} className="h-5 w-5" />
              <span className="tracking-wider">CLEAR! YOUR COUPON</span>
            </div>
            <div className="p-5 text-[15px] leading-7 md:p-7">
              <p>Once we have checked your posts, we will give you a coupon for your next order.</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>One coupon per customer every <strong>3 months</strong>. After 3 months, you can do the quests again.</li>
                <li>Your coupon is valid for 3 months from the day we send it.</li>
                <li>The coupon applies to wholesale orders placed with us directly (by quote on WhatsApp or a Discord ticket). It cannot be used in our online store checkout.</li>
                <li>No minimum purchase. Cannot be combined with other discounts. One coupon per order.</li>
              </ul>
              <p className="mt-4 font-bold">How you get it</p>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>Discord: please <strong>open a ticket</strong> on our Discord (we cannot receive direct messages there). It can take a few days.</li>
                <li>If you only did the Instagram or Facebook quest, we will send your coupon by DM on that platform.</li>
              </ul>
            </div>
          </article>

          <article className="q-win">
            <div className="q-dot px-4 py-2 text-base text-white md:px-6" style={{ background: "#1F6FB5" }}>
              <span className="tracking-wider">STAY IN TOUCH</span>
            </div>
            <div className="p-5 text-[15px] leading-7 md:p-7">
              <p>Daily picks and restock news are shared on WhatsApp. Message us there to get started.</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
                <div className="sm:flex-1"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-main mt-4">Message us on WhatsApp <ExternalLink className="h-4 w-4" /></a></div>
                <div className="sm:flex-1"><a href={PRICE_LIST_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-sub mt-4">See today's price list <ExternalLink className="h-4 w-4" /></a></div>
              </div>
              <UrlLine url={PRICE_LIST_URL} />
            </div>
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
