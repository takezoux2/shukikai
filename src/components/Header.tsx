"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getAssetPath } from "@/lib/basePath";
import RolloverImage from "./RolloverImage";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <div className="gridContainer clearfix">
        <div id="header_inner" className="clearfix">
          <div className="fL">
            <Link href="/">
              <img
                src={getAssetPath("/img/pc/header_logo.png")}
                alt="空手道 脩己會"
              />
            </Link>
          </div>
          <div className="fR">
            <div className="fL">
              <ul>
                <li>
                  <Link
                    href="/branch"
                    className={isActive("/branch") ? "active" : ""}
                  >
                    支部一覧
                  </Link>
                </li>
                <li>
                  <Link href="/qa" className={isActive("/qa") ? "active" : ""}>
                    よくあるご質問
                  </Link>
                </li>
              </ul>
            </div>
            <div className="fR">
              <Link href="/contact">
                <RolloverImage
                  src="/img/pc/header_contact_off.png"
                  alt="お問い合わせ"
                  active={isActive("/contact")}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        <div className="accordion mobile_only">
          <div className="item">
            <button
              type="button"
              className="accordion-control"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="メニュー開閉"
              aria-expanded={isMenuOpen}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img
                src={getAssetPath(
                  isMenuOpen ? "/img/sp/menu_on.png" : "/img/sp/menu_off.png",
                )}
                alt="MENU"
              />
            </button>
            {isMenuOpen && (
              <div className="accordion-panel" style={{ display: "block" }}>
                <ul className="clearfix">
                  <li>
                    <Link href="/" onClick={closeMenu}>
                      トップページ
                    </Link>
                  </li>
                  <li>
                    <Link href="/message" onClick={closeMenu}>
                      会長挨拶
                    </Link>
                  </li>
                  <li>
                    <Link href="/instructor" onClick={closeMenu}>
                      師範紹介
                    </Link>
                  </li>
                  <li>
                    <Link href="/class" onClick={closeMenu}>
                      クラス紹介
                    </Link>
                  </li>
                  <li>
                    <Link href="/info" onClick={closeMenu}>
                      入会案内
                    </Link>
                  </li>
                  <li className="small">
                    <Link href="/access" onClick={closeMenu}>
                      施設紹介・アクセス
                    </Link>
                  </li>
                  <li>
                    <Link href="/schedule" onClick={closeMenu}>
                      スケジュール
                    </Link>
                  </li>
                  <li className="square">
                    <Link href="/branch" onClick={closeMenu}>
                      支部一覧
                    </Link>
                  </li>
                  <li className="square small">
                    <Link href="/qa" onClick={closeMenu}>
                      よくあるご質問
                    </Link>
                  </li>
                </ul>
                <div className="txtC mb30">
                  <Link href="/contact" onClick={closeMenu}>
                    <img
                      src={getAssetPath("/img/sp/contact.png")}
                      alt="お問い合わせ"
                      className="img80"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Main Navigation */}
      <nav id="desktop">
        <div className="gridContainer">
          <ul className="clearfix">
            <li>
              <Link href="/" className={isActive("/") ? "active" : ""}>
                トップページ
              </Link>
            </li>
            <li>
              <Link
                href="/message"
                className={isActive("/message") ? "active" : ""}
              >
                会長挨拶
              </Link>
            </li>
            <li>
              <Link
                href="/instructor"
                className={isActive("/instructor") ? "active" : ""}
              >
                師範紹介
              </Link>
            </li>
            <li>
              <Link
                href="/class"
                className={isActive("/class") ? "active" : ""}
              >
                クラス紹介
              </Link>
            </li>
            <li>
              <Link href="/info" className={isActive("/info") ? "active" : ""}>
                入会案内
              </Link>
            </li>
            <li>
              <Link
                href="/access"
                className={isActive("/access") ? "active" : ""}
              >
                施設紹介・アクセス
              </Link>
            </li>
            <li>
              <Link
                href="/schedule"
                className={isActive("/schedule") ? "active" : ""}
              >
                スケジュール
              </Link>
            </li>
          </ul>

          <div id="sns_button">
            <a
              href="https://www.facebook.com/shukikai.karate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RolloverImage
                src="/img/pc/header_fb_off.png"
                alt="facebook"
                className="mr15"
              />
            </a>
            <a
              href="http://ameblo.jp/tokyu1979/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RolloverImage
                src="/img/pc/header_blog_off.png"
                alt="脩己會ブログ"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
