import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./HelloWorld";

test("🚬", () => {
  render(<HelloWorld />)
})

test("It says hello world somewhere on the screen", () => {
  render(<HelloWorld />)

  screen.logTestingPlaygroundURL();

  screen.getByText(/hello world/i)

  expect(screen.getByText('hello world', {exact: false})).toBeVisible()
  expect(screen.getByText(/hello world/i)).toBeVisible()
})
