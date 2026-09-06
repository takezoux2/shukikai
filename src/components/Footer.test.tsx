import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders floating 入会案内 button linking to /info", () => {
    render(<Footer />);
    const joinButtons = screen.getAllByRole("link", { name: /入会案内/ });
    expect(joinButtons.length).toBeGreaterThanOrEqual(2);

    const floatingBtn = joinButtons.find((btn) =>
      btn.classList.contains("btnJoinFloating"),
    );
    expect(floatingBtn).toBeDefined();
    expect(floatingBtn).toHaveAttribute("href", "/info");

    expect(screen.queryByAltText("ページトップへ")).toBeNull();
  });
});
