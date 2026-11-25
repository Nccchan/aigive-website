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
  "https://fonts.googleapis.com/css2?family=DotGothic16&text=%20%21%22%23%24%25%26%27%28%29%2A%2B%2C-./0123456789%3A%3B%3C%3D%3E%3F%40ABCDEFGHIJKLMNOPQRSTUVWXYZ%5B%5C%5D%5E_%60abcdefghijklmnopqrstuvwxyz%7B%7C%7D~%C2%A5%E2%80%94%E2%80%99%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%EF%BC%81&display=swap";
const FONT_HREF2 = "https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap";
const DISCORD_CHANNEL_URL = "https://discord.com/channels/1409413330681987193/1454524156761604167"; // サーバーID: org output/reports/ticket-reply-2026-09-12-0900.md（顧客サーバー）。チャンネルID: 同 ticket-0541
const PRICE_LIST_URL = "https://app.aigive.jp/public/sales";

const css = `
.q-dot{font-family:'Noto Sans JP','Hiragino Kaku Gothic ProN',sans-serif;font-weight:700}
.q-head{font-family:'Inter','Noto Sans JP','Hiragino Kaku Gothic ProN',sans-serif;font-weight:900}
.q-body{font-size:18px;line-height:1.7}
.q-fuda{background:#fff;border:5px solid #1F2A6B;box-shadow:0 6px 0 #1F2A6B;padding:10px;border-radius:14px}
.q-brush{font-family:'Yuji Boku','Hiragino Mincho ProN',serif}
.q-px{image-rendering:pixelated;shape-rendering:crispEdges}
.q-title{position:relative;display:inline-block;font-weight:900;font-style:italic;letter-spacing:.02em;line-height:1.02;transform:skewX(-6deg)}
.q-title::before{content:attr(data-text);position:absolute;inset:0;-webkit-text-stroke:.22em #3B1B8F;z-index:0;text-shadow:0 .08em 0 #3B1B8F}
.q-title>span{position:relative;z-index:1;background:linear-gradient(180deg,#E9FBFF 0%,#7FDFFF 35%,#8FA8FF 65%,#B07BFF 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.q-win{background:#FFFDF0;color:#1F2340;border:4px solid #1F2A6B;box-shadow:0 6px 0 #1F2A6B;clip-path:polygon(0 8px,8px 8px,8px 0,calc(100% - 8px) 0,calc(100% - 8px) 8px,100% 8px,100% calc(100% - 8px),calc(100% - 8px) calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,8px calc(100% - 8px),0 calc(100% - 8px))}
.q-btn{display:inline-flex;min-height:56px;width:100%;align-items:center;justify-content:center;gap:8px;padding:12px 20px;font-weight:700;font-size:18px;border:3px solid #1F2A6B;box-shadow:0 4px 0 #1F2A6B;text-decoration:none;transition:transform .08s}
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

function Desk({ withCard }: { withCard: boolean }) {
  return (
    <svg viewBox="0 0 40 30" className="q-px block w-full" role="img" aria-label={withCard ? "Drawing: a plain card box and a Quest Card together on a desk" : "Drawing: a plain card box on a desk, no Quest Card"}>
      <rect width="40" height="30" fill="#CFEAFF" />
      <rect y="0" width="40" height="3" fill="#BCDFFB" />
      <rect y="17" width="40" height="13" fill="#B98B5A" />
      <rect y="17" width="40" height="1" fill="#8A6238" />
      <rect y="24" width="40" height="1" fill="#A97B4B" />
      {/* box: plain, no artwork */}
      <rect x="5" y="7" width="19" height="16" fill="#1F2A6B" />
      <rect x="6" y="8" width="17" height="14" fill="#3E7BD8" />
      <rect x="6" y="8" width="17" height="4" fill="#6FA2F0" />
      <rect x="6" y="12" width="17" height="1" fill="#1F2A6B" />
      <rect x="9" y="15" width="11" height="4" fill="#FFFFFF" />
      <rect x="10" y="16" width="9" height="1" fill="#C9D2F5" />
      <rect x="10" y="18" width="6" height="1" fill="#C9D2F5" />
      <rect x="5" y="23" width="19" height="1" fill="#7A5430" />
      {withCard && (
        <g>
          <rect x="27" y="11" width="11" height="15" fill="#1F2A6B" />
          <rect x="28" y="12" width="9" height="13" fill="#FFFDF0" />
          <rect x="28" y="12" width="9" height="3" fill="#4B2FB8" />
          <rect x="31" y="19" width="3" height="3" fill="#F6C23E" />
          <rect x="32" y="18" width="1" height="1" fill="#F6C23E" />
          <text x="32.5" y="14.4" textAnchor="middle" fontSize="1.9" fill="#FFFFFF" fontFamily="DotGothic16, monospace">QUEST</text>
          <text x="32.5" y="17.7" textAnchor="middle" fontSize="1.9" fill="#1F2A6B" fontFamily="DotGothic16, monospace">CARD</text>
        </g>
      )}
    </svg>
  );
}

function Example() {
  const comments = [
    "My order arrived safely in 5 days. Everything was sealed and in perfect condition. Thank you!",
    "Fast shipping to the US, great packing. Will order again!",
  ];
  return (
    <article className="q-win mt-8">
      <div className="q-dot px-4 py-2 text-[18px] text-white md:px-6" style={{ background: "#4B2FB8" }}>
        <span className="text-lg tracking-wider">EXAMPLE POST</span>
      </div>
      <div className="p-5 md:p-7">
        <h2 className="q-dot text-2xl font-bold">What a good post looks like</h2>
        <div className="mt-4 grid max-w-[520px] grid-cols-2 gap-3 md:gap-5">
          <figure>
            <div style={{ border: "3px solid #2F8F3F" }}><Desk withCard /></div>
            <figcaption className="mt-2 text-[17px] leading-[1.7]">
              <span className="mr-1 inline-block px-2 font-bold text-white" style={{ background: "#2F8F3F" }}>✓ OK</span>
              Item + Quest Card in the same photo
            </figcaption>
          </figure>
          <figure>
            <div style={{ border: "3px solid #B3261E" }}><Desk withCard={false} /></div>
            <figcaption className="mt-2 text-[17px] leading-[1.7]">
              <span className="mr-1 inline-block px-2 font-bold text-white" style={{ background: "#B3261E" }}>✗ NOT OK</span>
              Quest Card is missing
            </figcaption>
          </figure>
        </div>
        <p className="mt-5 text-[18px] leading-[1.7]">A short, honest comment is perfect. One or two sentences is enough.</p>
        <div className="mt-3 space-y-3">
          {comments.map((c) => (
            <div key={c} className="p-3 text-[18px] leading-[1.7]" style={{ background: "#EEF1FF", border: "3px solid #1F2A6B", borderRadius: 4 }}>
              <p className="q-dot text-sm tracking-wider text-[#4B2FB8]">EXAMPLE COMMENT</p>
              <p className="mt-1">“{c}”</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[17px] leading-[1.7]">On Instagram and Facebook, don't forget to mention us (see each quest below).</p>
      </div>
    </article>
  );
}

function Btn({ href, kind, children }: { href: string; kind: "main" | "sub"; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`q-btn ${kind === "main" ? "q-btn-main" : "q-btn-sub"} mt-2`}>
      {children} <ExternalLink className="h-5 w-5" />
    </a>
  );
}

function Quest({ label, reward, title, steps }: { label: string; reward: string; title: string; steps: React.ReactNode[] }) {
  return (
    <article className="q-win">
      <div className="q-head px-4 py-4 text-center text-[32px] leading-tight md:px-6 md:text-5xl" style={{ background: "#F6C23E", color: "#1F2340", borderBottom: "4px solid #1F2A6B" }}>
        GET {reward}
      </div>
      <div className="q-dot px-4 py-2 text-lg tracking-wider text-white md:px-6" style={{ background: "#4B2FB8" }}>{label}</div>
      <div className="p-5 md:p-7">
        <h2 className="q-dot text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="q-head mt-4 text-lg tracking-wider text-[#4B2FB8]">WHAT TO DO</p>
        <ol className="mt-2 space-y-4">
          {steps.map((st, i) => (
            <li key={i} className="flex gap-3 text-[18px] leading-[1.7]">
              <span className="q-head flex h-9 w-9 flex-none items-center justify-center rounded-full text-lg text-white" style={{ background: "#1F2A6B" }}>{i + 1}</span>
              <div className="min-w-0 flex-1 pt-0.5">{st}</div>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

export default function Thanks() {
  useEffect(() => {
    document.title = "Thank you for your order | AiGIVE";
    const links = [FONT_HREF, FONT_HREF2].map((href) => {
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
          <h1 className="q-head q-title text-[40px] md:text-7xl" data-text="NEW LOOT ACQUIRED!!">
            <span>NEW LOOT ACQUIRED!!</span>
          </h1>
          <div className="q-fuda mt-5 w-[88%] max-w-[420px]">
            <img src="/images/arigatou_shodo.jpg" alt="ありがとう" className="block h-auto w-full" style={{ borderRadius: 6 }} />
          </div>
          <div className="relative mt-3">
            <div className="q-glow absolute left-1/2 top-[-18px] h-[150px] w-[210px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(circle,#FFF6B8 0%,rgba(255,246,184,.55) 45%,rgba(255,246,184,0) 72%)" }} aria-hidden="true" />
            <Pixels rows={CHEST} pal={CHEST_PAL} className="relative w-[176px] md:w-[230px]" />
            <Pixels rows={COIN} pal={{ o: "#3B2412", y: "#FFE58A", k: "#E0A81C" }} className="q-conf absolute left-[-34px] top-[40px] w-[26px]" />
            <Pixels rows={COIN} pal={{ o: "#3B2412", y: "#FFE58A", k: "#E0A81C" }} className="q-conf absolute right-[-30px] top-[18px] w-[22px]" />
            <Pixels rows={STAR} pal={{ y: "#FFFFFF" }} className="q-conf absolute right-[-8px] top-[-22px] w-[18px]" />
          </div>
          <p className="q-dot relative mt-4 px-3 py-1 text-[18px] md:text-xl" style={{ background: "rgba(31,42,107,.88)", color: "#fff" }}>
            Real cards from Japan, now in your hands.
          </p>
        </div>
      </header>

      <main className="mx-auto -mt-10 max-w-3xl px-4 pb-14 md:-mt-14">
        <section className="q-win relative z-10 p-5 md:p-7">
          <p className="q-dot text-base tracking-wider text-[#4B2FB8]">QUEST CARD</p>
          <p className="mt-2 text-[19px] leading-[1.7]">
            Complete our 3 quests, step by step, and get up to <strong>¥9,000 OFF</strong> your next order. Do one, two or all three:
            each quest earns its own discount.
          </p>
          <div className="mt-4 p-4 text-[18px] leading-[1.7]" style={{ background: "#FFF0B8", border: "3px solid #1F2A6B" }}>
            <p className="q-dot font-bold">RULES — for every quest</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Show <strong>both your item and the Quest Card</strong> in the photo.</li>
              <li>Add <strong>a short comment</strong> about your order.</li>
            </ul>
          </div>
        </section>

        <Example />

        <div className="mt-8 space-y-7">
          <Quest label="QUEST 1" reward="¥3,000 OFF" title="Arrival report on Discord" steps={[
            <><p className="font-bold">Join our Discord</p><Btn href={DISCORD_URL} kind="main">Join our Discord</Btn></>,
            <><p className="font-bold">Open the #arrival-report channel</p><Btn href={DISCORD_CHANNEL_URL} kind="sub">Go to #arrival-report</Btn></>,
            <p>Post a photo of your item + the Quest Card and a short comment.</p>,
            <p>We'll send your <strong>¥3,000 coupon</strong> (see "How you get it" below).</p>,
          ]} />
          <Quest label="QUEST 2" reward="+¥3,000 OFF" title="Instagram post or Stories" steps={[
            <><p className="font-bold">Open our Instagram</p><Btn href={INSTAGRAM_URL} kind="main">Open our Instagram</Btn></>,
            <p>Post a photo of your item + the Quest Card, as a post or in Stories, with a short comment.</p>,
            <><p>Mention <strong>{INSTAGRAM_HANDLE}</strong>.</p>
              <p className="mt-2 p-3 font-bold" style={{ background: "#FFE9E9", border: "2px solid #B3261E" }}>Stories disappear after 24 hours, so please be sure to mention us. If we cannot find it, we may ask you to post again.</p></>,
            <p>We'll send your <strong>¥3,000 coupon</strong> by DM.</p>,
          ]} />
          <Quest label="QUEST 3" reward="+¥3,000 OFF" title="Post in our Facebook group" steps={[
            <><p className="font-bold">Open the Facebook group</p><Btn href={FACEBOOK_GROUP_URL} kind="main">Open the Facebook group</Btn></>,
            <p>Post a photo of your item + the Quest Card and a short comment.</p>,
            <><p>Mention both names below (tap to select, then copy).</p>
              <ul className="mt-2 space-y-2">
                {FB_MENTIONS.map((m) => (
                  <li key={m} className="select-all break-words px-3 py-2 font-bold" style={{ background: "#EEF1FF", border: "2px solid #1F2A6B" }}>{m}</li>
                ))}
              </ul></>,
            <p>We'll send your <strong>¥3,000 coupon</strong> by DM.</p>,
          ]} />

          <article className="q-win">
            <div className="q-dot flex items-center gap-2 px-4 py-2 text-lg text-white md:px-6" style={{ background: "#2F8F3F" }}>
              <Pixels rows={STAR} pal={{ y: "#FFE45C" }} className="h-5 w-5" />
              <span className="tracking-wider">CLEAR! YOUR COUPON</span>
            </div>
            <div className="p-5 text-[18px] leading-[1.7] md:p-7">
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
            <div className="q-head px-4 py-4 text-center text-[26px] leading-tight text-white md:text-4xl" style={{ background: "#1F6FB5" }}>
              Want to order more? Get today's prices
            </div>
            <div className="p-5 text-[18px] leading-[1.7] md:p-7">
              <p>Wholesale &amp; bulk orders welcome — we reply the same day (Japan time).</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <div className="sm:flex-1"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="q-btn mt-1" style={{ background: "#25D366", color: "#073B1A" }}>Chat with us on WhatsApp <ExternalLink className="h-5 w-5" /></a></div>
                <div className="sm:flex-1"><a href={PRICE_LIST_URL} target="_blank" rel="noopener noreferrer" className="q-btn q-btn-sub mt-1">See today's price list <ExternalLink className="h-5 w-5" /></a></div>
              </div>
            </div>
          </article>

          <article className="q-win p-5 md:p-7">
            <h2 className="q-dot text-2xl font-bold">FAQ</h2>
            <dl className="mt-3 divide-y-2 divide-[#C9D2F5]">
              {faq.map((f) => (
                <div key={f.q} className="py-4">
                  <dt className="text-[19px] font-bold">{f.q}</dt>
                  <dd className="mt-1 text-[18px] leading-[1.7]">{f.a}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>

        <p className="q-dot mt-10 text-center text-xl" style={{ color: "#1F2A6B" }}>Thank you for collecting with us.</p>
      </main>

      <footer className="py-6 text-center text-sm" style={{ background: "#2F9A3A", color: "#fff", borderTop: "6px solid #4FBF4A" }}>
        AiGIVE CO., LTD. / Nagaoka, Niigata, Japan
      </footer>
    </div>
  );
}
