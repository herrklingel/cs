import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders inital setup", () => {
  render(<App />);
  const linkElement = screen.getByText(/inital setup/i);
  expect(linkElement).toBeInTheDocument();
});
