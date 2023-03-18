import { describe, expect, it } from "vitest";
import { TField } from "../../types";
import { isWhere } from "./is-where";

const entity: TField[] = [
  {
    name: "fld_1",
    field: "fld1",
    typeField: "int",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  {
    name: "fld_2",
    field: "fld2",
    typeField: "string",
    allowNull: false,
    primaryKey: true,
  },
  {
    name: "fld_3",
    field: "fld3",
    typeField: "string",
    readOnly: true,
  },
  {
    name: "fld_4",
    field: "fld4",
    typeField: "string",
  },
];

describe("isWhere", () => {
  it("deve invalidar where mal formatados", () => {
    expect(() => isWhere(undefined, entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    expect(() => isWhere(null, entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isWhere({}, entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isWhere("field", entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isWhere({ field: 1 }, entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isWhere([{ field: 1 }], entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isWhere([["field", "ascii"]], entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => isWhere([["field"]], entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
  });
  it("deve validar where vazio", () => {
    expect(isWhere([], entity)).toEqual([]);
  });
  it("deve validar campo correto", () => {
    expect(isWhere([["fld_1", "=", "asc"]], entity)).toEqual([
      ["fld_1", "=", "asc"],
    ]);
    expect(isWhere([["fld_1", "=", 1]], entity)).toEqual([["fld_1", "=", 1]]);
  });
  it("deve invalidar campo incorreto", () => {
    expect(() =>
      isWhere(
        [
          ["fld_0", "=", "asc"],
          ["fld_1", "=", "asc"],
        ],
        entity
      )
    ).toThrow("fld_0 não é um campo válido para where use: fld_2,fld_3,fld_4");
  });
  it("deve invalidar campo incorreto", () => {
    expect(() =>
      isWhere(
        [
          ["fld_0", "=", "asc"],
          ["fld_00", "=", "asc"],
          ["fld_1", "=", "asc"],
        ],
        entity
      )
    ).toThrow(
      "fld_0,fld_00 não são campos válidos para where use: fld_2,fld_3,fld_4"
    );
  });
});
