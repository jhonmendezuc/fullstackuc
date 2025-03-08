const suma = require("./suma");

test("suma 2 + 3 debe dar 5", () => {
  expect(suma(2, 3)).toBe(5);
});

test("suma 1 + 1 debe dar 2", () => {
  expect(suma(1, 1)).toBe(2);
});
