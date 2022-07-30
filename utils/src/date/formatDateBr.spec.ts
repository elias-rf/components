import { describe, expect, it } from "vitest";
import formatDateBr from "./formatDateBr";
describe("formatDateBr", () => {
  it("dever receber uma string", () => {
    expect(formatDateBr(new Date(2000, 1, 1))).toBe("01/02/2000");
  });
});