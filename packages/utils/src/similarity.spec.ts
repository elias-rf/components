import { describe, expect, it } from "@jest/globals";
import { similarity } from "./similarity";

describe("similarity", () => {
  it("similaridade alta", () => {
    expect(
      similarity("macaco", [
        "macacol",
        "macacos",
        "macaca",
        "macacao",
        "maca",
        "mito",
        "teste",
      ])
    ).toEqual(["macacol", "macacos", "macaca", "macacao", "maca"]);
  });
});
