import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App/>)
  // find an element with a role of a button and text 'change to blue'
  const colorButton = screen.getByRole('button', { name : 'Change to blue'});

  // expect the color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  // click the button
  fireEvent.click(colorButton);

  // expect background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});
