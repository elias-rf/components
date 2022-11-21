import { describe, expect, it } from "vitest";
import { getType } from "./get_type";

describe("getType", () => {
  it("should return the type of the object", () => {
    expect(getType({})).toBe("object");
    expect(getType({ a: 1 })).toBe("object");
  });
  it("should return the type of the array", () => {
    expect(getType([])).toBe("array");
    expect(getType([1, 2, 3])).toBe("array");
  });
  it("should return the type of the number", () => {
    expect(getType(1)).toBe("number");
    expect(getType(1.1)).toBe("number");
  });
  it("should return the type of the boolean", () => {
    expect(getType(true)).toBe("boolean");
    expect(getType(false)).toBe("boolean");
  });
  it("should return the type of the date", () => {
    expect(getType(new Date())).toBe("date");
  });
  it("should return the type of the map", () => {
    expect(getType(new Map())).toBe("map");
  });
  it("should return the type of the set", () => {
    expect(getType(new Set())).toBe("set");
  });
  it("should return the type of the null", () => {
    expect(getType(null)).toBe("null");
  });
  it("should return the type of the regexp", () => {
    expect(getType(/123/g)).toBe("regexp");
  });
  it("should return the type of the function", () => {
    expect(getType(() => null)).toBe("function");
    expect(
      getType(function () {
        return null;
      })
    ).toBe("function");
  });
  it("should return the type of the undefined", () => {
    expect(getType(undefined)).toBe("undefined");
  });
  it("should return the type of the string", () => {
    expect(getType("")).toBe("string");
    expect(getType("a")).toBe("string");
    expect(getType("123")).toBe("string");
  });
});
