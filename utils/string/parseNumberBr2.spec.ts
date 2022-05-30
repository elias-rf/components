import parseNumberBr from "./parseNumberBr";
import { it, describe, expect } from "vitest";

describe("parseNumberBr2", () => {
  it(`deve retornar -1234.1234`, () => {
    expect(parseNumberBr("-1.234,1234")).toEqual(-1234.1234);
  });

  it(`deve retornar 0`, () => {
    expect(parseNumberBr("0,0000")).toEqual(0);
  });

  it(`deve retornar -1`, () => {
    expect(parseNumberBr("-1,0000")).toEqual(-1);
  });

  it(`deve retornar 1`, () => {
    expect(parseNumberBr("1,0000")).toEqual(1);
  });

  it(`deve retornar  1.1235`, () => {
    expect(parseNumberBr("1,1235")).toEqual(1.1235);
  });

  it(`deve retornar 1234.12`, () => {
    expect(parseNumberBr("1.234,1200")).toEqual(1234.12);
  });

  it(`deve retornar 123456789.12`, () => {
    expect(parseNumberBr("123.456.789,1200")).toEqual(123456789.12);
  });
});
