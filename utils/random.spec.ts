import { describe, expect, it } from "vitest";
import { Random } from "./random";

describe("random", () => {
  it("should return a random number", () => {
    const rnd = Random(1);
    expect(rnd.rand()).toBe(0.4170219984371215);
  });

  it("should return a random range", () => {
    const rnd = Random(1);
    const rsp = [0, 0, 0, 0];
    for (let i = 0; i < 100000; i++) {
      rsp[rnd.range(0, 3)]++;
    }
    expect(rsp).toEqual([25144, 24871, 25130, 24855]);
  });

  it("should return a random weighted", () => {
    const rnd = Random(1);
    const rsp = [0, 0, 0, 0];
    for (let i = 0; i < 100000; i++) {
      rsp[rnd.weighted([1, 2, 3, 4])]++;
    }
    expect(rsp).toEqual([10095, 20090, 30030, 39785]);
  });
});
