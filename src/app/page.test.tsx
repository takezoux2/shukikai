import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders main heading and key sections", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { name: "脩己会の最新情報をお届け" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "当たり前だけど、大切なこと" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "武道に触れよう" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "体力に自信がなくても大丈夫" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "空手道 脩己会へのアクセス" }),
    ).toBeInTheDocument();
  });

  it("renders links to inner pages", () => {
    render(<HomePage />);
    expect(screen.getByRole("link", { name: /クラス紹介/ })).toHaveAttribute(
      "href",
      "/class",
    );
    expect(screen.getByRole("link", { name: /入会案内/ })).toHaveAttribute(
      "href",
      "/info",
    );
    expect(screen.getByRole("link", { name: /スケジュール/ })).toHaveAttribute(
      "href",
      "/schedule",
    );
    expect(
      screen.getByRole("link", { name: /よくあるご質問/ }),
    ).toHaveAttribute("href", "/qa");
    expect(
      screen.getByRole("link", { name: /施設紹介・アクセス/ }),
    ).toHaveAttribute("href", "/access");
    expect(screen.getByRole("link", { name: /支部一覧/ })).toHaveAttribute(
      "href",
      "/branch",
    );
  });
});
