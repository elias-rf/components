import { isValid, z, zod } from "./z";

describe("zod validator", () => {
  it.only("string text", () => {
    expect(zod("a", z.string())).toBe(undefined);
    expect(() => zod(1, z.string())).toThrow("");
  });

  it("string boolean", () => {
    expect(isValid("a", z.string())).toBe(true);
    expect(isValid(1, z.string())).toBe(false);
  });

  it("string in", () => {
    expect(isValid("a", z.enum(["a", "b"]))).toBe(true);
    expect(isValid("a", z.enum(["c", "b"]))).toBe(false);
  });
});
