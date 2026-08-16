import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

/**
 * トップページ。
 *
 * 2026-08-16 外部デザイナーの指摘を受けて全面的に組み直した。骨子は3つ:
 *   1. 角丸と影をやめ、1pxの罫線だけで区切る（AI生成サイトの見た目から離すため）
 *   2. ヒーローの直下に登記・許認可を並べる（法人が最初に確認する情報だから）
 *   3. 事業を8:4の非対称グリッドにして、卸売に面積を割く
 *
 * ⚠️ トレーディングカードを前面に出さないこと（2026-08-10 なつき指示）。
 *    卸問屋への提案でも、ポケモン社との関係でも、社の顔をカードにはしない。
 *    主語は「玩具・ホビー」。カードは取扱品目の一つとして本文の中に置く。
 *
 * ⚠️ 数字（法人番号・古物商許可・インボイス登録番号）は company.* の実値と揃えること。
 *    ここを推測で書くと、信用のために置いた欄が信用を落とす。
 */

const SPECS = [
  { k: "spec.corp", v: "spec.corp.v" },
  { k: "spec.invoice", v: "spec.invoice.v" },
  { k: "spec.license", v: "spec.license.v" },
  { k: "spec.logi", v: "spec.logi.v" },
];

const SUB_BIZ = ["buyback", "export"];
const MINOR_BIZ = ["retail", "sns"];
const FLOW = ["s1", "s2", "s3", "s4"];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="bg-white" style={{ color: "#1A1A1A" }}>
      {/* ヒーロー */}
      <section className="border-b py-20 md:py-28" style={{ borderColor: "#D6D6D6", background: "#F2F2F2" }}>
        <div className="container">
          <div className="max-w-3xl">
            <span
              className="inline-block border bg-white px-3 py-1 text-xs"
              style={{ borderColor: "#D6D6D6", color: "#626262" }}
            >
              {t("hero.badge")}
            </span>
            <h1 className="mt-6 text-3xl md:text-5xl font-heading font-bold leading-tight tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: "#626262" }}>
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <a className="inline-block px-6 py-3.5 text-sm font-medium text-white" style={{ background: "#0017C1" }}>
                  {t("hero.cta")}
                </a>
              </Link>
              <Link href="/services">
                <a className="inline-block border bg-white px-6 py-3.5 text-sm font-medium" style={{ borderColor: "#1A1A1A" }}>
                  {t("hero.cta2")}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 登記・許認可。法人が最初に確認するので、ファーストビューの直下に置く */}
      <section className="border-b bg-white py-8" style={{ borderColor: "#D6D6D6" }}>
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECS.map((s) => (
            <div key={s.k} className="border-l-2 pl-3" style={{ borderColor: "#1A1A1A" }}>
              <span className="block text-xs font-bold">{t(s.k)}</span>
              <span className="text-xs" style={{ color: "#626262" }}>{t(s.v)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 事業内容。卸売に8カラム、買取・輸出に4カラム＝面積で主従を示す */}
      <section className="border-b py-20 md:py-24" style={{ borderColor: "#D6D6D6" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">{t("biz.title")}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed" style={{ color: "#626262" }}>
            {t("biz.lead")}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="border bg-white p-8 md:p-10 lg:col-span-8" style={{ borderColor: "#D6D6D6" }}>
              <span className="text-xs font-bold tracking-wider" style={{ color: "#0017C1" }}>
                {t("biz.wholesale.num")}
              </span>
              <h3 className="mt-2 text-xl md:text-2xl font-bold">{t("biz.wholesale.title")}</h3>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#626262" }}>
                {t("biz.wholesale.desc")}
              </p>

              <div className="mt-6 border p-6" style={{ borderColor: "#D6D6D6", background: "#F2F2F2" }}>
                <h4 className="text-xs font-bold">{t("biz.wholesale.feat")}</h4>
                <ul className="mt-3 space-y-2 text-xs" style={{ color: "#626262" }}>
                  {["feat1", "feat2", "feat3"].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span style={{ color: "#0017C1" }}>―</span>
                      <span>{t(`biz.wholesale.${f}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 border-t pt-4 text-xs" style={{ borderColor: "#D6D6D6", color: "#626262" }}>
                {t("biz.wholesale.items")}
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-4">
              {SUB_BIZ.map((b) => (
                <div key={b} className="flex-1 border p-8" style={{ borderColor: "#D6D6D6", background: "#F2F2F2" }}>
                  <span className="text-xs font-bold tracking-wider" style={{ color: "#626262" }}>
                    {t(`biz.${b}.num`)}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{t(`biz.${b}.title`)}</h3>
                  <p className="mt-3 text-xs leading-relaxed" style={{ color: "#626262" }}>
                    {t(`biz.${b}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {MINOR_BIZ.map((b) => (
              <div key={b} className="border bg-white p-8" style={{ borderColor: "#D6D6D6" }}>
                <span className="text-xs font-bold tracking-wider" style={{ color: "#626262" }}>
                  {t(`biz.${b}.num`)}
                </span>
                <h3 className="mt-2 text-lg font-bold">{t(`biz.${b}.title`)}</h3>
                <p className="mt-3 text-xs leading-relaxed" style={{ color: "#626262" }}>
                  {t(`biz.${b}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お取引の流れ */}
      <section className="border-b py-20 md:py-24" style={{ borderColor: "#D6D6D6", background: "#F2F2F2" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">{t("flow.title")}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed" style={{ color: "#626262" }}>
            {t("flow.lead")}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {FLOW.map((s, i) => (
              <div key={s} className="border bg-white p-6" style={{ borderColor: "#D6D6D6" }}>
                <span className="block text-xl font-bold" style={{ color: "#0017C1" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-sm font-bold">{t(`flow.${s}.t`)}</h3>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "#626262" }}>
                  {t(`flow.${s}.d`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 長岡の店舗計画。トップから外さず中盤に置く（実体のある会社だと伝わるほうが法人にも効く）。
          2026-08-16 なつき: 「遊ぶ場所が少ない長岡に、子どもたちが遊べる場所を」。
          ⚠️ まだ開いていない。「計画中」「準備を進めている」を必ず添えて、断定しない。 */}
      <section className="border-b py-20" style={{ borderColor: "#D6D6D6" }}>
        <div className="container">
          <div className="border bg-white p-8 md:p-12" style={{ borderColor: "#D6D6D6" }}>
            <div className="max-w-3xl">
              <span className="inline-block px-2 py-1 text-xs font-bold text-white" style={{ background: "#0017C1" }}>
                {t("store.badge")}
              </span>
              <h2 className="mt-4 text-xl md:text-2xl font-heading font-bold leading-snug">{t("store.title")}</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#626262" }}>{t("store.lead")}</p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#626262" }}>{t("store.body")}</p>
              <p className="mt-6 text-xs" style={{ color: "#626262" }}>{t("store.note")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 問い合わせへの導線。フォームは /contact にあるので、ここでは重複させない */}
      <section className="bg-white py-20 md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">{t("cta.title")}</h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "#626262" }}>{t("cta.lead")}</p>
          <Link href="/contact">
            <a className="mt-8 inline-block px-8 py-4 text-sm font-medium text-white" style={{ background: "#0017C1" }}>
              {t("cta.button")}
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
