import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateCarForm from "./CreateCarForm";

test("renders Form", () => {
  render(<CreateCarForm cars={[]} handleClose={() => {}} setCars={() => {}} />);
  const inputElementBrand = screen.getByPlaceholderText(/Enter Brand/i);
  const inputElementPlate = screen.getByPlaceholderText(/Enter license plate/i);

  expect(inputElementBrand).toBeInTheDocument();
  expect(inputElementPlate).toBeInTheDocument();
});

test("button is disabled", () => {
  render(<CreateCarForm cars={[]} handleClose={() => {}} setCars={() => {}} />);
  const button = screen.getByText(/OK/i);

  expect(button).toBeDisabled();
});

test("button is enabled", () => {
  render(<CreateCarForm cars={[]} handleClose={() => {}} setCars={() => {}} />);
  const inputElementPlate = screen.getByPlaceholderText(/Enter license plate/i);
  userEvent.type(inputElementPlate, "B:BW 123");

  const inputElementBrand = screen.getByPlaceholderText(/Enter Brand/i);
  userEvent.type(inputElementBrand, "FlixCar");
  const button = screen.getByText(/OK/i);

  expect(button).toBeEnabled();
  expect(inputElementPlate).toHaveValue("B:BW 123");
  expect(inputElementBrand).toHaveValue("FlixCar");
});
