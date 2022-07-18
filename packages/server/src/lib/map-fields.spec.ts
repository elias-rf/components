import { expect, it } from "vitest";
import { mapFields } from "./map-fields";
it("deve mapear objeto", () => {
  expect(mapFields({ a: 1, b: 2 }, ["a", "b", "c"], ["A", "B", "C"])).toEqual({
    A: 1,
    B: 2,
  });
});

it("deve mapear objetos aninhados", () => {
  expect(
    mapFields(
      { a: 1, b: 2, c: { d: 3 } },
      ["a", "b", "c", "d"],
      ["A", "B", "C", "D"]
    )
  ).toEqual({ A: 1, B: 2, C: { D: 3 } });
});

it("deve mapear objetos[] aninhados", () => {
  expect(
    mapFields(
      [{ a: 1, b: 2, c: [{ a: 1 }, { d: 3 }] }],
      ["a", "b", "c", "d"],
      ["A", "B", "C", "D"]
    )
  ).toEqual([{ A: 1, B: 2, C: [{ A: 1 }, { D: 3 }] }]);
});

it("deve manter propriedade desconhecida", () => {
  expect(
    mapFields({ a: 1, b: 2, z: 3 }, ["a", "b", "c"], ["A", "B", "C"])
  ).toEqual({ A: 1, B: 2, z: 3 });
});

it("deve mapear objeto[]", () => {
  expect(mapFields([{ a: 1, b: 2 }], ["a", "b", "c"], ["A", "B", "C"])).toEqual(
    [{ A: 1, B: 2 }]
  );
});
