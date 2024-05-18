const { calculator } = require("../src/calculator");

test("Soma", () => {
  expect(calculator.sum(100, 2)).toBe(102);
});

test("Subtração", () => {
  expect(calculator.subt(500, 5)).toBe(495);
});

test("Multipliçaõ", () => {
  expect(calculator.mult(500, 15)).toBe(7500);
});

test("Divisão", () => {
  expect(calculator.div(500, 5)).toBe(100);
});
