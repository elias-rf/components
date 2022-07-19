import { describe, expect, test } from "vitest";
import isBoolean from "./is-boolean";

describe("isBoolean", () => {
  test("Array", () => {
    expect(isBoolean([])).toBe(false);
    expect(isBoolean([1, 2, 3])).toBe(false);
  });

  test("Object", () => {
    expect(isBoolean({})).toBe(false);
    expect(isBoolean({ a: 1 })).toBe(false);
  });

  test("String", () => {
    expect(isBoolean("")).toBe(false);
    expect(isBoolean(" ")).toBe(false);
  });

  test("Primitives empty", () => {
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(null)).toBe(false);
  });

  test("Primitives not empty", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(() => {})).toBe(false);
  });
});
