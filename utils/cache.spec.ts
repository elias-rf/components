import { describe, expect, it } from "vitest";
import { cache } from "./cache";

describe("cache", () => {
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
    expect(
      await cache.fetch({ key: "dA", callback: duplicateA, args: [10] })
    ).toEqual(20);
    expect(
      await cache.fetch({ key: "dA", callback: duplicateA, args: [10] })
    ).toEqual(20);
    expect(counter).toEqual(1);
  });

  it("deve memorizar várias chamadas async", async () => {
    let counter = 0;
    async function duplicateA(num: number) {
      counter++;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num * 2);
        }, 100);
      });
    }
    expect(
      await Promise.all([
        cache.fetch({ key: "dA1", callback: duplicateA, args: [10] }),
        cache.fetch({ key: "dA1", callback: duplicateA, args: [10] }),
        cache.fetch({ key: "dA1", callback: duplicateA, args: [10] }),
        cache.fetch({ key: "dA1", callback: duplicateA, args: [10] }),
        cache.fetch({ key: "dA1", callback: duplicateA, args: [10] }),
        cache.fetch({ key: "dA1", callback: duplicateA, args: [10] }),
        cache.fetch({ key: "dA1", callback: duplicateA, args: [10] }),
        cache.fetch({ key: "dA1", callback: duplicateA, args: [10] }),
      ])
    ).toEqual([20, 20, 20, 20, 20, 20, 20, 20]);

    expect(counter).toEqual(1);
  });

  it("deve memorizar 1 parametro simples", () => {
    let counter = 0;
    function duplicateS(num: number) {
      counter++;
      return num * 2;
    }
    expect(
      cache.fetch({ key: "dS", callback: duplicateS, args: [12] })
    ).toEqual(24);
    expect(
      cache.fetch({ key: "dS", callback: duplicateS, args: [12] })
    ).toEqual(24);
    expect(counter).toEqual(1);
  });
  it("deve memorizar 1 parametro complexo", () => {
    let counter = 0;
    function complex(arg: any) {
      counter++;
      return arg;
    }

    expect(
      cache.fetch({ key: "c", callback: complex, args: [{ a: 1, b: 2 }] })
    ).toEqual({ a: 1, b: 2 });
    expect(
      cache.fetch({ key: "c", callback: complex, args: [{ a: 1, b: 2 }] })
    ).toEqual({ a: 1, b: 2 });
    expect(counter).toEqual(1);
  });

  it("deve memorizar 2 parametros simples", () => {
    let counter = 0;
    const duplicate = (num1: number, num2: number) => {
      counter++;
      return num1 * num2;
    };
    expect(
      cache.fetch({ key: "dM", callback: duplicate, args: [3, 2] })
    ).toEqual(6);
    expect(
      cache.fetch({ key: "dM", callback: duplicate, args: [3, 2] })
    ).toEqual(6);
    expect(counter).toEqual(1);
  });

  it("deve limpar nomeado", () => {
    let counter = 0;
    const duplicate = (num1: number) => {
      counter++;
      return num1 * 2;
    };
    cache.clear();
    expect(Array.from(cache.lru.keys())).toEqual([]);
    expect(cache.size()).toBe(0);

    expect(cache.fetch({ key: "a", callback: duplicate, args: [1] })).toEqual(
      2
    );
    expect(cache.fetch({ key: "a", callback: duplicate, args: [1] })).toEqual(
      2
    );
    expect(cache.fetch({ key: "a", callback: duplicate, args: [2] })).toEqual(
      4
    );
    expect(cache.fetch({ key: "a", callback: duplicate, args: [3] })).toEqual(
      6
    );
    expect(cache.fetch({ key: "b", callback: duplicate, args: [4] })).toEqual(
      8
    );
    expect(Array.from(cache.lru.keys())).toEqual([
      "a[1]",
      "a[2]",
      "a[3]",
      "b[4]",
    ]);
    expect(counter).toEqual(4);
    cache.clear({ key: "a", args: [3] });
    expect(Array.from(cache.lru.keys())).toEqual(["a[1]", "a[2]", "b[4]"]);
    cache.clear({ key: "a" });
    expect(Array.from(cache.lru.keys())).toEqual(["b[4]"]);
  });
});
