import { expect, it } from "@jest/globals";
import { isDefined } from "./is-defined";

it("deve ser defined", () => {
  expect(isDefined(undefined)).toBeFalsy();
  expect(isDefined(null)).toBeFalsy();
  expect(isDefined("")).toBeTruthy();
  expect(isDefined(0)).toBeTruthy();
  expect(isDefined(true)).toBeTruthy();
  expect(isDefined(false)).toBeTruthy();
  expect(isDefined([])).toBeTruthy();
  expect(isDefined({})).toBeTruthy();
});
