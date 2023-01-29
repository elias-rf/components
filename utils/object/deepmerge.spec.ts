import { describe, expect, it } from "vitest";
import { deepmerge } from "./deepmerge";

describe("mergeDeep", () => {
  it("can extend on 1 level", () => {
    const a = { hello: 1 };
    const b = { world: 2 };
    expect(deepmerge(a, b)).toEqual({
      hello: 1,
      world: 2,
    });
  });

  it("can extend on 2 levels", () => {
    const a = { person: { name: "John" } };
    const b = { person: { age: 30 } };
    expect(deepmerge(a, b)).toEqual({
      person: { name: "John", age: 30 },
    });
  });

  it("clone", () => {
    const a = {};
    const b = { person: { age: 30 } };
    const c = deepmerge(a, b);
    expect(c).toEqual({
      person: { age: 30 },
    });
    b.person.age = 20;

    expect(c.person.age !== b.person.age).toEqual(true);
  });
});
