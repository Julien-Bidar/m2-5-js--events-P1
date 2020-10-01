const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  expect(
    combineArrays(["crisp", "bacon"])
  ).toStrictEqual(["bacon", "crisp"]);
  expect(
    combineArrays(["crisp", "bacon", 9], ["zuchini", "apple"])
  ).toStrictEqual(undefined);
  expect(
    combineArrays(["crisp", "bacon", "apple"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
});
