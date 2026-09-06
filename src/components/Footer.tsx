"use client";

import Link from "next/link";
import RolloverImage from "./RolloverImage";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="gridContainer pagetop">
        <div className="footerTop">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="ページトップへ"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img src="/img/pc/page_top.png" alt="ページトップへ" />
          </button>
        </div>
      </div>

      <div className="footer_class">
        <div className="gridContainer clearfix">
          <ul>
            <li>
              <Link href="/class#kids">
                <RolloverImage
                  src="/img/pc/class_1_off.png"
                  alt="キッズ空手クラス"
                />
                <p>
                  <span>キッズ空手クラス</span>
                </p>
              </Link>
            </li>
            <li>
              <Link href="/class#standard">
                <RolloverImage src="/img/pc/class_2_off.png" alt="一般クラス" />
                <p>
                  <span>一般クラス</span>
                </p>
              </Link>
            </li>
            <li>
              <Link href="/class#ladies">
                <RolloverImage
                  src="/img/pc/class_3_off.png"
                  alt="レディスキッククラス"
                />
                <p>
                  <span>レディスキッククラス</span>
                </p>
              </Link>
            </li>
            <li>
              <Link href="/class#yoga">
                <RolloverImage src="/img/pc/class_4_off.png" alt="ヨガクラス" />
                <p>
                  <span>ヨガクラス</span>
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer_content">
        <div className="gridContainer clearfix">
          <div className="fL">
            <Link href="/contact">
              <RolloverImage
                src="/img/pc/footer_banner_off.png"
                alt="新規入会キャンペーン"
                className="desktop_only"
              />
              <RolloverImage
                src="/img/pc/index_banner_off.png"
                alt="新規入会キャンペーン"
                className="mobile_only"
              />
            </Link>
            <div className="clearfix button_area">
              <div className="fL">
                <a
                  href="http://ameblo.jp/tokyu1979/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RolloverImage
                    src="/img/pc/footer_blog_off.png"
                    alt="本部道場ブログ"
                    className="img80"
                  />
                </a>
                <br />
                <a
                  href="http://s.ameblo.jp/bunkyo-yoga/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RolloverImage
                    src="/img/pc/footer_yogablog_off.png"
                    alt="ヨガブログ"
                    className="img80 desktop_only"
                    style={{ marginTop: 15 }}
                  />
                  <RolloverImage
                    src="/img/pc/footer_yogablog_off.png"
                    alt="ヨガブログ"
                    className="img80 mobile_only"
                    style={{ display: "block", margin: "0 auto 20px auto" }}
                  />
                </a>
              </div>
              <div className="fR">
                <a
                  href="http://ameblo.jp/shuki-ymca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RolloverImage
                    src="/img/pc/footer_ymcablog_off.png"
                    alt="YMCA道場ブログ"
                    className="img80"
                  />
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="footer_nav clearfix desktop_only">
              <ul className="clearfix">
                <li>
                  <Link href="/">トップページ</Link>
                </li>
                <li>
                  <Link href="/message">会長挨拶</Link>
                </li>
                <li>
                  <Link href="/class">クラス紹介</Link>
                </li>
                <li>
                  <Link href="/info">入会案内</Link>
                </li>
                <li className="bdr">
                  <Link href="/access">施設紹介・アクセス</Link>
                </li>
              </ul>
              <ul className="clearfix">
                <li>
                  <Link href="/schedule">スケジュール</Link>
                </li>
                <li>
                  <Link href="/branch">支部一覧</Link>
                </li>
                <li>
                  <Link href="/qa">よくあるご質問</Link>
                </li>
                <li>
                  <Link href="/contact">お問い合わせ</Link>
                </li>
                <li>
                  <Link href="/privacy">プライバシーポリシー</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="fR">
            <div
              className="fb-like-box clearfix"
              style={{
                background: "#fff",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <iframe
                title="脩己会 Facebook Page"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshukikai.karate&tabs=timeline&width=280&height=420&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="280"
                height="420"
                style={{ border: "none", overflow: "hidden" }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="footer_nav clearfix mobile_only">
          <div className="txtC">
            <img src="/img/pc/footer_logo.png" alt="空手道 脩己會" />
          </div>
          <ul className="clearfix">
            <li>
              <Link href="/">トップページ</Link>
            </li>
            <li>
              <Link href="/message">会長挨拶</Link>
            </li>
            <li>
              <Link href="/class">クラス紹介</Link>
            </li>
            <li>
              <Link href="/info">入会案内</Link>
            </li>
            <li className="bdr">
              <Link href="/access">施設紹介・アクセス</Link>
            </li>
            <li>
              <Link href="/schedule">スケジュール</Link>
            </li>
            <li>
              <Link href="/branch">支部一覧</Link>
            </li>
            <li>
              <Link href="/qa">よくあるご質問</Link>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
            </li>
            <li>
              <Link href="/privacy">プライバシーポリシー</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy">
        <p>Copyright &copy; Shukikai All rights reserved</p>
      </div>
    </footer>
  );
}
