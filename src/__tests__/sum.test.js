import { sum } from "../components/sum";

test("Should return sum of two numbers", () => {
  const result = sum(2, 5);

  //ASSERTION
  expect(result).toBe(7);
});
