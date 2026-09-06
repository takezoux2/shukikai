import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ｜文京区 空手 空手道脩己会 総本部道場",
  description:
    "お問い合わせのページです。3歳からの礼儀作法、武道の心。空手道脩己会総本部道場。",
  keywords: [
    "文京区 空手",
    "東京都 空手",
    "文京区 キックボクシング",
    "キッズ空手",
    "脩己会",
    "修己会",
    "お問い合わせ",
  ],
};

export default function ContactPage() {
  return (
    <div className="sub contact">
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
