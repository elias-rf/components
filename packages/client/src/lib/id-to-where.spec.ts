import { expect, it } from "vitest";
import { idToWhere } from "./id-to-where";

it("deve receber 1 array e 1 valor", () => {
  expect(idToWhere(["pk1"], 1)).toEqual({ pk1: 1 });
});
it("deve receber 2 valores", () => {
  expect(idToWhere("pk1", 1)).toEqual({ pk1: 1 });
});
it("deve receber 2 arrays", () => {
  expect(idToWhere(["pk1", "pk2"], [1, 2])).toEqual({ pk1: 1, pk2: 2 });
});
