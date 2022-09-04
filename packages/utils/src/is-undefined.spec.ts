import { expect, it } from "@jest/globals";
import { isUndefined } from "./is-undefined";

it("deve ser undefined", () => {
  expect(isUndefined(undefined)).toBeTruthy();
  expect(isUndefined(null)).toBeFalsy();
  expect(isUndefined("")).toBeFalsy();
  expect(isUndefined(0)).toBeFalsy();
  expect(isUndefined(true)).toBeFalsy();
  expect(isUndefined(false)).toBeFalsy();
  expect(isUndefined([])).toBeFalsy();
  expect(isUndefined({})).toBeFalsy();
});
