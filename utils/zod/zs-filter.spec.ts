// @ts-nocheck
import { zsFilter } from "./zs-filter";

describe("zFilter", () => {
  it("pass", () => {
    expect(zsFilter.safeParse({}).success).toEqual(true);
    expect(zsFilter.safeParse({ flt1: "v1", flt2: "v2" }).success).toEqual(
      true
    );
    expect(zsFilter.safeParse({ flt: "v1" }).success).toEqual(true);
  });
  it("not pass", () => {
    expect(zsFilter.safeParse([]).success).toBe(false);
    expect(zsFilter.safeParse({ flt: 1 }).success).toBe(false);
  });
});
