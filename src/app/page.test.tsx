import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home Page", () => {
  it("renders heading and instructions", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /To get started, edit the/i }),
    ).toBeInTheDocument();
  });

  it("renders Next.js logo image", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });
});
