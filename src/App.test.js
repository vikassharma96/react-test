import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  // find an element with a role of a button and text 'change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click the button
  fireEvent.click(colorButton);

  // expect background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial condition", () => {
  render(<App />);
  // check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  // check that button is disabled after checkbox is checked
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
