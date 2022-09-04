import { describe, expect, it } from "@jest/globals";
import dateToday from "./goToday";
describe("dateToday", () => {
  it("deve retornar uma data", () => {
    expect(Object.prototype.toString.call(dateToday())).toBe("[object Date]");
  });
});
