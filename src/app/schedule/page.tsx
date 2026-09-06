import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スケジュール ｜文京区 空手 空手道脩己会 総本部道場",
  description:
    "スケジュールのページです。3歳からの礼儀作法、武道の心。空手道脩己会総本部道場。",
  keywords: [
    "文京区 空手",
    "東京都 空手",
    "文京区 キックボクシング",
    "キッズ空手",
    "脩己会",
    "修己会",
    "スケジュール",
  ],
};

export default function SchedulePage() {
  return (
    <div className="sub sch">
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
                href="/class2020.pdf"
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
