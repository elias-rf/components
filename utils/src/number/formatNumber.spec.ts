import { describe, expect, it } from "vitest";
import { formatNumber } from "./formatNumber";

const testes = [
  ,
  [-1.0, "-1,0000"],
  [0, "0,0000"],
  [1.0, "1,0000"],
  [1.12345, "1,1235"],
  [1234.12, "1.234,1200"],
  [123456789.12, "123.456.789,1200"],
];

describe("numberFormat", () => {
  testes.forEach((item) => {
    it(`deve retornar [-1234.1234, "-1.234,1234"]`, () => {
      expect(formatNumber("-1234.1234", 4)).toEqual("-1.234,1234");
    });
  });
});
