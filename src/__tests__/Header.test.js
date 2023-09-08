import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// it or test - BOTH WORKS SAME WAY
it("Should check whether Header component has login button", () => {
  //Since header component uses redux in cart and Link in all the lists ,need to wrap in <Provider> and <BrowserRouter>

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //QUERYING
  //just checking if there is a button
  const loginButton = screen.getByRole("button");

  //ASSERTION
  expect(loginButton).toBeInTheDocument();
});

it("Should check specifically whether Header component has login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //QUERYING
  //CHECKING A SPECIFIC BUTTON
  const specificLoginButton = screen.getByRole("button", { name: "Login" });

  //ASSERTION
  expect(specificLoginButton).toBeInTheDocument();
});

//TESTING EVENT ACTIONS (Login button event to Logout button)
it("Should check specifically whether Header component has login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //QUERYING
  //CHECKING A SPECIFIC BUTTON
  const specificLoginButton = screen.getByRole("button", { name: "Login" });

  //Testing Login Button's Event - Simulating a click
  fireEvent.click(specificLoginButton);

  // After click event button text will change to Logout, so we can test whether click event works or not like this
  const specificLogoutButton = screen.getByRole("button", { name: "Logout" });

  //ASSERTION
  expect(specificLogoutButton).toBeInTheDocument();
});
