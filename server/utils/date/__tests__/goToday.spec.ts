import dateToday from "../goToday";
import { test, it, describe, expect } from "vitest";
describe("dateToday", () => {
  it("", () => {
    expect(Object.prototype.toString.call(dateToday())).toBe("[object Date]");
  });
});
