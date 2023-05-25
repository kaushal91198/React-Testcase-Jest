import { render, screen } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom";

test("Home render successfully", () => {
  render(<Home />);
  const textElement = screen.getByText("Home");
  // const textElement = screen.getByText(/home/i)// this will ignore the case
  expect(textElement).toBeInTheDocument();
});

//TDD
//Test driven development is a software development process where you write tests before writing the software code
//Once the tests have been written, yopu then write the code to ensure the tests the pass
// 1. Create the tests that verify the functionality of a specific feature
// 2. write the software code that will run the tests successfully whe re-executed
// 3. Refactor the code for optimization while ensuring the tests continue to pass

// also called red green testing as all tests go from a red failed state to a green passed state

test("Home render successfully with dynamic name", () => {
  render(<Home name="hello" />);
  const textElement = screen.getByText("hello");
  // const textElement = screen.getByText(/home/i)// this will ignore the case
  expect(textElement).toBeInTheDocument();
});
