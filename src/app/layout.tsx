import type { Metadata, Viewport } from "next";
import { getAssetPath } from "@/lib/basePath";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "文京区 空手 空手道脩己会 総本部道場",
  description:
    "文京区本郷の空手道場「空手道 脩己会（しゅうきかい）総本部道場」。3歳からのキッズ空手、一般クラス、レディスキック、ヨガなど、初心者から本格的な武道まで丁寧に指導します。",
  keywords: [
    "文京区 空手",
    "東京都 空手",
    "文京区 キックボクシング",
    "キッズ空手",
    "脩己会",
    "修己会",
    "本郷三丁目",
  ],
  icons: {
    icon: getAssetPath("/favicon.ico"),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body id="top">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
