import { TFields } from "@/types";
import { describe, expect, it } from "vitest";
import { isWhere } from "./is-where";

const entity: TFields = [
  {
    name: "fld_1",
    field: "fld1",
  },
  {
    name: "fld_2",
    field: "fld2",
  },
  {
    name: "fld_3",
    field: "fld3",
  },
  {
    name: "fld_4",
    field: "fld4",
  },
];

describe("isWhere", () => {
  it("deve validar where vazio", () => {
    expect(isWhere([], entity)).toEqual([]);
  });
  it("deve validar campo correto", () => {
    expect(isWhere([{ id: "fld_1", value: "=asc" }], entity)).toEqual([
      ["fld_1", "=", "asc"],
    ]);
    expect(isWhere([{ id: "fld_1", value: "=1" }], entity)).toEqual([
      ["fld_1", "=", 1],
    ]);
  });
  it("deve invalidar campo incorreto", () => {
    expect(() =>
      isWhere(
        [
          { id: "fld_0", value: "= asc" },
          { id: "fld_1", value: "= asc" },
        ],
        entity
      )
    ).toThrow("fld_0 não é um campo válido para where use: fld_2,fld_3,fld_4");
  });
  it("deve invalidar campo incorreto", () => {
    expect(() =>
      isWhere(
        [
          { id: "fld_0", value: "=asc" },
          { id: "fld_00", value: "=asc" },
          { id: "fld_1", value: "=asc" },
        ],
        entity
      )
    ).toThrow(
      "fld_0,fld_00 não são campos válidos para where use: fld_2,fld_3,fld_4"
    );
  });
});
