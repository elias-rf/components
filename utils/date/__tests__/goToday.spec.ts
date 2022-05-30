import dateToday from "../goToday";
import { test, it, describe, expect } from "vitest";
describe("dateToday", () => {
  it("deve retornar uma data", () => {
    expect(Object.prototype.toString.call(dateToday())).toBe("[object Date]");
  });
});
