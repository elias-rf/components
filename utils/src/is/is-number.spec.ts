import { describe, expect, it } from "vitest";
import isNumber from "./is-number";

describe("isNumber", () => {
  it("{}", () => {
    expect(isNumber({})).toBe(false);
  });
  it("string", () => {
    expect(isNumber("A")).toBe(false);
  });
  it("number", () => {
    expect(isNumber(5)).toBe(true);
  });
  it("undefined ", () => {
    expect(isNumber(undefined)).toBe(false);
  });
  it("null", () => {
    expect(isNumber(null)).toBe(false);
  });
  it("function", () => {
    expect(isNumber(() => {})).toBe(false);
  });
  it("NaN", () => {
    expect(isNumber(Number.NaN)).toBe(false);
  });
});
