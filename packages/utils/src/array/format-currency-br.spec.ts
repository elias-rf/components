import { describe, expect, it } from "vitest";
import currencyToBr from "./format-currency-br";
const testes = [
  [-1.0, "-1,00"],
  [0, "0,00"],
  [1.0, "1,00"],
  [1.12345, "1,12"],
  [1234.12, "1.234,12"],
  [123456789.12, "123.456.789,12"],
];

describe("formatCurrencyBr", () => {
  testes.forEach((item) => {
    it(`deve retornar [-1234.1234, "-1.234,12"]`, () => {
      expect(currencyToBr(-1234.1234)).toEqual("-1.234,12");
    });
  });
});
