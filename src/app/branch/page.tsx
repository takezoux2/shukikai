import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { getBranchesJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "支部一覧",
  description:
    "空手道脩己会の全国道場・支部一覧。関東地区（文京区総本部道場、東陽町道場、南千住道場、東雲空手教室）、関西地区（大阪本部寛武館、錬武館、硯武館）、東北地区（青森安田道場）、九州地区（鹿児島川内クラブ）の所在地・連絡先・稽古日程を掲載しています。",
  keywords: [
    "空手 支部",
    "文京区 空手 本部道場",
    "東陽町 空手",
    "南千住 空手",
    "東雲 空手",
    "大阪 空手 寛武館",
    "尼崎 空手 錬武館",
    "八戸 空手 安田道場",
    "脩己会 支部",
  ],
  alternates: {
    canonical: "/branch",
  },
  openGraph: {
    title: "支部一覧｜空手道脩己会 総本部道場",
    description:
      "関東・関西・東北・九州に広がる空手道脩己会の全国道場・支部一覧。各拠点の所在地・電話番号・稽古日程。",
  },
};

interface Branch {
  id: string;
  region: "関東地区" | "関西地区" | "東北地区" | "九州地区";
  name: string;
  leader?: string;
  postalCode?: string;
  address?: string | string[];
  tel?: string;
  phone?: string;
  schedules?: string[];
  notes?: string;
  websiteUrl?: string;
  url?: string;
}

const branches: Branch[] = [
  // 関東地区
  {
    id: "sohonbu",
    region: "関東地区",
    name: "総本部道場",
    leader: "会長　林 正秀",
    postalCode: "113-0033",
    address: "東京都文京区本郷3-43-4シモムラビル２F",
    tel: "TEL 03－3813－7779　FAX 03－3813－1610",
  },
  {
    id: "toyocho",
    region: "関東地区",
    name: "江東支部　東陽町道場",
    leader: "責任者　林 正秀",
    address: "東京都江東区東陽2－2－20（ゴールドジム内）",
    tel: "TEL 03-3813-7779（本部道場）",
    schedules: [
      "練習日：毎週　火曜・木曜・土曜",
      "幼年部　火・木　15:30-16:30",
      "少年部　火・木　17:00-18:00",
      "幼少合同　土　10:00-11:00",
      "親子カラテ　土　11:30-12:30",
      "一般部　火・木　19:00-20:30　土　13:00-14:30",
    ],
    notes: "＊詳細はお問い合わせ",
  },
  {
    id: "minamisenju",
    region: "関東地区",
    name: "城北支部　南千住道場",
    leader: "責任者　岩永　強",
    address: "荒川区南千住第２中学校　トレーニング室",
    schedules: ["練習日：毎週　火曜・水曜　18:30-19:30"],
    tel: "090-6168-5766",
  },
  {
    id: "shinonome",
    region: "関東地区",
    name: "江東支部　東雲空手教室",
    leader: "責任者　岩永　強",
    address: ["東京都江東区東雲1-9-17", "東雲キャナルコートCODAN　18号棟"],
    schedules: ["練習日：毎週 水曜 16:00-17:00　毎週 金曜 16:30-17:30"],
    tel: "090-6168-5766",
  },

  // 関西地区
  {
    id: "kanbukan",
    region: "関西地区",
    name: "大阪本部　寛武館",
    leader: "館長　石山 昌憲",
    address: "大阪市大阪府生野区中川西1－14－10",
  },
  {
    id: "renbukan",
    region: "関西地区",
    name: "西宮尼崎西支部　錬武館",
    leader: "館長　幡南　英二",
    postalCode: "660-0076",
    address: "兵庫県尼崎市武庫元町2-15-15",
    tel: "TEL 06－7506－6050",
  },
  {
    id: "seishinkan",
    region: "関西地区",
    name: "兵庫県本部　硯武館",
    leader: "館長　巴山　猛",
    address: "尼崎市南塚口町8丁目7−25",
    websiteUrl: "https://www.karate-kenbukan.com/",
  },

  // 東北地区
  {
    id: "yasuda",
    region: "東北地区",
    name: "青森支部　安田道場",
    leader: "館長　安田　晃樹",
    postalCode: "031-0072",
    address: "青森県八戸市城下2－23－10",
    tel: "TEL 0178－71－2929",
  },

  // 九州地区
  {
    id: "sendai-club",
    region: "九州地区",
    name: "鹿児島川内クラブ",
    leader: "責任者　市来優明",
  },
];

function BranchBox({ branch }: { branch: Branch }) {
  const websiteUrl = branch.websiteUrl || branch.url;
  const tel = branch.tel || branch.phone;

  return (
    <div className="txtBox">
      <h4>{branch.name}</h4>
      {branch.leader && <p>{branch.leader}</p>}
      {branch.postalCode && (
        <p>
          〒{branch.postalCode}
          {branch.address && typeof branch.address === "string" && (
            <>
              <br />
              {branch.address}
            </>
          )}
        </p>
      )}
      {!branch.postalCode &&
        branch.address &&
        typeof branch.address === "string" && <p>{branch.address}</p>}
      {Array.isArray(branch.address) &&
        branch.address.map((addr) => <p key={addr}>{addr}</p>)}
      {tel && <p>{tel}</p>}
      {branch.schedules?.map((schedule) => (
        <p key={schedule}>{schedule}</p>
      ))}
      {branch.notes && <p>{branch.notes}</p>}
      {websiteUrl && (
        <p>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            Webページ
          </a>
        </p>
      )}
    </div>
  );
}

export default function BranchPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "支部一覧", path: "/branch" },
  ]);
  const branchSchemas = getBranchesJsonLd();

  const kantoBranches = branches.filter((b) => b.region === "関東地区");
  const kantoMid = Math.ceil(kantoBranches.length / 2);
  const kantoLeft = kantoBranches.slice(0, kantoMid);
  const kantoRight = kantoBranches.slice(kantoMid);

  const kansaiBranches = branches.filter((b) => b.region === "関西地区");
  const kansaiMid = Math.ceil(kansaiBranches.length / 2);
  const kansaiLeft = kansaiBranches.slice(0, kansaiMid);
  const kansaiRight = kansaiBranches.slice(kansaiMid);

  const tohokuBranches = branches.filter((b) => b.region === "東北地区");
  const kyushuBranches = branches.filter((b) => b.region === "九州地区");

  return (
    <div className="sub branch">
      <JsonLd data={[breadcrumb, branchSchemas]} />
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
                {kantoLeft.map((branch) => (
                  <BranchBox key={branch.id} branch={branch} />
                ))}
              </div>
              <div className="fR">
                {kantoRight.map((branch) => (
                  <BranchBox key={branch.id} branch={branch} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="gridContainer">
            <h3>関西地区</h3>
            <div className="clearfix">
              <div className="fL">
                {kansaiLeft.map((branch) => (
                  <BranchBox key={branch.id} branch={branch} />
                ))}
              </div>
              <div className="fR">
                {kansaiRight.map((branch) => (
                  <BranchBox key={branch.id} branch={branch} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="gridContainer">
            <div className="clearfix">
              <div className="fL">
                <h3>東北地区</h3>
                {tohokuBranches.map((branch) => (
                  <BranchBox key={branch.id} branch={branch} />
                ))}
              </div>

              <div className="fR">
                <h3>九州地区</h3>
                {kyushuBranches.map((branch) => (
                  <BranchBox key={branch.id} branch={branch} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
