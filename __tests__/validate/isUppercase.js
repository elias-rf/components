const validate = require("../../src/validate");
const isUppercase = require("../../src/validate/isUppercase.js");

describe("validate isUppercase", () => {
  test("validar Alpha", () => {
    const teste = ["A", "AB", "AZ", "DE"];
    for (const vlr of teste) {
      expect(validate(vlr, [isUppercase])).toBe(null);
      expect(validate(vlr, "Campo", [isUppercase])).toBe(null);
    }
  });

  test("não validar isUppercase", () => {
    const teste = ["a ", "445 ", "a.b", "a-"];
    for (const vlr of teste) {
      expect(validate(vlr, [isUppercase])).toBe(`${vlr} não é maiúsculo`);
      expect(validate(vlr, "Campo", [isUppercase])).toBe(
        `Campo não é maiúsculo`
      );
    }
  });
});
