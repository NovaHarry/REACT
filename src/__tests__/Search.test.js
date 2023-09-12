import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

//SIMULATING MOCK FETCH FUNCTION

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// //SINCE WE ARE DOING ASYNC OPERATION IN BODY COMPONENT WE NEED TO USE ASYNC HERE AS WELL AND ACT FUNCTION
// it("Should search for burger text input", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );

//   //CARDS BEFORE SEARCH

//   const cardsBeforeSearch = screen.getAllByTestId("resCard");

//   //ASSERTION

//   expect(cardsBeforeSearch.length).toBe(20);

//   //HERE WE JUST NEED TO SIMULATE AN EVENT THAT WILL SEARCH OUR RESULT ONCE ONCLICK

//   // 1.GETTING OUR TEXTBOX/INPUT FIELD SO WE CAN MIMIC GETTING IT'S VALUE

//   const searchInput = screen.getByTestId("searchInput");

//   // 2.SIMULATING THE ONCHANGE EVENT SO WE CAN GET THE INPUT FIELD VALUE

//   fireEvent.change(searchInput, { target: { value: "burger" } });

//   // 3.GETTING SEARCH BUTTON SO WE CAN TRIGGER ONCLICK
//   const searchBtn = screen.getByRole("button", { name: "Search" });

//   //4. SIMULATING THE ONCLICK EVENT SO WE CAN GET THE RESULT
//   fireEvent.click(searchBtn);

//   //5. GETTING ALL THE CARDS SO WE CAN USE IT'S LENGTH FOR ASSERTION

//   const cardsAfterSearch = screen.getAllByTestId("resCard");

//   //ASSERTION

//   expect(cardsAfterSearch.length).toBe(2);
// });

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(topRatedBtn);

  const topRatedResData = screen.getAllByTestId("resCard");

  //THE MOCK_DATA and the actual Fetched Data may be vary,

  expect(topRatedResData.length).toBe(5);
});
