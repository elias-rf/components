import { deepEqual } from "./deep-equal";
import { expect, it, describe } from "vitest";

describe("deepEqual", () => {
  it("deve comparar objetos vazios", () => {
    expect(deepEqual({}, {})).toBe(true);
  });
  it("deve comparar objetos parciais", () => {
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });
  it("deve comparar objetos aninhados", () => {
    expect(deepEqual({ a: 1, c: { b: 2 } }, { a: 1, c: { b: 2 } })).toBe(true);
  });
  it("deve comparar objetos com arrays", () => {
    expect(deepEqual({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2] })).toBe(true);
  });
  it("deve comparar objetos com arrays diferentes", () => {
    expect(deepEqual({ a: 1, b: [1, 2] }, { a: 1, b: [2, 1] })).toBe(false);
  });
  it("deve comparar objetos aninhados parciais", () => {
    expect(deepEqual({ a: 1, c: { b: 2 } }, { a: 1, c: { b: 2, d: 3 } })).toBe(
      false
    );
  });
});
