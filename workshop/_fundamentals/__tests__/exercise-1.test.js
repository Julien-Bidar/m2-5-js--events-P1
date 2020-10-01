const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  expect(letterCount(["", "bacon"])).toBe(5);
  expect(letterCount(["bacon"])).toBe(5);
  expect(letterCount([])).toBe(0);
  // add more tests here...
});
