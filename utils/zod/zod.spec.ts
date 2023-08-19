import { zd, zod } from "./zod";
import { expect, it, describe } from "vitest";

describe("zod validator", () => {
  it("string text", () => {
    expect(zod("a", zd.string())).toBe(undefined);
    expect(() => zod(1, zd.string())).toThrow("");
  });
});
