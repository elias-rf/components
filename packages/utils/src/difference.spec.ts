import { describe, expect, it } from "vitest";
import { difference } from "./difference";

describe("difference", () => {
  it("deve receber arrays iguais", () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });
  it("deve receber 1o array maior", () => {
    expect(difference([1, 2, 3, 4], [1, 2, 3])).toEqual([4]);
  });
  it("deve receber 2o array maior", () => {
    expect(difference([1, 2, 3], [1, 2, 3, 4])).toEqual([]);
  });
  it("deve receber 2o array maior com elemento faltando", () => {
    expect(difference([1, 2, 3], [1, 3, 4])).toEqual([2]);
  });
});
