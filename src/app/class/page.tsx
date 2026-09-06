import type { Metadata } from "next";
import Link from "next/link";
import { getAssetPath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "クラス紹介｜文京区 空手 空手道脩己会 総本部道場",
  description:
    "クラス紹介のページです。3歳からの礼儀作法、武道の心。空手道脩己会総本部道場。",
  keywords: [
    "文京区 空手",
    "東京都 空手",
    "文京区 キックボクシング",
    "キッズ空手",
    "脩己会",
    "修己会",
    "クラス紹介",
  ],
};

export default function ClassPage() {
  return (
    <div className="sub class">
      <div id="mv">
        <div className="gridContainer clearfix">
          <h2>クラス紹介</h2>
        </div>
      </div>

      <div id="content">
        <section className="class_1" style={{ padding: "0 0" }}>
          <div className="gridContainer">
            <div id="class_nav" className="desktop_only">
              <ul className="clearfix">
                <li>
                  <a href="#kids">キッズ空手クラス</a>
                </li>
                <li>
                  <a href="#standard">一般クラス</a>
                </li>
                <li>
                  <a href="#ladies">レディスキッククラス</a>
                </li>
                <li>
                  <a href="#yoga">ヨガクラス</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="kids" className="class_2">
          <div className="gridContainer">
            <h2 className="class_title">キッズ空手クラス</h2>
            <img
              src={getAssetPath("/img/pc/class_photo01.png")}
              alt="キッズ空手クラス"
            />

            <div className="clearfix last">
              <div className="fL">
                <p className="bold larger">幼年･入門クラス(3-低学年初心者)</p>
                <p className="lh12">
                  <br />
                  礼儀作法から始まり、空手の基本動作を学びながら他者との協調性を養います。
                </p>
              </div>
              <div className="fR">
                <p className="bold larger">少年クラス（小1-小6）</p>
                <p className="lh12">
                  <br />
                  動作の応用や対人動作、形や組手を通じて忍耐力や立ち向かってゆく勇気を養います
                </p>
              </div>
            </div>

            <h3>3才からの礼儀作法 大切なことからはじめよう</h3>
            <p>
              帰りに教室を出る時、きちんと椅子をしまってから帰らせる。
              <br />
              これを徹底的に指導し続けることで、学級崩壊から立ち直った中学校があります。
            </p>
            <p>
              「しつけは、はいという返事と靴を揃えることである」という教育学者もいます。
              <br />
              本当に人としての躾、礼儀とは当たり前でも結構飛び越えてしまい成長しているのが現代の子供達です。
            </p>
            <p>当たり前だけど、大切なこと。</p>
            <p>
              きちんと挨拶をすること。誰かに親切にしてもらったら、「ありがとう」ということ。
              <br />
              誰かに迷惑をかけたなら、素直に「ごめんなさい」ということ。
              <br />
              すべてが当たり前だけど大切なことではないでしょうか。
            </p>
            <p>
              キッズ空手では、徹底した礼節から始まり空手の基本動作、また運動能力向上のためのアスレチックなど、日々バリエーション豊かに楽しみながら学んで行きます。子ども達の可能性は無限大です。
            </p>
            <p>
              その可能性を自らの力で引き出せるように、「挨拶がきちんと出来る、自己主張がしっかりと出来る、
              他人の痛みが分かる」よう、子供たちと目線を合わせながら指導いたします。
            </p>
            <p>
              子供たちを指導するにあたって一番底にあるものは「まっすぐとした姿勢」を持つということです。
              「まっすぐとした姿勢」を養うことで、物事の良し悪しをしっかりと区別できるようになり、そこに人としての思いやりや優しさ、強さが生まれてくるのだと考えています。
            </p>
            <p>人は生きていくうえで、一人では生きていけません。</p>
            <p>
              幼稚園、保育園、学校とは違う環境で空手に触れながら、協調性を身につけ、成長していってもらいたいと思っています。
            </p>

            <div className="txtBox">
              <p>◆保護者の皆様へ</p>
              <p>
                新しく入って来た小さい子供たちと接する時、まず良く観る事からはじめます。
              </p>
              <p>
                供たちの家庭環境や、お父さんお母さんたちと普段どう接しているのかそれぞれ違うわけですから、この一部分を改善すれば見違えるようになるポイントを、なるべく早期に捉えるようにしております。
              </p>
              <p>
                小さいお子さんの、お父さんお母さんの皆様に一言だけ言わせて頂けるのならば、子供たちが何回か稽古に参加して行きたくないと言い出しても、そんな時は甘えを見せず連れて来て欲しいと思います。
              </p>
              <p>
                空手だけではなく習い事全般で特に辛いのは、環境に慣れない最初の段階です。
              </p>
              <p>
                逆に言えばこの段階を我慢して向き合えたのなら、一か月もすればもう立派なチビッコ空手家と言えるでしょう。
              </p>
            </div>

            <p className="button">
              <Link href="/schedule">スケジュール &gt;</Link>
            </p>
          </div>
        </section>

        <section id="standard" className="class_3">
          <div className="gridContainer">
            <h2 className="class_title">一般クラス</h2>
            <img
              src={getAssetPath("/img/pc/class_photo02.png")}
              alt="一般クラス"
            />

            <h3>武道に触れよう</h3>
            <p>
              健全な肉体は健全な精神を育みます。
              <br />
              武道とは体をもって心理を悟り、己を磨く人格形成の道です。
            </p>
            <p>
              道場では毎回の稽古で自然に「理術」が身に付くように、稽古内容が組み立てられています。
              <br />
              「理術」とは理にかなった技をいい、その動きを司るものは正しい身体動作にあります。
              <br />
              「理術」を稽古していくと体力腕力に頼ることなく体力の消耗も少なくなり、
              <br />
              腕力体力を技術力でカバーしていけるのです。
            </p>
            <p>
              武道を始めることに、遅いという事は全くありません。性別、年齢に関係なく、稽古が行えます。
            </p>
            <p className="lh20">
              まずは、空手を楽しんでいただくこと。
              <br />
              次に、空手に親しんでいただくこと。
              <br />
              最後に、空手を好きになっていただくこと。
              <br />
              ぜひ、空手に触れてみてください。
            </p>
            <p>
              一般クラスでは、曜日によってスポーツクラブや他のジムでは味わえない空手本来の基本動作、護身術を
              身につける、精神修養の場としての武道空手クラスと、ミットを中心としたキッククラスに分けています。
            </p>
            <p>
              空手動作全般から、形、対人動作、護身術など、総合的な稽古を行います。
            </p>

            <p className="button">
              <Link href="/schedule">スケジュール &gt;</Link>
            </p>
          </div>
        </section>

        <section id="ladies" className="class_2">
          <div className="gridContainer">
            <h2 className="class_title">レディスキッククラス</h2>
            <img
              src={getAssetPath("/img/pc/class_photo03.png")}
              alt="レディスキッククラス"
            />

            <h3>パンチ キック でストレス発散！</h3>
            <p>
              レディスキッククラスでは、パンチ・キック、護身術など、空手の簡単な動きを取り入れながら、健康的な体力作りを目指す女性専用のクラスです。
            </p>
            <p>
              女性だけのクラスなので、人目を気にせずストレスも発散でき、また実用的な護身術も学べます。
            </p>
            <br />
            <p>
              総本部道場では、全クラスにおいて経験豊富な指導員が各個人のレベルを見極め、最適な指導を心掛けておりますので、どなたでもいつからでも始められます。また随時、
              <Link href="/contact">見学・無料体験</Link>を行っておりますので、
            </p>
            <p>お気軽にお問い合わせください。</p>

            <p className="button">
              <Link href="/schedule">スケジュール &gt;</Link>
            </p>
          </div>
        </section>

        <section id="yoga" className="class_4">
          <div className="gridContainer">
            <h2 className="class_title">ヨガクラス（中学生以上）</h2>
            <div className="txtC">
              <img
                src={getAssetPath("/img/pc/class_photo04.png")}
                alt="ヨガクラス"
              />
            </div>

            <h3>体質改善・ボディメイク・リラックス効果</h3>
            <p>
              ヨガとは、「精神と身体を、最も安定した状態に近づける方法」としてインドで発祥しました。
            </p>
            <p>
              現在のヨガは、柔軟体操､健康法､ダイエット、様々な問題を抱える現代社会にあわせたストレス解消法など様々な目的で行われていますが、それらは本来のヨガの目的の一部に過ぎません。
            </p>
            <p>
              様々のスタイルのヨガが存在しますが、当施設では経験豊富な講師によって「ハタヨガ」「陰ヨガ」「グンダリ―ニヨガ」まで幅広く学べます。
            </p>
            <p>
              身体にもココロもブレない軸を作り、バランスよくしなやかで力強さを作っていきませんか？
            </p>

            <p className="button size02">
              <a
                href="http://bunkyo-yoga.on.omisenomikata.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ヨガクラスホームページ &gt;
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
