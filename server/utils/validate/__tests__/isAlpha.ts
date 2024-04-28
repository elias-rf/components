const validate = require("..");
const isAlpha = require("../isAlpha.js");

describe("validate isAlpha", () => {
  test("validar Alpha", () => {
    const teste = ["a", "abc", "az", "ayk"];
    for (const vlr of teste) {
      expect(validate(vlr, [isAlpha])).toBe(null);
      expect(validate(vlr, "Campo", [isAlpha])).toBe(null);
    }
  });

  test("não validar Alpha", () => {
    const teste = ["a ", "445", "a.b", "a-"];
    for (const vlr of teste) {
      expect(validate(vlr, [isAlpha])).toBe(`${vlr} não é alfabético`);
      expect(validate(vlr, "Campo", [isAlpha])).toBe(`Campo não é alfabético`);
    }
  });
});
