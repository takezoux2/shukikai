import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("renders header logo and desktop navigation", () => {
    render(<Header />);
    expect(screen.getByAltText("空手道 脩己會")).toBeInTheDocument();
    expect(screen.getAllByText("トップページ").length).toBeGreaterThanOrEqual(
      1,
    );
    expect(screen.getAllByText("会長挨拶").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("クラス紹介").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("入会案内").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("施設紹介・アクセス").length,
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("スケジュール").length).toBeGreaterThanOrEqual(
      1,
    );
  });
});
