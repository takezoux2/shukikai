import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { getAssetPath } from "@/lib/basePath";
import {
  getFullUrl,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
  SITE_URL,
} from "@/lib/jsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "文京区 空手 空手道脩己会 総本部道場",
    template: "%s｜空手道脩己会 総本部道場",
  },
  description:
    "文京区本郷の空手道場「空手道 脩己会（しゅうきかい）総本部道場」。本郷三丁目駅徒歩3分。3歳からのキッズ空手、一般クラス（武道空手・キッククラス）、健康空手など、初心者から本格的な武道まで丁寧に指導します。見学・無料体験随時受付中。",
  keywords: [
    "文京区 空手",
    "本郷三丁目 空手",
    "東京都 空手道場",
    "キッズ空手 文京区",
    "子供 習い事 空手",
    "文京区 キックボクシング",
    "脩己会",
    "脩己會",
    "修己会",
    "武道空手",
  ],
  authors: [{ name: "空手道 脩己会" }],
  creator: "空手道 脩己会",
  publisher: "空手道 脩己会",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "空手道 脩己会 総本部道場",
    title: "文京区 空手 空手道脩己会 総本部道場",
    description:
      "文京区本郷三丁目の空手道場「空手道 脩己会 総本部道場」。3歳からのキッズ空手、一般クラス、キックボクシング、健康空手を指導。無料体験受付中。",
    images: [
      {
        url: getFullUrl("/img/pc/photo01.png"),
        width: 1200,
        height: 630,
        alt: "空手道 脩己会 総本部道場",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "空手道 脩己会 総本部道場",
    description:
      "文京区本郷三丁目の空手道場「空手道 脩己会 総本部道場」。3歳からのキッズ空手、一般クラス、キックボクシング、健康空手を指導。無料体験受付中。",
    images: [getFullUrl("/img/pc/photo01.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  const rootSchemas = [getOrganizationJsonLd(), getWebSiteJsonLd()];

  return (
    <html lang="ja">
      <head>
        <JsonLd data={rootSchemas} />
      </head>
      <body id="top">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
