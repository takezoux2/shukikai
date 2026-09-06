import Link from "next/link";
import RolloverImage from "@/components/RolloverImage";
import { getAssetPath } from "@/lib/basePath";

export default function HomePage() {
  return (
    <div className="top">
      {/* Main Visual */}
      <div id="mv">
        <div className="mobile_only">
          <img
            src={getAssetPath("/img/sp/mv.png")}
            alt="脩己会"
            className="mb60"
          />
        </div>
        <div className="gridContainer clearfix">
          <div className="fL">
            <Link href="/contact">
              <RolloverImage
                src="/img/pc/index_banner_off.png"
                alt="新規入会キャンペーン"
              />
            </Link>
          </div>
          <div className="fR">
            <h2>脩己会の最新情報をお届け</h2>
            <div className="clearfix">
              <div className="fL">
                <p>
                  空手道脩己会の最新情報を、
                  「フェイスブック」や「ブログ」から皆様にお届けします。
                </p>
              </div>
              <div className="fR desktop_only">
                <a
                  href="https://www.facebook.com/shukikai.karate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RolloverImage src="/img/pc/fb_off.png" alt="facebook" />
                </a>
                <br />
                <a
                  href="http://ameblo.jp/tokyu1979/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RolloverImage
                    src="/img/pc/blog_off.png"
                    alt="本部道場 ブログ"
                  />
                </a>
                <br />
                <a
                  href="http://ameblo.jp/shuki-ymca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RolloverImage
                    src="/img/pc/ymcablog_off.png"
                    alt="YMCA道場 ブログ"
                  />
                </a>
              </div>
              <div className="button_area mobile_only">
                <a
                  href="https://www.facebook.com/shukikai.karate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={getAssetPath("/img/sp/fb.png")} alt="facebook" />
                </a>
                <br />
                <a
                  href="http://ameblo.jp/tokyu1979/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={getAssetPath("/img/sp/blog1.png")}
                    alt="本部道場 ブログ"
                  />
                </a>
                <br />
                <a
                  href="http://ameblo.jp/shuki-ymca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={getAssetPath("/img/sp/blog2.png")}
                    alt="YMCA道場 ブログ"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div id="content">
        <section className="section1">
          <div className="gridContainer clearfix">
            <div className="fL">
              <h2>当たり前だけど、大切なこと</h2>
              <p>
                きちんと挨拶すること。
                <br />
                誰かに親切にしてもらったらしっかりありがとうということ。
                <br />
                誰かに迷惑をかけたなら、素直にごめんなさいということ。
                <br />
                すべてが当たり前だけど大切なことなのです。
                <br />
                「心の成長なくして本当の強さは身に付かない」
                <br />
                これが脩己会本部道場の考え方です。
              </p>
              <div className="mobile_only txtC">
                <img
                  src={getAssetPath("/img/pc/photo01.png")}
                  alt="当たり前だけど、大切なこと"
                  className="img80"
                />
              </div>
              <p className="button">
                <Link href="/class">クラス紹介 &gt;</Link>
              </p>
            </div>
            <div className="fR desktop_only">
              <img
                src={getAssetPath("/img/pc/photo01.png")}
                alt="当たり前だけど、大切なこと"
              />
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="gridContainer clearfix">
            <div className="fL desktop_only">
              <img
                src={getAssetPath("/img/pc/photo02.png")}
                alt="武道に触れよう"
              />
            </div>
            <div className="fR">
              <h2>武道に触れよう</h2>
              <p>
                健全な肉体は健全な精神を育みます。武道とは体をもって心理を悟り、
                <br />
                己を磨く人格形成の道です。空手道
                脩己会では毎回の稽古で自然に「理術」が
                <br />
                身に付くように、稽古内容が組み立てられています。
              </p>
              <div className="mobile_only txtC">
                <img
                  src={getAssetPath("/img/pc/photo02.png")}
                  alt="武道に触れよう"
                  className="img80"
                />
              </div>
              <div className="clearfix">
                <p className="button fL">
                  <Link href="/info">入会案内 &gt;</Link>
                </p>
                <p className="button fL">
                  <Link href="/schedule">スケジュール &gt;</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section3">
          <div className="gridContainer clearfix">
            <div className="fL">
              <h2>体力に自信がなくても大丈夫</h2>
              <p>
                稽古内容も無理な体力任せということはありません。
                <br />
                それぞれに合ったそれぞれレベルに合わせて稽古を行いますので、
                <br />
                ぜひ一度汗を流しにいらしてください。
              </p>
              <div className="mobile_only">
                <img
                  src={getAssetPath("/img/pc/photo03.png")}
                  alt="体力に自信がなくても大丈夫"
                  className="img80"
                />
              </div>
              <p className="button">
                <Link href="/qa">よくあるご質問 &gt;</Link>
              </p>
            </div>
            <div className="fL desktop_only">
              <img
                src={getAssetPath("/img/pc/photo03.png")}
                alt="体力に自信がなくても大丈夫"
              />
            </div>
          </div>
        </section>

        <section className="txtC section4">
          <div className="gridContainer clearfix">
            <img
              src={getAssetPath("/img/pc/content_logo.png")}
              alt="空手道 脩己会"
              className="img50"
            />
            <h2>空手道 脩己会へのアクセス</h2>
            <p>
              総本部道場 ： 〒113-0033 東京都文京区本郷三丁目43-4 シモムラビル2F
            </p>
            <div className="clearfix buttonarea">
              <p className="button fL">
                <Link href="/access">施設紹介・アクセス &gt;</Link>
              </p>
              <p className="button fL mrn">
                <Link href="/branch">支部一覧 &gt;</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
