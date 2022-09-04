import { describe, expect, it } from "@jest/globals";
import { formatNumber } from "./format-number";

describe("numberFormat", () => {
  it(`deve retornar [-1234.1234, "-1.234,1234"]`, () => {
    expect(formatNumber(-1234.1234, 4)).toEqual("-1.234,1234");
  });
  it(`deve retornar "-1,0000" para -1.0`, () => {
    expect(formatNumber(-1, 4)).toEqual("-1,0000");
  });

  it(`deve retornar "-1" para -1.0`, () => {
    expect(formatNumber(-1, 0)).toEqual("-1");
  });
});
