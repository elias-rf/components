import { expect, it } from "vitest";
import { isString } from "./is-string";

it("deve ser string", () => {
  expect(isString(undefined)).toBeFalsy();
  expect(isString(null)).toBeFalsy();
  expect(isString("")).toBeTruthy();
  expect(isString(0)).toBeFalsy();
  expect(isString(true)).toBeFalsy();
  expect(isString(false)).toBeFalsy();
  expect(isString([])).toBeFalsy();
  expect(isString({})).toBeFalsy();
});
