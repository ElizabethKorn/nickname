import Validator from "../nickname";

test("should return false", () => {
  const validator = new Validator();
  expect(validator.validateUserName("validName_123")).toBe(false);
});

test("should return true", () => {
  const validator = new Validator();
  expect(validator.validateUserName("valid_123-Name")).toBe(true);
});

test("should return false", () => {
  const validator = new Validator();
  expect(validator.validateUserName("324valid_123-Name")).toBe(false);
});

test("should return false", () => {
  const validator = new Validator();
  expect(validator.validateUserName("324АБра_123-Name")).toBe(false);
});

test("should return true", () => {
  const validator = new Validator();
  expect(validator.validateUserName("name")).toBe(true);
});
