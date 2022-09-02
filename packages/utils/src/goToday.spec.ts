import { describe, expect, it } from "vitest";
import dateToday from "./goToday";
describe("dateToday", () => {
  it("deve retornar uma data", () => {
    expect(Object.prototype.toString.call(dateToday())).toBe("[object Date]");
  });
});
