import { describe, expect, test } from "vitest";
import isDate from "./isDate";
describe("isDate", () => {
  test("deve receber uma data", () => {
    expect(isDate(new Date())).toBeTruthy();
  });
});
