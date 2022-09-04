import { describe, expect, it } from "@jest/globals";
import startOfDay from "./goDayStart";
describe("dateToday", () => {
  it("deve retornar dia inicial", () => {
    const dt = new Date("2000-1-1");
    expect(startOfDay(dt)).toEqual(new Date("2000-01-01"));
  });
});
