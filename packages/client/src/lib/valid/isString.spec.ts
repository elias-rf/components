import isString from "./isString";
import { it, test, describe, expect } from "vitest";

describe("string", () => {
  const msg = "Valor deve ser texto";
  it("true", () => {
    const req = isString();
    expect(req("")).toBe(null);
    expect(req("1")).toBe(null);
    expect(req("teste")).toBe(null);
  });
  it("false", () => {
    const req = isString();
    expect(req(null)).toBe(msg);
    expect(req(undefined)).toBe(msg);
    expect(req(1)).toBe(msg);
  });

  it("custom message", () => {
    const req = isString("texto");
    expect(req(null)).toBe("texto");
  });
});
