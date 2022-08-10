import { expect, test } from "vitest";
import { idToWhere } from "./id-to-where";
test("deve receber 1 array e 1 valor", () => {
  expect(idToWhere(["pk1"], "1")).toEqual({ pk1: "1" });
});

test("deve receber 1 valor e 1 array", () => {
  expect(idToWhere("pk1", ["1"])).toEqual({ pk1: "1" });
});

test("deve receber 2 valores", () => {
  expect(idToWhere("pk1", "1")).toEqual({ pk1: "1" });
});

test("deve receber 2 arrays", () => {
  expect(idToWhere(["pk1", "pk2"], ["1", "2"])).toEqual({ pk1: "1", pk2: "2" });
});