import { it, describe, expect } from "vitest";
import findDuplicates from "./find-duplicates";

describe("findDuplicate", () => {
  it("deve achar duplicatas", () => {
    const arry = [1, 2, 1, 3, 4, 3, 5, 3];
    const duplicateElements = findDuplicates(arry);
    expect(duplicateElements).toEqual([1, 3]);
  });
});
