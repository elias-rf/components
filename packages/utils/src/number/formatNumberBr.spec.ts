import { describe, expect, it } from "vitest";
import { formatNumberBr } from "./formatNumberBr";

const testes = [
  [-1.0, "-1,00"],
  [0, "0,00"],
  [1.0, "1,00"],
  [1.12345, "1,12"],
  [1234.12, "1.234,12"],
  [123456789.12, "123.456.789,12"],
  [null, ""],
  [undefined, ""],
  ["", ""],
];

describe("numberFormat", () => {
  it(`deve retornar [-1234.1234, "-1.234,12"]`, () => {
    expect(formatNumberBr(-1234.1234)).toEqual("-1.234,12");
  });
});
