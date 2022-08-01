import { describe, expect, it } from "vitest";
import { memoize } from "./memoize";

describe("memoize", () => {
  it("deve memorizar 1 parametro simples", () => {
    let counter = 0;
    function duplicate(num: number) {
      counter++;
      return num * 2;
    }
    const duplicateM = memoize(duplicate);
    expect(duplicateM(12)).toEqual(24);
    expect(duplicateM(12)).toEqual(24);
    expect(counter).toEqual(1);
  });

  it("deve memorizar 2 parametros simples", () => {
    let counter = 0;
    function duplicate(num1: number, num2: number) {
      counter++;
      return num1 * num2;
    }
    const duplicateM = memoize(duplicate);
    expect(duplicateM(3, 2)).toEqual(6);
    expect(duplicateM(3, 2)).toEqual(6);
    expect(counter).toEqual(1);
  });
});
