import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getAssetPath } from "@/lib/basePath";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "スケジュール・稽古日時",
  description:
    "空手道脩己会総本部道場の週間稽古スケジュール。幼年・入門クラス（水・土）、少年クラス（水・土）、幼少年クラス（月・金）、一般クラス（月・水・金・土）、健康空手クラス（月・水・金）。週何回でも参加可能。PDFダウンロード対応。",
  keywords: [
    "空手 スケジュール",
    "空手 稽古時間",
    "文京区 空手 時間割",
    "子供空手 スケジュール",
    "脩己会 稽古日",
  ],
  alternates: {
    canonical: "/schedule",
  },
  openGraph: {
    title: "スケジュール・稽古日時｜空手道脩己会 総本部道場",
    description:
      "総本部道場の週間タイムスケジュール。すべてのクラスで見学・無料体験が可能です。",
  },
};

export default function SchedulePage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "スケジュール", path: "/schedule" },
  ]);

  return (
    <div className="sub sch">
      <JsonLd data={breadcrumb} />
      <div id="mv">
        <div className="gridContainer clearfix">
          <h2>スケジュール</h2>
        </div>
      </div>

      <div id="content">
        <section>
          <div className="gridContainer">
            <h3>クラススケジュール</h3>

            <p className="txtsch">
              幼年・入門クラス（３歳～低学年初心者）水　16：30～17：15　土　15：00～15：45
              <br />
              少年クラス（小１～小６）水　17：30～18：30　土　16：00～17：00
              <br />
              幼・少年クラス（３歳～小６）月　金　17：30～18：30
              <br />
              一般クラス（中学生以上）月・水・金　19：30～21：00　土　17：40～19：00
              <br />
              健康空手クラス（中学生以上）月　水　金　15：00～16：00
              <br />
              <br />
              すべてのクラスで見学・体験が可能です。
            </p>

            <p className="button size03">
              <a
                href={getAssetPath("/class2020.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                クラススケジュールをダウンロード　&gt;
              </a>
            </p>

            <p>
              クラス対象年齢ですが、時間的に都合が合わない場合もあるかと存じます。
            </p>
            <p>
              小学生１年生に関しては幼年クラス及び少年クラスどちらで参加されても問題ありません。
            </p>
            <p>
              対象年齢は厳守という事ではなく、その場合は参加出来る時間帯での参加を承っておりますので、
              お気軽に指導員までお伝え下さい。
            </p>
            <p>その他、兄弟での参加も合わせて一緒にという形でもOKです。</p>
            <p>
              その他質問などがありましたら、指導員までお問い合わせください。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
