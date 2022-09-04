import { expect, it } from "@jest/globals";
import { isNumber } from "./is-number";

it("deve ser number", () => {
  expect(isNumber(undefined)).toBeFalsy();
  expect(isNumber(null)).toBeFalsy();
  expect(isNumber("")).toBeFalsy();
  expect(isNumber(0)).toBeTruthy();
  expect(isNumber(true)).toBeFalsy();
  expect(isNumber(false)).toBeFalsy();
  expect(isNumber([])).toBeFalsy();
  expect(isNumber({})).toBeFalsy();
  expect(isNumber(() => {})).toBeFalsy();
  expect(isNumber(Number.NaN)).toBeFalsy();
});
