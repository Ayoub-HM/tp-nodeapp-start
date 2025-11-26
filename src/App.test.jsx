import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("an always true assertion", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("App", () => {
  it("shows the GitLab logo", () => {
    render(<App />);
    const logo = screen.getByAltText("Gitlab logo");
    expect(logo).toBeInTheDocument();
  });
});
