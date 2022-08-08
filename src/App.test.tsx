import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Headline", () => {
  render(<App />);
  const linkElement = screen.getByText(/Fleet/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Add button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add Car/i);
  expect(buttonElement).toBeInTheDocument();
});
