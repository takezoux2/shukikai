import { BASE_PATH, getAssetPath } from "./basePath";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || `https://takezoux2.github.io${BASE_PATH}`;

export function getFullUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const assetPath = getAssetPath(path);
  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }
  return `https://takezoux2.github.io${assetPath}`;
}

export function getOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["MartialArtsSchool", "SportsClub", "Organization"],
    "@id": `${SITE_URL}#organization`,
    name: "空手道 脩己会 総本部道場",
    alternateName: [
      "空手道 脩己会",
      "脩己會",
      "修己会",
      "空手道脩己会",
      "脩己会総本部道場",
      "Shukikai Karate",
    ],
    url: SITE_URL,
    logo: getFullUrl("/img/pc/content_logo.png"),
    image: getFullUrl("/img/pc/photo01.png"),
    description:
      "文京区本郷の空手道場「空手道 脩己会（しゅうきかい）総本部道場」。3歳からのキッズ空手、一般クラスなど、初心者から本格的な武道まで丁寧に指導します。",
    telephone: "03-3813-7779",
    faxNumber: "03-3813-1610",
    email: "shuki-karate@outlook.jp",
    priceRange: "¥8,800 - ¥11,000",
    currenciesAccepted: "JPY",
    paymentAccepted: "銀行自動引き落とし, 現金",
    address: {
      "@type": "PostalAddress",
      postalCode: "113-0033",
      addressRegion: "東京都",
      addressLocality: "文京区",
      streetAddress: "本郷3-43-4 シモムラビル2F",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.7064706,
      longitude: 139.7640933,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Friday"],
        opens: "15:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "15:00",
        closes: "19:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "林 正秀",
      jobTitle: "会長 / 総本部 首席師範（七段）",
    },
    sameAs: [
      "https://www.facebook.com/shukikai.karate",
      "http://ameblo.jp/tokyu1979/",
      "http://ameblo.jp/shuki-ymca/",
    ],
  };
}

export function getWebSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "空手道 脩己会 総本部道場",
    url: SITE_URL,
    description:
      "文京区本郷の空手道場「空手道 脩己会（しゅうきかい）総本部道場」の公式サイト。3歳からのキッズ空手、一般クラス、キッククラスなど。",
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
    inLanguage: "ja",
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; path?: string }[],
): Record<string, unknown> {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: SITE_URL,
    },
    ...items.map((item, index) => {
      const position = index + 2;
      const element: Record<string, unknown> = {
        "@type": "ListItem",
        position,
        name: item.name,
      };
      if (item.path) {
        element.item = item.path.startsWith("http")
          ? item.path
          : getFullUrl(item.path);
      }
      return element;
    }),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function getFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "何歳から何歳まで入会できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3歳の幼児から承っております。また年齢の上限はありません。現在60代の方も稽古に励んでおります。サラリーマンやOL、経営者、芸術家、医者、弁護士など、様々な方が集まっています。",
        },
      },
      {
        "@type": "Question",
        name: "体力に自信がないのですが、大丈夫でしょうか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "本部道場では「楽しく継続する事が何よりも上達への近道」だと考えておりますので、稽古内容も無理な体力任せということはありません。それぞれに合ったレベルに合わせて稽古を行いますので、初心者や運動が苦手な方でも安心して始められます。",
        },
      },
      {
        "@type": "Question",
        name: "今から始めても黒帯を取れますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "何歳から始めたとしても遅いといったことはありません。道場では、全ての道場生に黒帯を取得して欲しいと願い、一人ひとりの進度に合わせて指導を行っています。",
        },
      },
      {
        "@type": "Question",
        name: "見学・体験入門は有料ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "無料でご利用いただけます。入会をご希望・ご検討の方なら誰でも体験・見学が可能です。お電話（03-3813-7779）またはWebサイトのお問い合わせフォームよりお申し込みいただけます。",
        },
      },
    ],
  };
}

export function getInstructorsJsonLd(): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/instructor#hayashi`,
      name: "林 正秀",
      alternateName: "はやし まさひで",
      jobTitle: "空手道 脩己會 会長 / 総本部 首席師範（七段）",
      description:
        "幼少期より武道を志し、空手道一筋に研鑽を積む。全日本空手道選手権大会をはじめ数々の大会で実績を残し、後進の育成および武道空手の普及に尽力。「只管打拳」「良い習慣は才能を超える」を信条とする。",
      image: getFullUrl("/img/pc/instructor_01.jpg"),
      worksFor: {
        "@id": `${SITE_URL}#organization`,
      },
      knowsAbout: ["空手道", "武道", "護身術", "青少年健全育成"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/instructor#iwanaga`,
      name: "岩永 強",
      alternateName: "いわなが つよし",
      jobTitle: "城北支部・江東支部 責任者 / 師範（六段）",
      description:
        "総本部道場にて長年修行を積み、全日本選手権等で活躍。現在は南千住道場および東雲空手教室の指導を担当。キッズから一般・壮年部まで一人ひとりの体力・目標に応じた熱心かつ分かりやすい指導に定評がある。",
      image: getFullUrl("/img/pc/instructor_02.jpg"),
      worksFor: {
        "@id": `${SITE_URL}#organization`,
      },
      knowsAbout: ["空手道", "キッズ空手", "キックボクシング"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/instructor#ishiyama`,
      name: "石山 昌憲",
      alternateName: "いしやま まさのり",
      jobTitle: "関西地区本部 寛武館 館長 / 師範（六段）",
      description:
        "関西エリアにおける脩己會の普及と発展に大きく貢献。基本に忠実な突き・蹴りの技法と実践的な護身技術の指導を行う。礼節を重んじる温和な人柄と的確な指導で、門下生から絶大な信頼を寄せられている。",
      image: getFullUrl("/img/pc/instructor_03.jpg"),
      worksFor: {
        "@id": `${SITE_URL}#organization`,
      },
      knowsAbout: ["空手道", "護身術", "形・組手"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/instructor#yasuda`,
      name: "安田 晃樹",
      alternateName: "やすだ こうき",
      jobTitle: "東北支部 青森安田道場 館長 / 師範（五段）",
      description:
        "東北地区の拠点として青森県八戸市を中心に指導を展開。青少年の健全育成と武士道精神の伝承に情熱を燃やし、地域に根差した道場運営を推進。活気あふれる稽古を通じて強い心と体を育てる。",
      image: getFullUrl("/img/pc/instructor_04.jpg"),
      worksFor: {
        "@id": `${SITE_URL}#organization`,
      },
      knowsAbout: ["空手道", "青少年健全育成", "武士道"],
    },
  ];
}

export function getBranchesJsonLd(): Record<string, unknown> {
  const branchList = [
    {
      name: "空手道脩己会 総本部道場",
      region: "関東地区",
      postalCode: "113-0033",
      streetAddress: "東京都文京区本郷3-43-4 シモムラビル2F",
      telephone: "03-3813-7779",
      leader: "林 正秀",
    },
    {
      name: "江東支部 東陽町道場",
      region: "関東地区",
      streetAddress: "東京都江東区東陽2-2-20（ゴールドジム内）",
      telephone: "03-3813-7779",
      leader: "林 正秀",
    },
    {
      name: "城北支部 南千住道場",
      region: "関東地区",
      streetAddress: "東京都荒川区南千住第2中学校 トレーニング室",
      telephone: "090-6168-5766",
      leader: "岩永 強",
    },
    {
      name: "江東支部 東雲空手教室",
      region: "関東地区",
      streetAddress: "東京都江東区東雲1-9-17 東雲キャナルコートCODAN 18号棟",
      telephone: "090-6168-5766",
      leader: "岩永 強",
    },
    {
      name: "大阪本部 寛武館",
      region: "関西地区",
      streetAddress: "大阪府大阪市生野区中川西1-14-10",
      leader: "石山 昌憲",
    },
    {
      name: "西宮尼崎西支部 錬武館",
      region: "関西地区",
      postalCode: "660-0076",
      streetAddress: "兵庫県尼崎市武庫元町2-15-15",
      telephone: "06-7506-6050",
      leader: "幡南 英二",
    },
    {
      name: "兵庫県本部 硯武館",
      region: "関西地区",
      streetAddress: "兵庫県尼崎市南塚口町8丁目7-25",
      url: "https://www.karate-kenbukan.com/",
      leader: "巴山 猛",
    },
    {
      name: "青森支部 安田道場",
      region: "東北地区",
      postalCode: "031-0072",
      streetAddress: "青森県八戸市城下2-23-10",
      telephone: "0178-71-2929",
      leader: "安田 晃樹",
    },
    {
      name: "鹿児島川内クラブ",
      region: "九州地区",
      leader: "市来 優明",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "空手道脩己会 支部一覧",
    itemListElement: branchList.map((branch, index) => {
      const locationData: Record<string, unknown> = {
        "@type": "SportsActivityLocation",
        name: branch.name,
        parentOrganization: {
          "@id": `${SITE_URL}#organization`,
        },
      };
      if (branch.streetAddress) {
        locationData.address = {
          "@type": "PostalAddress",
          postalCode: branch.postalCode,
          streetAddress: branch.streetAddress,
          addressCountry: "JP",
        };
      }
      if (branch.telephone) {
        locationData.telephone = branch.telephone;
      }
      if (branch.url) {
        locationData.url = branch.url;
      }
      return {
        "@type": "ListItem",
        position: index + 1,
        item: locationData,
      };
    }),
  };
}

export function getCoursesJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "空手道脩己会 クラス・コース一覧",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Course",
          name: "キッズ空手クラス（幼年・入門クラス / 少年クラス）",
          description:
            "3歳から小学生までを対象としたクラス。礼儀作法、挨拶、協調性、基本動作から形・組手まで、心身の成長と運動能力向上を丁寧に指導します。",
          provider: {
            "@id": `${SITE_URL}#organization`,
          },
          offers: {
            "@type": "Offer",
            price: "8800",
            priceCurrency: "JPY",
            category: "月会費",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Course",
          name: "中学生クラス",
          description:
            "中学生を対象としたクラス。基礎から本格的な技術・体力養成、精神修養まで幅広く指導します。",
          provider: {
            "@id": `${SITE_URL}#organization`,
          },
          offers: {
            "@type": "Offer",
            price: "8800",
            priceCurrency: "JPY",
            category: "月会費",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Course",
          name: "一般クラス（武道空手・キッククラス）",
          description:
            "高校生以上の男女を対象としたクラス。武道空手の基本動作・形・護身術から、ミットを中心としたキッククラスまで。体力に自信のない初心者から上級者まで参加可能。",
          provider: {
            "@id": `${SITE_URL}#organization`,
          },
          offers: {
            "@type": "Offer",
            price: "11000",
            priceCurrency: "JPY",
            category: "月会費",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Course",
          name: "健康空手クラス",
          description:
            "中学生以上を対象とした、健康維持・体力向上を目的とした空手クラス。無理なく身体を動かして健康的な身体づくりを目指します。",
          provider: {
            "@id": `${SITE_URL}#organization`,
          },
        },
      },
    ],
  };
}
