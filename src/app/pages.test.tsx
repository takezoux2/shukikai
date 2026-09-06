import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AccessPage from "./access/page";
import BranchPage from "./branch/page";
import ClassPage from "./class/page";
import ContactPage from "./contact/page";
import InfoPage from "./info/page";
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
