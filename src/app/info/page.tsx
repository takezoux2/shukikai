import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "入会案内｜文京区 空手 空手道脩己会 総本部道場",
  description:
    "入会案内のページです。3歳からの礼儀作法、武道の心。空手道脩己会総本部道場。",
  keywords: [
    "文京区 空手",
    "東京都 空手",
    "文京区 キックボクシング",
    "キッズ空手",
    "脩己会",
    "修己会",
    "入会案内",
  ],
};

export default function InfoPage() {
  return (
    <div className="sub nyukai">
      <div id="mv">
        <div className="gridContainer clearfix">
          <h2>入会案内</h2>
        </div>
      </div>

      <div id="content">
        <section>
          <div className="gridContainer">
            <div className="nyukaiLeadBox">
              <p className="nyukaiLeadText">
                見学・体験レッスン、入会のお申し込みは随時受け付けております。
              </p>
              <div className="nyukaiLeadBtnWrap">
                <Link href="/contact" className="nyukaiLeadBtn">
                  見学、入会申し込みは問い合わせから &gt;
                </Link>
              </div>
            </div>

            <h3>入会諸費用・参加可能クラス</h3>
            <table className="desktop_only">
              <thead>
                <tr>
                  <th scope="col">会員種別</th>
                  <th scope="col">対象</th>
                  <th scope="col">入会金</th>
                  <th scope="col">月会費</th>
                  <th scope="col">空手衣</th>
                  <th scope="col">参加可能クラス</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>キッズ会員</td>
                  <td>3歳～小6</td>
                  <td className="txtC">11,000円</td>
                  <td className="txtC">8,800円</td>
                  <td className="txtC">11,000円</td>
                  <td>幼・少年クラス</td>
                </tr>
                <tr>
                  <td>中学生会員</td>
                  <td>中1～中3</td>
                  <td className="txtC">11,000円</td>
                  <td className="txtC">8,800円</td>
                  <td className="txtC">12,000円</td>
                  <td>一般クラス</td>
                </tr>
                <tr>
                  <td>一般会員</td>
                  <td>高校生以上の男女</td>
                  <td className="txtC">11,000円</td>
                  <td className="txtC">11,000円</td>
                  <td className="txtC">13,000円</td>
                  <td>一般クラス</td>
                </tr>
              </tbody>
            </table>

            <div className="mobile_only">
              <h4>キッズ会員</h4>
              <p>対象　：3歳～小6</p>
              <p>入会金：11,000円</p>
              <p>月会費：8,800円</p>
              <p>空手衣：11,000円</p>
              <p>
                参加可能クラス
                <br />
                幼・少年クラス
              </p>

              <h4>中学生会員</h4>
              <p>対象　：中1～中3</p>
              <p>入会金：11,000円</p>
              <p>月会費：8,800円</p>
              <p>空手衣：12,000円</p>
              <p>
                参加可能クラス
                <br />
                一般クラス
              </p>

              <h4>一般会員</h4>
              <p>対象　：高校生以上の男女</p>
              <p>入会金：11,000円</p>
              <p>月会費：11,000円</p>
              <p>空手衣：13,000円</p>
              <p>
                参加可能クラス
                <br />
                一般クラス
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="gridContainer clearfix">
            <div className="fL">
              <h4>月会費のお支払いについて</h4>
              <p>
                月会費は毎月27日に銀行自動引き落としでお支払い頂きます。
                <br />
                <span className="small">※ 例：4月分会費の場合3月27日</span>
              </p>
              <p>
                「預金口座振り替え依頼書」のご記入提出は入会時にお済ませください。
              </p>
              <p>
                なお、銀行引き落とし開始まで事務手続きに2～3ヶ月を要しますので、入会月分会費、翌月分会費は、手渡しでお願いいたします。
              </p>
              <p>通常3ヶ月目から銀行引き落しとなります。</p>
            </div>

            <div className="fR">
              <h4>入会時に必要なもの</h4>
              <div className="number">
                <dl>
                  <dt>1</dt>
                  <dd>
                    入会申込書
                    <span className="small">
                      （必要事項をご記入の上、受付お渡しください）
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>2</dt>
                  <dd>入会金：11,000円</dd>
                </dl>
                <dl>
                  <dt>3</dt>
                  <dd>入会月分会費＋翌月分会費：上記参照</dd>
                </dl>
                <dl>
                  <dt>4</dt>
                  <dd>顔写真　2枚（3㎝×4㎝）</dd>
                </dl>
                <dl>
                  <dt>5</dt>
                  <dd>預金口座振り替え依頼書（記入済のもの）</dd>
                </dl>
                <dl>
                  <dt>6</dt>
                  <dd>空手道衣代のお支払い：11,000〜13,000円</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="gridContainer clearfix">
            <div className="fL">
              <h4>稽古について</h4>
              <p>基本的に時間割通りのクラスに参加出来ます。</p>
              <p>
                クラスには一週間で何度稽古に参加されても大丈夫です。
                <br />
                週一回でも週三回でも月会費は同じになりますので、積極的にご利用くださいませ。
              </p>
              <p>
                <span className="small">※ 祝祭日は終日休館となります。</span>
              </p>
            </div>

            <div className="fR">
              <h4>ファミリー入会について</h4>
              <p>
                ご家族で入会される場合二人目より、月会費を1,000円引きとさせていただきます。
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="gridContainer clearfix">
            <div className="txtBox">
              <p className="larger">空手道脩己会総本部道場</p>
              <p>113-0033東京都文京区本郷3－43－4　2F</p>
              <p className="bold">
                TEL 03-3813-7779　FAX 03-3813-1610　Email :{" "}
                <a href="mailto:shuki-karate@outlook.jp">
                  shuki-karate@outlook.jp
                </a>
              </p>
            </div>

            <div className="nyukaiLeadBox nyukaiBottomBox">
              <p className="nyukaiLeadText">
                見学・体験レッスン、入会のお申し込みは随時受け付けております。
              </p>
              <div className="nyukaiLeadBtnWrap">
                <Link href="/contact" className="nyukaiLeadBtn">
                  見学、入会申し込みは問い合わせから &gt;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
