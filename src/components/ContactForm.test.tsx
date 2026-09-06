import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  it("renders form fields in initial state", () => {
    render(<ContactForm />);
    expect(screen.getAllByRole("textbox").length).toBeGreaterThanOrEqual(4);
    expect(screen.getByText("お名前")).toBeInTheDocument();
    expect(screen.getAllByText(/メールアドレス/).length).toBeGreaterThanOrEqual(
      1,
    );
    expect(screen.getByText("ご連絡先電話番号")).toBeInTheDocument();
  });

  it("shows validation error on empty submit", () => {
    render(<ContactForm />);
    const submitBtn = screen.getByAltText("確認画面へ");
    fireEvent.click(submitBtn);

    expect(screen.getByText("お名前を入力してください。")).toBeInTheDocument();
    expect(
      screen.getByText("メールアドレスを入力してください。"),
    ).toBeInTheDocument();
  });
});
