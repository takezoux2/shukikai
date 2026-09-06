import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getAssetPath } from "@/lib/basePath";
import { getBreadcrumbJsonLd, getOrganizationJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "施設紹介・アクセス",
  description:
    "空手道脩己会総本部道場（文京区本郷）の施設案内とアクセス方法。本郷三丁目駅徒歩3分、湯島駅徒歩5分。清潔感ある広々とした道場、男女更衣室、サンドバッグ3機、巻き藁、本格ウェイト器具完備。",
  keywords: [
    "文京区 空手 アクセス",
    "本郷三丁目 空手",
    "湯島 空手",
    "脩己会 アクセス",
    "空手道場 設備",
    "更衣室完備 空手",
  ],
  alternates: {
    canonical: "/access",
  },
  openGraph: {
    title: "施設紹介・アクセス｜空手道脩己会 総本部道場",
    description:
      "本郷三丁目駅徒歩3分。男女更衣室、サンドバッグ、巻き藁、ウェイト器具完備の空手道場。施設写真と詳しいアクセス情報。",
  },
};

export default function AccessPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "施設紹介・アクセス", path: "/access" },
  ]);
  const orgSchema = getOrganizationJsonLd();

  return (
    <div className="sub access">
      <JsonLd data={[breadcrumb, orgSchema]} />
      <div id="mv">
        <div className="gridContainer clearfix">
          <h2>施設紹介・アクセス</h2>
        </div>
      </div>

      <div id="content">
        <section>
          <div className="gridContainer">
            <h3>施設紹介</h3>
            <div className="clearfix">
              <div className="fL">
                <img
                  src={getAssetPath("/img/pc/access_photo01.png")}
                  alt="清潔感のある広々とした道場"
                />
                <p>清潔感のある広々とした道場</p>
              </div>
              <div className="fR">
                <img
                  src={getAssetPath("/img/pc/access_photo02.png")}
                  alt="男女更衣室完備と設備も充実"
                />
                <p>男女更衣室完備と設備も充実</p>
              </div>
            </div>
            <div className="clearfix">
              <div className="fL">
                <img
                  src={getAssetPath("/img/pc/access_photo03.png")}
                  alt="サンドバック3機と巻き藁"
                />
                <p>サンドバック3機と巻き藁</p>
              </div>
              <div className="fR">
                <img
                  src={getAssetPath("/img/pc/access_photo04.png")}
                  alt="本格仕様のウェイト器具も完備"
                />
                <p>本格仕様のウェイト器具も完備</p>
              </div>
            </div>
            <div className="clearfix mbn">
              <div className="fL">
                <img
                  src={getAssetPath("/img/pc/access_photo05.png")}
                  alt="道場ビル外観（２F）"
                />
                <p>道場ビル外観（２F）</p>
              </div>
              <div className="fR">
                <img
                  src={getAssetPath("/img/pc/access_photo06.png")}
                  alt="ビル入り口から２Fへ"
                />
                <p>ビル入り口から２Fへ</p>
              </div>
            </div>
          </div>
        </section>

        <section className="map">
          <div className="gridContainer clearfix">
            <h3>アクセス</h3>
            <img src={getAssetPath("/img/pc/map.png")} alt="地図" />

            <dl>
              <dt className="bt">所在地</dt>
              <dd className="bt">
                113-0033東京都文京区本郷3－43－4 シモムラビル2F{" "}
                <span className="small">
                  &gt;
                  <a
                    href="https://www.google.co.jp/maps/place/%E3%80%92113-0033+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%87%E4%BA%AC%E5%8C%BA%E6%9C%AC%E9%83%B7%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%94%EF%BC%93%E2%88%92%EF%BC%94/@35.7064706,139.7640933,20z/data=!4m2!3m1!1s0x60188c231715f79f:0xbcefee67ad728bc5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Maps
                  </a>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>TEL</dt>
              <dd>03-3813-7779</dd>
            </dl>
            <dl>
              <dt>FAX</dt>
              <dd>03-3813-1610</dd>
            </dl>
            <dl>
              <dt>最寄駅</dt>
              <dd>
                丸ノ内線・大江戸線「本郷三丁目駅」下車 徒歩3分
                <br />
                千代田線「湯島駅」下車 徒歩5分
              </dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
