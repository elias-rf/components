import { expect, it } from "@jest/globals";
import { isObject } from "./is-object";

it("deve ser object", () => {
  expect(isObject({})).toBe(true);
  expect(isObject("A")).toBe(false);
  expect(isObject(5)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(() => {})).toBe(false);
});
