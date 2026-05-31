import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders brand title", () => {
    render(<App />);

    expect(
      screen.getByText(/frosty bliss king icecream/i)
    ).toBeInTheDocument();
  });

  it("renders order button", () => {
    render(<App />);

    expect(
      screen.getByRole("button", {
        name: /order now/i,
      })
    ).toBeInTheDocument();
  });

  it("renders flavor section", () => {
    render(<App />);

    expect(
      screen.getByText(/popular flavors/i)
    ).toBeInTheDocument();
  });
});