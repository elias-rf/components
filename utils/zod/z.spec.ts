import { isValid, z, zod } from "./z";

describe("validator", () => {
  test("string text", () => {
    expect(zod("a", z.string())).toBe(undefined);
    expect(() =>
      zod(
        1,
        z.string({
          invalid_type_error: "deve ser string",
        })
      )
    ).toThrow("deve ser string");
  });

  test("string boolean", () => {
    expect(isValid("a", z.string())).toBe(true);
    expect(isValid(1, z.string())).toBe(false);
  });

  test("string in", () => {
    expect(isValid("a", z.enum(["a", "b"]))).toBe(true);
    expect(isValid("a", z.enum(["c", "b"]))).toBe(false);
  });
});
