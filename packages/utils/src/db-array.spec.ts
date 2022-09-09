import { describe, expect, it } from "vitest";
import { db } from "./db-array";

describe("dbArray", () => {
  it("Del apaga registros", () => {
    const data = [
      { id: 1, field: "a" },
      { id: 2, field: "b" },
      { id: 3, field: "c" },
      { id: 4, field: "d" },
    ];
    expect(
      db(data)
        .del((rec) => rec.id === 3)
        .run()
    ).toEqual([
      { id: 1, field: "a" },
      { id: 2, field: "b" },
      { id: 4, field: "d" },
    ]);
  });
  it("Lista registros", () => {
    const data = [
      { id: 1, field: "a" },
      { id: 2, field: "b" },
      { id: 3, field: "c" },
      { id: 4, field: "d" },
    ];
    expect(
      db(data)
        .list((rec) => rec.id < 3)
        .run()
    ).toEqual([
      { id: 1, field: "a" },
      { id: 2, field: "b" },
    ]);
  });
  it("insert registro", () => {
    const data = [
      { id: 1, field: "a" },
      { id: 2, field: "b" },
      { id: 3, field: "c" },
      { id: 4, field: "d" },
    ];
    expect(db(data).insert({ id: 5, field: "e" }).run()).toEqual([
      { id: 1, field: "a" },
      { id: 2, field: "b" },
      { id: 3, field: "c" },
      { id: 4, field: "d" },
      { id: 5, field: "e" },
    ]);
  });
});
