// @ts-nocheck
import { zsFilters } from "./zs-filters";

describe("zFilters", () => {
  it("pass", () => {
    expect(zsFilters.safeParse([]).success).toEqual(true);
    expect(
      zsFilters.safeParse([
        { id: "flt1", value: "v1" },
        { id: "flt2", value: "v2" },
      ]).success
    ).toEqual(true);
    expect(
      zsFilters.safeParse([{ id: "flt", value: "v1", test: 1 }]).success
    ).toEqual(true);
  });
  it("not pass", () => {
    expect(zsFilters.safeParse({ id: "flt", value: "1" }).success).toBe(false);
    expect(zsFilters.safeParse([{ id: "flt", value: 1 }]).success).toBe(false);
    expect(zsFilters.safeParse([{ id: 1, value: "1" }]).success).toBe(false);
  });
});
