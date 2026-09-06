import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "空手道脩己会総本部道場に寄せられるよくあるご質問（Q&A）。入会可能年齢（3歳から上限なし）、体力への不安、黒帯取得、無料見学・体験レッスンの参加方法について回答しています。",
  keywords: [
    "空手 よくある質問",
    "空手 何歳から",
    "文京区 空手 初心者",
    "キッズ空手 体験",
    "脩己会",
    "修己会",
  ],
  alternates: {
    canonical: "/qa",
  },
  openGraph: {
    title: "よくあるご質問｜空手道脩己会 総本部道場",
    description:
      "3歳の幼児からシニアまで。体力に自信がない方でも安心して始められる空手道脩己会のよくあるご質問。",
  },
};

export default function QaPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "よくあるご質問", path: "/qa" },
  ]);
  const faqSchema = getFaqJsonLd();

  return (
    <div className="sub qa">
      <JsonLd data={[breadcrumb, faqSchema]} />
      <div id="mv">
        <div className="gridContainer clearfix">
          <h2>よくあるご質問</h2>
        </div>
      </div>

      <div id="content">
        <section>
          <div className="gridContainer">
            <article>
              <h3>「何歳から何歳まで入会できますか？」</h3>
              <p>
                3歳の幼児から承っております。また年齢の上限はありません。現在６０代の方も稽古に励んでおります。
              </p>
              <p>
                職業的にも、サラリーマンやOL、経営者、芸術家、医者、弁護士など、様々な方が集まっていますので、
                職種をこえた出会いや人の輪も自然と生まれていきます。
              </p>
            </article>

            <article>
              <h3>「体力に自信がないのですが、大丈夫でしょうか？」</h3>
              <p>
                空手というと、厳しい、痛いというイメージを持たれている方が多いようですが、
                <br />
                本部道場では「楽しく継続する事が何よりも上達への近道だと考えておりますので、稽古内容も無理な体力任せということはありません。それぞれに合ったそれぞれレベルに合わせて稽古を行いますので、ぜひ一度汗を流しにいらしてください。
              </p>
            </article>

            <article>
              <h3>「今から始めても黒帯を取れますか？」</h3>
              <p>何歳から始めたとしても遅いといったことはありません。</p>
              <p>
                道場では、全ての道場生に黒帯を取得して欲しいと願っております。
              </p>
            </article>

            <article>
              <h3>「見学・体験入門は有料ですか？」</h3>
              <p>
                無料でご利用いただけます。入会をご希望・ご検討の方なら誰でも体験・見学が可能です。
              </p>
              <p>
                体験・見学にあたって、不安の方も多いようですが、何事も踏み出す一歩で環境は変わります。
              </p>
              <p>
                お電話、または
                <Link href="/contact">お問い合わせフォーム</Link>
                よりお申し込みください。
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
