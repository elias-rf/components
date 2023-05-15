// @ts-nocheck
import { setProp } from "./set-prop";

describe("setProp", () => {
  it("should set the value at the given path in the object", () => {
    const obj = { a: { b: { c: 1 } } };
    setProp(obj, "a.b.c", 2);
    expect(obj).toEqual({ a: { b: { c: 2 } } });
  });

  it("should create missing objects along the path", () => {
    const obj = { a: {} };
    setProp(obj, "a.b.c", 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });
  });

  it("should handle empty path", () => {
    const obj = {};
    setProp(obj, "", 1);
    expect(obj).toEqual({ "": 1 });
  });

  it("should handle empty object", () => {
    const obj = {};
    setProp(obj, "a.b.c", 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });
  });
});
