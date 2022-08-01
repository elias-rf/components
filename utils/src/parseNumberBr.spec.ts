import { describe, expect, it } from "vitest";
import { parseNumberBr as numberParseBr } from "./parseNumberBr";

describe("numberParse", () => {
  it("string inteiro zero", () => {
    expect(numberParseBr("0")).toBe(0);
  });
  it("string inteiro positivo", () => {
    expect(numberParseBr("1")).toBe(1);
  });
  it("string inteiro negativo", () => {
    expect(numberParseBr("-1")).toBe(-1);
  });
  it("numero inteiro positivo", () => {
    expect(numberParseBr(1)).toBe(1);
  });
  it("numero inteiro negativo", () => {
    expect(numberParseBr(-1)).toBe(-1);
  });
  it("string float positivo", () => {
    expect(numberParseBr("1,12")).toBe(1.12);
  });
  it("string float negativo", () => {
    expect(numberParseBr("-1,13")).toBe(-1.13);
  });
  it("numero float positivo", () => {
    expect(numberParseBr(1.1)).toBe(1.1);
  });
  it("numero float negativo", () => {
    expect(numberParseBr(-1.1)).toBe(-1.1);
  });
  it("string formatado BR float positivo", () => {
    expect(numberParseBr("1.111,11")).toBe(1111.11);
  });
  it("string formatado BR float negativo", () => {
    expect(numberParseBr("-1.111,11")).toBe(-1111.11);
  });
});
