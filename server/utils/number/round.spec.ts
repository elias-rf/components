import round from "./round";
import { test, it, describe, expect } from "vitest";
describe("Arredondamento de números", () => {
  it("deve arredondar retirando dígitos", () => {
    expect(round(1.234, 2)).toBe(1.23);
    expect(round(1.2345, 2)).toBe(1.23);
  });
  it("deve arredondar acrescentando dígitos", () => {
    expect(round(1.23, 4)).toBe(1.23);
    expect(round(1.234, 4)).toBe(1.234);
  });

  it("deve arredondar acrescentando dígitos", () => {
    expect(round(1.23, 4)).toBe(1.23);
    expect(round(1.234, 4)).toBe(1.234);
  });

  it("deve arredondar inteiros", () => {
    expect(round(1, 4)).toBe(1);
    expect(round(234, 4)).toBe(234);
  });
});
