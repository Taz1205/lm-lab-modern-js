// const greeting = require("./template_literals");
import { greeting } from "./template_literals";

test('it returns the string "Hello Fatima! It is now Wednesday"', () => {
  expect(greeting("Fatima", "Wednesday")).toBe("Hello Fatima! It is now Wednesday");
});
