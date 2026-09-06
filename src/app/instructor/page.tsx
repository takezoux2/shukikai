import type { Metadata } from "next";
import { getAssetPath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "師範紹介｜文京区 空手 空手道脩己会 総本部道場",
  description:
    "師範紹介のページです。総本部および各支部の師範・指導員をご紹介いたします。3歳からの礼儀作法、武道の心。空手道脩己会総本部道場。",
  keywords: [
    "文京区 空手",
    "東京都 空手",
    "文京区 キックボクシング",
    "キッズ空手",
    "脩己会",
    "修己会",
    "師範紹介",
    "指導員",
    "林正秀",
  ],
};

interface Instructor {
  id: string;
  name: string;
  furigana: string;
  title: string;
  bio: string[];
  image: string;
}

const instructors: Instructor[] = [
  {
    id: "hayashi",
    name: "林 正秀",
    furigana: "はやし まさひで",
    title: "空手道 脩己會 会長 / 総本部 首席師範（七段）",
    bio: [
      "幼少期より武道を志し、空手道一筋に研鑽を積む。",
      "全日本空手道選手権大会をはじめ数々の大会で実績を残し、後進の育成および武道空手の普及に尽力。",
      "「只管打拳」「良い習慣は才能を超える」を信条とし、礼節と強さを兼ね備えた心身の育成に情熱を注ぐ。",
    ],
    image: "/img/pc/instructor_01.jpg",
  },
  {
    id: "iwanaga",
    name: "岩永 強",
    furigana: "いわなが つよし",
    title: "城北支部・江東支部 責任者 / 師範（六段）",
    bio: [
      "総本部道場にて長年修行を積み、全日本選手権等で活躍。",
      "現在は南千住道場および東雲空手教室の指導を担当。",
      "キッズから一般・壮年部まで一人ひとりの体力・目標に応じた熱心かつ分かりやすい指導に定評がある。",
    ],
    image: "/img/pc/instructor_02.jpg",
  },
  {
    id: "ishiyama",
    name: "石山 昌憲",
    furigana: "いしやま まさのり",
    title: "関西地区本部 寛武館 館長 / 師範（六段）",
    bio: [
      "関西エリアにおける脩己會の普及と発展に大きく貢献。",
      "基本に忠実な突き・蹴りの技法と実践的な護身技術の指導を行う。",
      "礼節を重んじる温和な人柄と的確な指導で、門下生から絶大な信頼を寄せられている。",
    ],
    image: "/img/pc/instructor_03.jpg",
  },
  {
    id: "yasuda",
    name: "安田 晃樹",
    furigana: "やすだ こうき",
    title: "東北支部 青森安田道場 館長 / 師範（五段）",
    bio: [
      "東北地区の拠点として青森県八戸市を中心に指導を展開。",
      "青少年の健全育成と武士道精神の伝承に情熱を燃やし、地域に根差した道場運営を推進。",
      "活気あふれる稽古を通じて、強い心と体を育てる指導を実践している。",
    ],
    image: "/img/pc/instructor_04.jpg",
  },
];

export default function InstructorPage() {
  return (
    <div className="sub instructor">
      <div id="mv">
        <div className="gridContainer clearfix">
          <h2>師範紹介</h2>
        </div>
      </div>

      <div id="content">
        <section className="instructor_list">
          <div className="gridContainer">
            <div className="instructor_intro_text txtC mb40">
              <p className="bold larger">空手道 脩己會の指導陣</p>
              <p className="mt10" style={{ color: "#666", lineHeight: "1.8" }}>
                心技体を磨き、礼節を重んじる指導を徹底しております。
                <br />
                初心者から経験者、お子様から一般・壮年の方まで、丁寧にご指導いたします。
              </p>
            </div>

            <div className="instructor_container">
              {instructors.map((instructor, index) => {
                const isEven = index % 2 === 1; // 0-indexed: 0=1人目(左), 1=2人目(右), 2=3人目(左), 3=4人目(右)
                return (
                  <article
                    key={instructor.id}
                    id={instructor.id}
                    className={`instructor_item ${isEven ? "layout_reverse" : "layout_normal"}`}
                  >
                    <div className="instructor_thumbnail_wrap">
                      <div className="thumbnail_inner">
                        <img
                          src={getAssetPath(instructor.image)}
                          alt={`${instructor.name} 師範`}
                          className="instructor_thumbnail"
                        />
                      </div>
                    </div>

                    <div className="instructor_info">
                      <p className="instructor_title">{instructor.title}</p>
                      <h3 className="instructor_name">
                        <ruby>
                          {instructor.name}
                          <rt>{instructor.furigana}</rt>
                        </ruby>
                        <span className="shihan_label">師範</span>
                      </h3>
                      <div className="instructor_bio">
                        <h4>【略歴・指導方針】</h4>
                        {instructor.bio.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
