import formatDate from "../formatDate";
import { test, it, describe, expect } from "vitest";
describe("formatDateBr", () => {
  it("dever receber uma string", () => {
    expect(formatDate(new Date(2000, 1, 1), "DD/MM/YYYY")).toBe("01/02/2000");
  });
});
