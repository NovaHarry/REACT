import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { offerLabel } from "../components/RestaurantCard";
//EXPORTING mocks can be handled on its own . Any name can be used while importing
import RES_CARD_MOCKS from "../mocks/mockRestaurantCardProps.json";
import OFFER_RES_CARD_MOCKS from "../mocks/mockOfferRestaurantCard.json";

it("Should check whether RestaurantCard component receives props(data) properly", () => {
  //we need to pass mock data as props data
  render(<RestaurantCard resData={RES_CARD_MOCKS} />);

  //QUERYING
  const name = screen.getByText("Domino's Pizza");

  //ASSERTION
  expect(name).toBeInTheDocument();
});

it("Should check whether OfferRestaurantCard component receives props(data) properly", () => {
  //just like calling HOC in actual components we need to assign it to a same variable
  const OfferRestaurantCard = offerLabel(RestaurantCard);

  //we need to pass mock data as props data
  render(<OfferRestaurantCard resData={OFFER_RES_CARD_MOCKS} />);

  //   //QUERYING
  const offerCardName = screen.getByText("Burger King");

  //   //ASSERTION
  expect(offerCardName).toBeInTheDocument();
});
