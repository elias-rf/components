import { isValid, zd, zod } from "./zod";

describe("zod validator", () => {
  it("string text", () => {
    expect(zod("a", zd.string())).toBe(undefined);
    expect(() => zod(1, zd.string())).toThrow("");
  });

  it("string boolean", () => {
    expect(isValid("a", zd.string())).toBe(true);
    expect(isValid(1, zd.string())).toBe(false);
  });

  it("string in", () => {
    expect(isValid("a", zd.enum(["a", "b"]))).toBe(true);
    expect(isValid("a", zd.enum(["c", "b"]))).toBe(false);
  });
});
