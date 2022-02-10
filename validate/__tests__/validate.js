const validate = require("..");
const isAlpha = require("../isAlpha.js");
const isUppercase = require("../isUppercase.js");

describe("validate", () => {
  test("validar 1 função", () => {
    expect(validate("a", [isAlpha])).toBe(null);
    expect(validate("2", "Campo", [isAlpha])).toBe("Campo não é alfabético");
    expect(validate(".", "Campo", [isAlpha])).toBe("Campo não é alfabético");
  });

  test("validar 2 funções", () => {
    expect(validate("A", [isAlpha, isUppercase])).toBe(null);
    expect(validate("b", "Campo", [isAlpha, isUppercase])).toBe(
      "Campo não é maiúsculo"
    );
  });
});
