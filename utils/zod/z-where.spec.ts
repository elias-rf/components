import { describe, expect, it } from "vitest";
import { TFieldServer } from "../../types";

import { zWhere } from "./z-where";

const entity: TFieldServer[] = [
  {
    name: "fld_1",
    field: "fld1",
    type: "int",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  {
    name: "fld_2",
    field: "fld2",
    type: "string",
    allowNull: false,
    primaryKey: true,
  },
  {
    name: "fld_3",
    field: "fld3",
    type: "string",
    readOnly: true,
  },
  {
    name: "fld_4",
    field: "fld4",
    type: "string",
  },
];

describe("owWhere", () => {
  it("deve invalidar where mal formatados", () => {
    expect(() => zWhere(undefined, entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    expect(() => zWhere(null, entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zWhere({}, entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zWhere("field", entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zWhere({ field: 1 }, entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zWhere([{ field: 1 }], entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zWhere([["field", "ascii"]], entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
    // @ts-expect-error: Unreachable code error
    expect(() => zWhere([["field"]], entity)).toThrow(
      "where deve ser no formato [field, igualdade, valor]"
    );
  });
  it("deve validar where vazio", () => {
    expect(zWhere([], entity)).toBe(undefined);
  });
  it("deve validar campo correto", () => {
    expect(zWhere([["fld_1", "=", "asc"]], entity)).toBe(undefined);
    expect(zWhere([["fld_1", "=", 1]], entity)).toBe(undefined);
  });
  it("deve invalidar campo incorreto", () => {
    expect(() =>
      zWhere(
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
      zWhere(
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
