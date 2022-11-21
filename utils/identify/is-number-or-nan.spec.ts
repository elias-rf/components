import { expect, it } from "vitest";
import { isNumberOrNaN } from "./is-number-or-nan";

it("deve ser number", () => {
  expect(isNumberOrNaN(undefined)).toBeFalsy();
  expect(isNumberOrNaN(null)).toBeFalsy();
  expect(isNumberOrNaN("")).toBeFalsy();
  expect(isNumberOrNaN(0)).toBeTruthy();
  expect(isNumberOrNaN(true)).toBeFalsy();
  expect(isNumberOrNaN(false)).toBeFalsy();
  expect(isNumberOrNaN([])).toBeFalsy();
  expect(isNumberOrNaN({})).toBeFalsy();
  expect(isNumberOrNaN(() => {})).toBeFalsy();
  expect(isNumberOrNaN(Number.NaN)).toBeFalsy();
});
