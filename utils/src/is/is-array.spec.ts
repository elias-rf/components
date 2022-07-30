import { describe, expect, test } from "vitest";
import isArray from "./is-array";

describe("isArray", () => {
  test("isArray recognizes Array objects", () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
    expect(isArray([])).toBeTruthy();
    expect(isArray(new Array(1, 2, 3))).toBeTruthy();
  });

  test("isArray rejects non-Array objects", () => {
    expect(isArray()).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray(123)).toBeFalsy();
    expect(isArray("[1,2,3]")).toBeFalsy();
    expect(isArray(new Date())).toBeFalsy();
    expect(isArray({ a: 1, b: 2 })).toBeFalsy();
  });
});