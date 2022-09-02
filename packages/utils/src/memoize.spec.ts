import { describe, expect, it } from "vitest";
import { memoize } from "./memoize";

describe("memoize", () => {
  it("deve memorizar 1 parametro async", async () => {
    let counter = 0;
    async function duplicateA(num: number) {
      counter++;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num * 2);
        }, 1000);
      });
    }
    const duplicateM = memoize(duplicateA);
    expect(await duplicateM(10)).toEqual(20);
    expect(await duplicateM(10)).toEqual(20);
    expect(counter).toEqual(1);
  });

  it("deve memorizar 1 parametro simples", () => {
    let counter = 0;
    function duplicateS(num: number) {
      counter++;
      return num * 2;
    }
    const duplicateM = memoize(duplicateS);
    expect(duplicateM(12)).toEqual(24);
    expect(duplicateM(12)).toEqual(24);
    expect(counter).toEqual(1);
  });
  it("deve memorizar 1 parametro complexo", () => {
    let counter = 0;
    function complex(arg: any) {
      counter++;
      return arg;
    }
    const complexM = memoize(complex);

    expect(complexM([{ a: 1, b: 2 }])).toEqual([{ a: 1, b: 2 }]);
    expect(complexM([{ b: 2, a: 1 }])).toEqual([{ a: 1, b: 2 }]);
    expect(counter).toEqual(1);
  });

  it("deve memorizar 2 parametros simples", () => {
    let counter = 0;
    const duplicate = (num1: number, num2: number) => {
      counter++;
      return num1 * num2;
    };
    const duplicateM = memoize(duplicate);
    expect(duplicateM(3, 2)).toEqual(6);
    expect(duplicateM(3, 2)).toEqual(6);
    expect(counter).toEqual(1);
  });
});
