import { useLanguage } from "@/contexts/LanguageContext";

/**
 * プライバシーポリシー。
 *
 * 2026-08-16 なつき「もっと十分に整えてください」。4条だったものを12条に増やした。
 * 増やした理由は体裁ではなく、当社が実際に扱う情報がそれだけあるため:
 *   古物営業法に基づく本人確認情報 / 取引先の口座情報 / クラウド利用に伴う国外移転 / 委託先への提供。
 *
 * ⚠️ 法令の最終判断は専門家のもの。**掲載前に弁護士または行政書士のチェックを受けること。**
 *   ここに書いてあるのは「当社が実際にやっている取扱い」を条文の形にしたものであって、
 *   法的な適法性を保証するものではない。
 */
export default function Privacy() {
  const { t } = useLanguage();

  const sections: Array<{ key: string; lists?: string[] }> = [
    { key: "section1" },
    { key: "section2", lists: ["list1", "list2", "list3", "list4"] },
    { key: "section3", lists: ["list1", "list2", "list3", "list4", "list5"] },
    { key: "section4" },
    { key: "section5" },
    { key: "section6" },
    { key: "section7" },
    { key: "section8" },
    { key: "section9" },
    { key: "section10" },
    { key: "section11" },
    { key: "section12" },
  ];

  return (
    <div className="pb-20">
      <div className="py-16 mb-12" style={{ background: "#F2F2F2" }}>
        <div className="container text-center">
          <h1
            className="text-3xl md:text-4xl font-heading font-bold"
            style={{ color: "#1A1A1A" }}
          >
            {t("privacy.title")}
          </h1>
        </div>
      </div>

      <div className="container max-w-3xl">
        <div
          className="bg-white p-8 md:p-12 rounded-3xl shadow-lg soft-shadow"
          style={{ color: "#1A1A1A" }}
        >
          <p className="leading-relaxed">{t("privacy.intro")}</p>
          <p className="text-sm mt-2" style={{ color: "#626262" }}>
            {t("privacy.updated")}
          </p>

          {sections.map((s) => (
            <section key={s.key} className="mt-10">
              <h2
                className="text-lg font-bold pb-2 mb-3"
                style={{ color: "#1A1A1A", borderBottom: "2px solid #0017C1" }}
              >
                {t(`privacy.${s.key}.title`)}
              </h2>
              <p className="leading-relaxed">{t(`privacy.${s.key}.content`)}</p>
              {s.lists && (
                <ul className="list-disc pl-6 mt-3 space-y-1 leading-relaxed">
                  {s.lists.map((l) => (
                    <li key={l}>{t(`privacy.${s.key}.${l}`)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
