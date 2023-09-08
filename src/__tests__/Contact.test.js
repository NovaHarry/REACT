import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
//importing everything from "@testing-library/preset/jest-dom"
import "@testing-library/jest-dom";

// check whether the Contact component loaded or not
test("Should check whether the Contact component loaded or not", () => {
  //@babel/preset-react will help to convert JSX to html
  render(<Contact />);

  //QUERYING
  const heading = screen.getByRole("heading");

  //installing @testing-library/preset/jest-dom will let us use function like toBeinTheDocument

  //ASSERTION
  expect(heading).toBeInTheDocument();
});

//check whether Contact component has text submit
test("Should check whether Contact component has text submit", () => {
  render(<Contact />);

  //QUERYING
  const submitText = screen.getByText("Submit");

  //ASSERTION
  expect(submitText).toBeInTheDocument();
});

//check whether Contact component has input textbox

test("Should check whether Contact component has input textbox", () => {
  render(<Contact />);

  //QUERYING
  const textBoxes = screen.getAllByRole("textbox");

  //ASSERTION
  expect(textBoxes.length).toBe(2);
});
