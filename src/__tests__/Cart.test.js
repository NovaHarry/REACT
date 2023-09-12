import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Menu from "../components/Menu";
import MOCK_MENU_DATA from "../mocks/mockMenuData.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "../components/Cart";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU_DATA),
  })
);

describe;
it("Should check the flow of adding items to the Cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
          <Menu />
          <Header />
        </Provider>
      </BrowserRouter>
    )
  );

  //GET THE ACCORDION HEADING
  const accordionHeader = screen.getByText("Hot & Spicy Chicken");

  //ONCLICK OF ACCORDION HEADER "Hot & Spicy Chicken"
  fireEvent.click(accordionHeader);

  // AFTER ONCLICK GET THE FOOD CATEGORY INSIDE THAT ACCORDION
  const foodCategory = screen.getAllByTestId("foodCategory");

  //CHECKING IF THE foodCategory rendered after ONCLICK
  expect(foodCategory.length).toBe(12);

  // Get the add button
  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  //CLICK ADD + BTN
  fireEvent.click(addBtns[0]);

  //CHECK OUR CART VALUE IN THE HEADER

  const cartValueFirstClick = screen.getByText("Cart : 1");

  expect(cartValueFirstClick).toBeInTheDocument();

  //CLICK ADD + BTN AGAIN
  fireEvent.click(addBtns[1]);

  //CHECK OUR CART VALUE IN THE HEADER

  const cartValueSecondClick = screen.getByText("Cart : 2");

  expect(cartValueSecondClick).toBeInTheDocument();
});

it("Should check if the Clear Cart Button is working", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <Cart />
      </Provider>
    )
  );

  //CHECKING OF THE ITEMS ARE ADDED

  const addedCartItems = screen.getAllByTestId("addedCartItems");

  expect(addedCartItems.length).toBe(2);

  //CHECK IF THE CLEAR CART BUTTON IS WORKING

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartBtn);

  expect(
    screen.getByText("Cart is empty 😕. Add some delicious foods 🤤.")
  ).toBeInTheDocument();
});
