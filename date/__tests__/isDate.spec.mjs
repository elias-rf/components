import isDate from "../isDate";
import { test, it, describe, expect } from "vitest";
describe("isDate", () => {
  test("deve receber uma data", () => {
    expect(isDate(new Date())).toBeTruthy();
  });
});
