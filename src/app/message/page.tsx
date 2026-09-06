import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会長挨拶｜文京区 空手 空手道脩己会 総本部道場",
  description:
    "会長挨拶のページです。3歳からの礼儀作法、武道の心。空手道脩己会総本部道場。",
  keywords: [
    "文京区 空手",
    "東京都 空手",
    "文京区 キックボクシング",
    "キッズ空手",
    "脩己会",
    "修己会",
    "挨拶",
  ],
};

export default function MessagePage() {
  return (
    <div className="sub message">
      <div id="mv">
        <div className="gridContainer clearfix">
          <h2>会長挨拶</h2>
        </div>
      </div>

      <div id="content">
        <section className="kaicyou">
          <div className="gridContainer">
            <div className="mobile_only txtC mb60">
              <img src="/img/sp/message.png" alt="会長" className="img80" />
            </div>
            <p className="name">
              <ruby>
                武硯脩己
                <rt>ぶけんしゅうき</rt>
              </ruby>{" "}
              <span>自己の可能性を引き出す道として</span>
            </p>

            <div className="txtBox">
              <p>
                白い道衣に袖を通して、道場を清め座して黙想、礼。
                <br />
                そして気合いと共に稽古がはじまります。
              </p>
              <p>
                気魄あふれる動作の連続、道場には心地よく引き締まった空間が形成されます。
                <br />
                再び座して黙想、全員で道場訓を唱和して戒め、感謝の礼で終わります。
              </p>
              <p>
                「只管打拳」ただひたすら無心で稽古に励む姿。
                <br />
                古より変わることなく続く武道の響きです。
              </p>
              <p>
                空手道とは修練を積む中で自己の可能性を引き出す脩己の武道です。
              </p>
              <p>
                まさに硯で墨を磨るごとし、急がず競わず弛まず己だけを見て心身を鍛え、武を練る中で弱さも知り、挫けずやり抜く強さを得ることで己の潜在力を引き出す道です。
              </p>
              <p>
                子供には子供の、青年には青年の、女性には女性の、壮年には壮年なりの心身の鍛え方があります。自己への問いかけは可能性への限りない挑戦です。
              </p>
              <p>
                脩己空手という小さな社会で切磋琢磨して少しだけ無理をして生きることで、やがて大きな実りもたらしてくれます。知らず知らずのうちに、元の自分では考えらない力を発揮し、自分の世界が思わぬ広がりと深さを持てます。
              </p>
              <p>
                武道とは人の歩む道そのものです、常に己という畑を耕さなければなりません。
              </p>
              <p>
                それは生きている限り止むことありません。
                <br />
                「良い習慣は才能を超える」の信条で道場生を導きたいとおもいます。
              </p>
            </div>
            <p className="name2">
              <span>空手道 脩己會 会長</span>　林　正秀
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
