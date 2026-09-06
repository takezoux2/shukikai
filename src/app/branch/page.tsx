import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "支部一覧｜文京区 空手 空手道脩己会 総本部道場",
  description:
    "一覧のページです。3歳からの礼儀作法、武道の心。空手道脩己会総本部道場。",
  keywords: [
    "文京区 空手",
    "東京都 空手",
    "文京区 キックボクシング",
    "キッズ空手",
    "脩己会",
    "修己会",
    "支部一覧",
  ],
};

export default function BranchPage() {
  return (
    <div className="sub branch">
      <div id="mv">
        <div className="gridContainer clearfix">
          <h2>支部一覧</h2>
        </div>
      </div>

      <div id="content">
        <section>
          <div className="gridContainer">
            <h3>関東地区</h3>
            <div className="clearfix">
              <div className="fL">
                <div className="txtBox">
                  <h4>総本部道場</h4>
                  <p>会長　林 正秀</p>
                  <p>
                    〒113-0033
                    <br />
                    東京都文京区本郷3-43-4シモムラビル２F
                  </p>
                  <p>TEL 03－3813－7779　FAX 03－3813－1610</p>
                </div>

                <div className="txtBox">
                  <h4>江東支部　東陽町道場</h4>
                  <p>責任者　林 正秀</p>
                  <p>東京都江東区東陽2－2－20（ゴールドジム内）</p>
                  <p>TEL 03-3813-7779（本部道場）</p>
                  <p>練習日：毎週　火曜・木曜・土曜</p>
                  <p>幼年部　火・木　15:30-16:30</p>
                  <p>少年部　火・木　17:00-18:00</p>
                  <p>幼少合同　土　10:00-11:00</p>
                  <p>親子カラテ　土　11:30-12:30</p>
                  <p>一般部　火・木　19:00-20:30　土　13:00-14:30</p>
                  <p>＊詳細はお問い合わせ</p>
                </div>
              </div>
              <div className="fR">
                <div className="txtBox">
                  <h4>城北支部　南千住道場</h4>
                  <p>責任者　岩永　強</p>
                  <p>荒川区南千住第２中学校　トレーニング室</p>
                  <p>練習日：毎週　火曜・水曜　18:30-19:30</p>
                  <p>090-6168-5766</p>
                </div>
                <div className="txtBox">
                  <h4>江東支部　東雲空手教室</h4>
                  <p>責任者　岩永　強</p>
                  <p>東京都江東区東雲1-9-17</p>
                  <p>東雲キャナルコートCODAN　18号棟</p>
                  <p>練習日：毎週 水曜 16:00-17:00　毎週 金曜 16:30-17:30</p>
                  <p>090-6168-5766</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="gridContainer">
            <h3>関西地区</h3>
            <div className="clearfix">
              <div className="fL">
                <div className="txtBox">
                  <h4>大阪本部　寛武館</h4>
                  <p>館長　石山 昌憲</p>
                  <p>大阪市大阪府生野区中川西1－14－10</p>
                </div>

                <div className="txtBox">
                  <h4>西宮尼崎西支部　錬武館</h4>
                  <p>館長　幡南　英二</p>
                  <p>
                    〒660-0076
                    <br />
                    兵庫県尼崎市武庫元町2-15-15
                  </p>
                  <p>TEL 06－7506－6050</p>
                </div>
              </div>
              <div className="fR">
                <div className="txtBox">
                  <h4>兵庫県本部　誠心館</h4>
                  <p>館長　巴山　猛</p>
                  <p>兵庫県尼崎市七松町2-6-6</p>
                  <p>090-3263-3344</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="gridContainer">
            <div className="clearfix">
              <div className="fL">
                <h3>東北地区</h3>
                <div className="txtBox">
                  <h4>青森支部　安田道場</h4>
                  <p>館長　安田　晃樹</p>
                  <p>
                    〒031-0072
                    <br />
                    青森県八戸市城下2－23－10
                  </p>
                  <p>TEL 0178－71－2929</p>
                </div>
              </div>

              <div className="fR">
                <h3>九州地区</h3>
                <div className="txtBox">
                  <h4>鹿児島川内クラブ</h4>
                  <p>責任者　市来優明</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
