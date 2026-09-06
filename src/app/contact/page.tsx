import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "お問い合わせ・見学体験予約",
  description:
    "空手道脩己会総本部道場へのお問い合わせ、見学・無料体験レッスンのご予約フォーム。3歳からのキッズ空手、一般クラス（武道空手・キッククラス）、健康空手などお気軽にご相談ください。お電話（03-3813-7779）でも受付中。",
  keywords: [
    "空手 見学 予約",
    "空手 無料体験 文京区",
    "空手 お問い合わせ",
    "キッズ空手 体験申込",
    "脩己会 問い合わせ",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "お問い合わせ・見学体験予約｜空手道脩己会 総本部道場",
    description:
      "見学・無料体験レッスン随時受付中。空手道脩己会総本部道場へのお問い合わせフォーム。",
  },
};

export default function ContactPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "お問い合わせ", path: "/contact" },
  ]);

  return (
    <div className="sub contact">
      <JsonLd data={breadcrumb} />
      <div id="mv">
        <div className="gridContainer clearfix">
          <h2>お問い合わせ</h2>
        </div>
      </div>

      <div id="content">
        <section>
          <div className="gridContainer clearfix">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
