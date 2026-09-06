import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AccessPage from "./access/page";
import BranchPage from "./branch/page";
import ClassPage from "./class/page";
import ContactPage from "./contact/page";
import InfoPage from "./info/page";
import InstructorPage from "./instructor/page";
import MessagePage from "./message/page";
import PrivacyPage from "./privacy/page";
import QaPage from "./qa/page";
import SchedulePage from "./schedule/page";

describe("All Subpages", () => {
  it("renders MessagePage", () => {
    render(<MessagePage />);
    expect(
      screen.getByRole("heading", { name: "会長挨拶" }),
    ).toBeInTheDocument();
  });

  it("renders InstructorPage", () => {
    render(<InstructorPage />);
    expect(
      screen.getByRole("heading", { name: "師範紹介" }),
    ).toBeInTheDocument();
    expect(screen.getByText("林 正秀")).toBeInTheDocument();
    expect(screen.getByText("岩永 強")).toBeInTheDocument();
  });

  it("renders ClassPage", () => {
    render(<ClassPage />);
    expect(
      screen.getByRole("heading", { name: "クラス紹介" }),
    ).toBeInTheDocument();
  });

  it("renders InfoPage", () => {
    render(<InfoPage />);
    expect(
      screen.getByRole("heading", { name: "入会案内" }),
    ).toBeInTheDocument();
    const contactLinks = screen.getAllByRole("link", {
      name: /見学、入会申し込みは問い合わせから/,
    });
    expect(contactLinks).toHaveLength(2);
    contactLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/contact");
    });
  });

  it("renders AccessPage", () => {
    render(<AccessPage />);
    expect(
      screen.getByRole("heading", { name: "施設紹介・アクセス" }),
    ).toBeInTheDocument();
  });

  it("renders SchedulePage", () => {
    render(<SchedulePage />);
    expect(
      screen.getByRole("heading", { name: "スケジュール" }),
    ).toBeInTheDocument();
  });

  it("renders BranchPage", () => {
    render(<BranchPage />);
    expect(
      screen.getByRole("heading", { name: "支部一覧" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /総本部道場/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /大阪本部/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /青森支部/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /鹿児島川内クラブ/ }),
    ).toBeInTheDocument();
    // websiteUrlが設定されている支部のWebページリンクが存在することを検証
    const webLink = screen.getByRole("link", { name: "Webページ" });
    expect(webLink).toBeInTheDocument();
    expect(webLink).toHaveAttribute("href", "https://www.karate-kenbukan.com/");
  });

  it("renders QaPage", () => {
    render(<QaPage />);
    expect(
      screen.getByRole("heading", { name: "よくあるご質問" }),
    ).toBeInTheDocument();
  });

  it("renders ContactPage", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { name: "お問い合わせ" }),
    ).toBeInTheDocument();
  });

  it("renders PrivacyPage", () => {
    render(<PrivacyPage />);
    expect(
      screen.getByRole("heading", { name: "プライバシーポリシー" }),
    ).toBeInTheDocument();
  });
});
